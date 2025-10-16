import Loading from "@/features/Components/Loading/Loading";
import PostCard from "../posts/PostCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import EmptyState from "../EmptyState";
import PostComments from "../posts/PostComments";
import { Dialog } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";

const PostsContainer = () => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/home/posts?page=${page}`)
  );

  useEffect(() => {
    if (data?.data?.length) {
      setPosts((prev: any) => [
        ...prev,
        ...data.data.filter(
          (post: any) => !prev.some((p: any) => p.id === post.id)
        ),
      ]);
    }
    setHasMore(data?.meta?.current_page < data?.meta?.last_page);
  }, [data]);

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  const [openComments, setOpenComments] = useState<string>("");

  return (
    <>
      <div className="w-full space-y-6">
        {posts.map((post: any, index: number) => (
          <div
            ref={index === posts.length - 2 ? observerRef : null}
            key={post.id}
          >
            <PostCard
              openComments={openComments}
              setOpenComments={setOpenComments}
              post={post}
            />
          </div>
        ))}
      </div>
      {isLoading && <ScrollLoading message="Loading more posts..." />}
      {!hasMore && <ScrollEnd />}
      <Dialog
        open={openComments !== ""}
        onOpenChange={() => setOpenComments("")}
      >
        <PostComments postID={openComments} />
      </Dialog>
    </>
  );
};

export default PostsContainer;
