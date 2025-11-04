import React from "react";
import LetterAlert from "../Letter/LetterAlert";
import WriteFanLetter from "../Letter/WriteFanLetter";
import LetterHistory from "../Letter/LetterHistory";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";

const LetterContainer = ({ id, title }: { id: string; title: string }) => {

  const { data, isLoading } = useFetchData(`/novels/fan-letter-status/${id}`);

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-6 ">
      <LetterAlert />
      {data.open_letter ? (
        <WriteFanLetter novelID={id} title={title} />
      ) : (
        <p className="text-center text-gray-500">{data.message}</p>
      )}
      <LetterHistory novelID={id}/>
    </div>
  );
};

export default LetterContainer;
