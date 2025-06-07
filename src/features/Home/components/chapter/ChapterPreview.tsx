import React from "react";

const ChapterPreview = () => {
  return (
    <>
      <p className="mt-1 font-medium">Chapter Preview : </p>
      <p className="mt-2 text-gray-800 line-clamp-3 text-justify text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        autem quasi repellat. Odit, neque placeat architecto facere atque
        temporibus saepe libero doloremque! Maiores numquam veniam saepe
        molestiae eligendi recusandae cumque cupiditate aliquam at illo
        incidunt, culpa deserunt. Maxime rem officia voluptate dicta. Ex
        distinctio, dolorem dolore natus aspernatur dolorum aliquam.
      </p>
      <div className=" w-full text-center bg-blue-700 py-2 rounded-lg text-sm my-6 text-white font-medium cursor-pointer">
        Read Full Chapter
      </div>
    </>
  );
};

export default ChapterPreview;
