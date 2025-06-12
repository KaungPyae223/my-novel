import { BookOpen } from "lucide-react";
import React from "react";

const NovelIntro = () => {
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
        </div>
        <div className="flex mt-2 flex-row gap-3 items-center">
          <div className=" rounded-full text-xs px-3 py-0.5  bg-blue-100 text-blue-800 font-semibold">
            Sci-Fi
          </div>
          <div className=" rounded-full text-xs px-3 py-0.5  border border-gray-300 text-amber-600 font-medium">
            Complete
          </div>
        </div>
        <p className="mt-3 text-gray-600 line-clamp-2 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          autem quasi repellat. Odit, neque placeat architecto facere atque
          temporibus saepe libero doloremque! Maiores numquam veniam saepe
          molestiae eligendi recusandae cumque cupiditate aliquam at illo
          incidunt, culpa deserunt. Maxime rem officia voluptate dicta. Ex
          distinctio, dolorem dolore natus aspernatur dolorum aliquam.
        </p>
        <div className="mt-3 text-xs flex flex-row items-center gap-1.5 text-gray-700">
          <BookOpen className="size-3.5" />

          <p>30 Chapters</p>
        </div>
        <div className="flex flex-row gap-2 mt-3">
            <p className="text-xs bg-white rounded-full border border-gray-300 px-2 py-0.5 font-medium text-gray-800" >Cyber Punk</p>
            <p className="text-xs bg-white rounded-full border border-gray-300 px-2 py-0.5 font-medium text-gray-800" >Philosophy</p>
        </div>
      </div>
    </div>
  );
};

export default NovelIntro;
