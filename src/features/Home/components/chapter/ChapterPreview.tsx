import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const ChapterPreview = ({
  chapter: { title, preview, id },
  novelID,
}: {
  chapter: { title: string; preview: string; id: string };
  novelID: string;
}) => {
  const router = useRouter();

  const handleReadChapter = () => {
    router.push(`/novel/${novelID}/chapter/${id}`);
  };

  return (
    <>
      <p className="mt-1 text-xl font-medium">{title} </p>
      <p className="mt-3 text-gray-800 line-clamp-3 text-justify font-serif">
        {preview}
      </p>
      <div
        onClick={handleReadChapter}
        className=" w-full text-center bg-blue-700 py-2.5 rounded-md text-sm my-6 text-white font-medium cursor-pointer"
      >
        Read Full Chapter
      </div>
    </>
  );
};

export default ChapterPreview;
