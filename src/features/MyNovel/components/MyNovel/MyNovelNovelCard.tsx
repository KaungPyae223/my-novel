import { BookOpen, Edit, Eye, Heart } from "lucide-react";
import React from "react";

const MyNovelNovelCard = () => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow border border-gray-200">
      <div className="relative">
        <img
          src={
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=800&fit=crop"
          }
          alt=""
          className="w-full h-60 object-cover"
        />

        <div className="px-2 absolute bg-white top-2 left-2 py-0.5 rounded-full text-xs text-gray-800 border border-gray-300 font-medium">
          Sci-Fi
        </div>
        <div className="px-2 absolute top-2 right-2 bg-blue-100 py-0.5 rounded-full text-xs text-blue-800 font-medium">
          Ongoing
        </div>
      </div>
      <div className="p-4">
        <p className="font-medium text-lg">The Willing</p>

        <p className="text-sm text-gray-700 my-3 mb-5 line-clamp-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          sunt, assumenda dicta voluptates ipsam quo praesentium eum veritatis.
          Cumque blanditiis id at in officiis, nihil quis enim nisi, dolorum
          nostrum dolores omnis iste ullam qui repellendus! Sit fuga ab error
          asperiores! Inventore veritatis unde, minima quia neque hic magni quo.
        </p>

        <div className="flex flex-row items-center gap-2 mb-2">
          <div className="px-2 py-0.5 rounded-full text-xs text-gray-800 border border-gray-300 font-medium">
            Sci-Fi
          </div>
          <div className="px-2 py-0.5 rounded-full text-xs text-gray-800 border border-gray-300 font-medium">
            Sci-Fi
          </div>
          <div className="px-2 py-0.5 rounded-full text-xs text-gray-800 border border-gray-300 font-medium">
            Sci-Fi
          </div>
        </div>

        <div className="grid grid-cols-3 mt-5 mb-4 text-gray-600 text-sm gap-2">
          <div className="flex flex-row items-center gap-1.5">
            <Heart className="size-3.5" />
            <p>235</p>
          </div>

          <div className="flex mx-auto flex-row items-center gap-1.5">
            <Eye className="size-3.5" />
            <p>235</p>
          </div>
          <div className="flex ms-auto flex-row items-center gap-1.5">
            <BookOpen className="size-3.5" />
            <p>25</p>
          </div>
        </div>
        <div className=" flex gap-2">
          <button className="bg-gray-800 flex-1 flex flex-row items-center justify-center gap-2 cursor-pointer text-white px-3 py-1.5 rounded-md text-sm font-medium">
            <Eye className="size-3.5" /> View
          </button>
          <button className="text-gray-800 border border-gray-200 flex flex-row items-center justify-center gap-2 cursor-pointer px-3 py-1.5 rounded-md text-sm font-medium">
            <Edit className="size-3.5" /> Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyNovelNovelCard;
