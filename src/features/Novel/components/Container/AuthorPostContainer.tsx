import React from "react";
import AuthorPostCard from "../AuthorPost/AuthorPostCard";
import Loading from "@/features/Components/Loading/Loading";
import useFetchData from "@/services/fetcher";
import EmptyState from "@/features/Components/EmptyState/EmptyState";

const AuthorPostContainer = ({id}: {id: string}) => {

  const { data, isLoading, error } = useFetchData(`/novels/posts/${id}`);

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <div className="space-y-6">
      {
        data?.data.length === 0 ? (
          <EmptyState title="No Posts" />
        ) : (
          data?.data.map((post: any) => (
            <AuthorPostCard key={post.id} post={post} />
          ))
        )
      }
    </div>
  );
};

export default AuthorPostContainer;
