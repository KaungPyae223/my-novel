import { Book, Eye, MessageCircle, Users } from "lucide-react";
import React from "react";
import Trending from "../Novels/Trending";
import Image from "next/image";

const CommunityCard = () => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow border p-4 border-gray-200">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={"https://api.dicebear.com/8.x/initials/png?seed=My Novel Fans"}
          alt="My Novel Fans"
          width={50}
          height={50}
          className="rounded-lg size-11"
        />
        <div>
          <p className="font-semibold  text-xl">The King of Fire</p>
          <p className="text-xs font-mono mt-1.5 text-gray-600">
            @TheKingOfFire
          </p>
        </div>
      </div>
      <div className="text-xs my-3 px-2  py-0.5 rounded-full text-gray-800 border w-fit font-medium border-gray-300">
        Genre Discussion
      </div>
      <p className="text-gray-700 text-sm mt-3 line-clamp-3 text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sequi hic
        magni eius quae porro adipisci corrupti minus tempora maxime sunt, at
        vero unde architecto in voluptate natus accusamus, deserunt rem! Maiores
        libero, corporis consequatur, dicta beatae iusto excepturi aspernatur
        molestiae ex harum autem ipsa! Aut itaque nostrum tenetur ex.
      </p>
      <div className="mt-6 w-full flex justify-around">
        <div className="flex flex-col text-xs text-gray-700 items-center gap-1">
          <Users className="size-4" />
          <p className="text-sm font-medium text-gray-800">21.5k</p>
          <p>Members</p>
        </div>
        <div className="flex flex-col text-xs text-gray-700 items-center gap-1">
          <MessageCircle className="size-4" />
          <p className="text-sm font-medium text-gray-800">21.5k</p>
          <p>Posts</p>
        </div>
      </div>
      <Trending />
      <div className="w-full rounded-sm border text-sm font-medium text-center py-2 cursor-pointer bg-gray-800 text-white">
        Join Community
      </div>
    </div>
  );
};

export default CommunityCard;
