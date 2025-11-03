import PostCard from "../posts/PostCard";
import EmptyState from "../EmptyState";
import PostComments from "../posts/PostComments";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import ScrollLoading from "@/features/Components/Loading/ScrollLoading";
import ScrollEnd from "@/features/Components/Loading/ScrollEnd";
import { useScrollFetch } from "@/utils/useScrollFetch";

const PostsContainer = () => {
  const { data, isLoading, error, hasMore, observerRef } = useScrollFetch({
    url: `/home/posts`,
    key: `post`,
  });

  if (error) {
    throw error;
  }

  const [openComments, setOpenComments] = useState<string>("");

  return (
    <>
      <div className="w-full space-y-6">
        {data?.map((post: any) => (
          <PostCard
            setOpenComments={setOpenComments}
            post={post}
            key={post.id}
          />
        ))}
        {hasMore && <div ref={observerRef}></div>}
        {data?.length === 0 && !isLoading && <EmptyState title="No Posts" />}
        {isLoading && <ScrollLoading message="Loading more posts..." />}
        {!hasMore && <ScrollEnd />}
      </div>

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
