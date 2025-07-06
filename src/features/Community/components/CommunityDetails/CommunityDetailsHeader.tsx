import { MessageCircle, Share2, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const CommunityDetailsHeader = () => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <div className="flex flex-row justify-between items-start gap-2">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={"https://api.dicebear.com/8.x/initials/png?seed=My Novel Fans"}
            alt="My Novel Fans"
            width={50}
            height={50}
            className="rounded-lg size-13"
          />
          <div>
            <p className="font-semibold text-2xl">Fantasy Lovers</p>
            <p className="text-sm font-mono text-gray-500 mt-1">@FantasyLovers</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2.5">
          <div className="flex flex-row items-center gap-3 font-medium hover:bg-gray-100 cursor-pointer rounded-sm border border-gray-300 px-4 py-1.5">
            <Share2 className="size-4" />
            Share
          </div>
          <div className="flex flex-row items-center gap-2.5 font-medium hover:bg-gray-100 cursor-pointer rounded-sm border border-gray-300 px-4 py-1.5">
            Joined
          </div>
        </div>
      </div>
      <p className=" text-gray-700 mt-4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        vero. Commodi, eaque nostrum voluptatem consequuntur sapiente odio
        reiciendis voluptates expedita recusandae temporibus quia laborum
        dolore, illum, sed molestias. Distinctio, maxime! Tempore odio qui
        mollitia ullam, aperiam amet, libero dolorem earum minus excepturi ipsum
        dignissimos saepe! Iste quia officia excepturi vitae.
      </p>
      <div className="flex flex-row items-center gap-5 mt-4">
        <div className="flex text-gray-700 flex-row items-center gap-1">
          <Users className="size-3.5" />
          <p className="text-sm">100 Members</p>
        </div>
        <div className="flex text-gray-700 flex-row items-center gap-1">
          <MessageCircle className="size-3.5" />
          <p className="text-sm">100 Posts</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailsHeader;
