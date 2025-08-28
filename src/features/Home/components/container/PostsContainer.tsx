import Loading from "@/features/Components/Loading/Loading";
import PostCard from "../posts/PostCard";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";

const PostsContainer = () => {

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/recommend-posts`)
  );

  if (isLoading) return <Loading />;
  if (error) throw error; 

  return (
    <div className="w-full space-y-6">
      {data?.data.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
