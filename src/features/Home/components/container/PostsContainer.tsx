import Loading from "@/features/Components/Loading/Loading";
import PostCard from "../posts/PostCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import EmptyState from "../EmptyState";
import PostComments from "../posts/PostComments";
import {
  Dialog,
} from "@/components/ui/dialog";
import { useState } from "react";

const PostsContainer = () => {

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/home/posts`)
  );

  const [openComments, setOpenComments] = useState<string>("");

  if (isLoading) return < Loading />;
  if (error) throw error; 

  if (data?.data.length === 0) return <EmptyState title="Posts" />;

  return (
    <>
      <div className="w-full space-y-6">
        {data?.data.map((post: any) => (
          <PostCard openComments={openComments} setOpenComments={setOpenComments} key={post.id} post={post} />
        ))}
      </div>
      <Dialog open={openComments !== ""} onOpenChange={()=>setOpenComments("")}>  
        <PostComments postID={openComments} />
      </Dialog>
    </>
  );
};

export default PostsContainer;
