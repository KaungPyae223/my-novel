import React from "react";
import ProfileNovelCard from "../Novel/ProfileNovelCard";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";

const ProfileNovelsContainer = () => {

  const { data, isLoading } = useFetchData("/my-novels");

  if (isLoading) return <Loading />;

  if (data?.data?.length == 0) return <EmptyState title="No Novels to Show" />;

  return (
    <div className="my-6 grid grid-cols-2 gap-4">
      {data?.data?.map((novel: any) => (
        <ProfileNovelCard key={novel.id} novel={novel} />
      ))}
     
    </div>
  );
};

export default ProfileNovelsContainer;
