import { Book, Eye, User, Users } from "lucide-react";
import React from "react";
import Trending from "../Novels/Trending";

const AuthorCard = () => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow border p-4 border-gray-200">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        alt=""
        className="w-24 mx-auto h-24 object-cover rounded-full"
      />
      <p className="text-xl text-center font-medium mt-3">John Doe</p>
      <p className="text-gray-700 text-sm mt-3 line-clamp-3 text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        laboriosam minus ex, sequi cumque nostrum sunt eius corrupti
        consequatur. Placeat recusandae similique laudantium ipsum ex laborum
        ducimus sunt libero non!
      </p>
      <div className="mt-6 w-full flex justify-around">
        <div className="flex flex-col text-xs text-gray-700 items-center gap-1">
          <Users className="size-4" />
          <p className="text-sm font-medium text-gray-800">21.5k</p>
          <p>Followers</p>
        </div>
        <div className="flex flex-col text-xs text-gray-700 items-center gap-1">
          <Book className="size-4" />
          <p className="text-sm font-medium text-gray-800">21.5k</p>
          <p>Novels</p>
        </div>
        <div className="flex flex-col text-xs text-gray-700 items-center gap-1">
          <Eye className="size-4" />
          <p className="text-sm font-medium text-gray-800">21.5k</p>
          <p>Views</p>
        </div>
      </div>
      <Trending />
      <div className="w-full rounded-sm border text-sm font-medium text-center py-2 cursor-pointer border-gray-300">
        Follow
      </div>
    </div>
  );
};

export default AuthorCard;
