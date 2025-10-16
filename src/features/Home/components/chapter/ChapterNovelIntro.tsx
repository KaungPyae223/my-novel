import React from "react";
import Image from "next/image";

const ChapterNovelIntro = ({ novel }: { novel: any }) => {
  return (
    <div className="my-6 p-5 rounded-lg flex flex-row gap-6 bg-blue-50">
      <Image
        src={novel?.image}
        alt={novel?.title}
        width={158}
        height={158}
        className="w-32 object-cover items-center flex-1 rounded-md"
      />
      <div>
        <div className="flex flex-row gap-3 items-center">
          <p className="font-semibold text-2xl font-poppins">{novel?.title}</p>
          <div className=" rounded-full text-nowrap text-sm px-3 py-0.5  bg-blue-100 text-blue-800 font-medium">
            {novel?.genre.genre}
          </div>
        </div>

        <p className="mt-3 text-gray-600 line-clamp-6 text-justify text-sm">
          {novel?.description}
        </p>
      </div>
    </div>
  );
};

export default ChapterNovelIntro;
