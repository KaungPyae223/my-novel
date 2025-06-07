import React from "react";

const ChapterNovelIntro = () => {
  return (
    <div className="my-6 p-5 rounded-lg flex flex-row gap-6 bg-blue-50">
      <img
        src={
          "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop"
        }
        alt=""
        className="w-32 h-full object-cover rounded-md"
      />
      <div>
        <div className="flex flex-row gap-3 items-center">
          <p className="font-semibold text-2xl font-poppins">The Willing</p>
          <div className=" rounded-full text-sm px-3 py-0.5  bg-blue-100 text-blue-800 font-medium">
            Sci-Fi
          </div>
        </div>
        <p className="mt-2 font-medium text-gray-800">
          Chapter 15: The main Major of Hello
        </p>
        <p className="mt-3 text-gray-500 line-clamp-4 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          autem quasi repellat. Odit, neque placeat architecto facere atque
          temporibus saepe libero doloremque! Maiores numquam veniam saepe
          molestiae eligendi recusandae cumque cupiditate aliquam at illo
          incidunt, culpa deserunt. Maxime rem officia voluptate dicta. Ex
          distinctio, dolorem dolore natus aspernatur dolorum aliquam.
        </p>
      </div>
    </div>
  );
};

export default ChapterNovelIntro;
