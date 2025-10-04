import Loading from "@/features/Components/Loading/Loading";
import PostCard from "../posts/PostCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import EmptyState from "../EmptyState";

const PostsContainer = () => {

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/home/posts`)
  );

  if (isLoading) return < Loading />;
  if (error) throw error; 

  if (data?.data.length === 0) return <EmptyState title="Posts" />;

  return (
    <div className="w-full space-y-6">
      {data?.data.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
