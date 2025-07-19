"use client";
import Loading from "@/features/Components/Loading/Loading";
import useFetchData from "@/services/fetcher";
import React, { useEffect } from "react";
import NovelEditForm from "../components/NovelEdit/NovelEditForm";
import { ArrowLeft } from "lucide-react";
import Middleware from "@/features/Components/Middleware/Middleware";
import { useRouter } from "next/navigation";
import useStoreNovel from "@/store/useNovelStore";

const NovelEditPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const { setNovelData } = useStoreNovel();

  const handleBack = () => {
    router.push("/my-novels");
  };

  const { data, isLoading, error } = useFetchData(`/novels/${id}`);

  const [defaultValues, setDefaultValues] = React.useState<boolean>(false);

  useEffect(() => {
    if (isLoading) return;
    const novelData = data?.data;
    setNovelData({
      title: novelData?.title,
      description: novelData?.description,
      genre: JSON.stringify({ id: novelData?.genre_id, genre: novelData?.genre }),
      synopsis: novelData?.synopsis,
      tags: novelData?.tags,
      status: novelData?.status,
      coverImage: novelData?.cover_image,
    }); 
    setDefaultValues(true);

   
    
  }, [isLoading]);

  


  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
    <Middleware>
      <div className="py-9 px-6 mx-auto overflow-y-hidden max-w-6xl">
        <div>
          <div
            onClick={handleBack}
            className="flex flex-row cursor-pointer items-center gap-3 px-5 py-3 font-medium rounded-md text-sm text-gray-800 w-fit"
          >
            <ArrowLeft className="size-4" /> Back to My Novels
          </div>
          <div className="mt-6">
            <p className="font-semibold text-3xl">Edit Novel</p>
            <p className="text-gray-600 mt-3">Edit your novel's information</p>
          </div>

          {defaultValues && <NovelEditForm />}
        </div>
      </div>
    </Middleware>
  );
};

export default NovelEditPage;
