import { Clock, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreatedCommunityCard = () => {
  return (
    <div className="w-full p-4 py-6 bg-pink-50/80 rounded-md shadow border border-gray-200">
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

      <div className=" font-medium rounded-full border border-gray-300 px-3 my-3 py-0.5 w-fit text-xs text-gray-900">
        Book Club
      </div>
      <p className="text-sm text-gray-700 text-justify line-clamp-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi magnam
        libero culpa assumenda soluta, maiores obcaecati tempora quo minima?
        Placeat nam numquam neque deleniti asperiores porro quae, modi ex
        voluptates quibusdam, obcaecati, quis quod saepe itaque corrupti
        distinctio amet illum.
      </p>

      <div className="grid grid-cols-2 gap-2 my-6 ">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-sm font-semibold">100</p>
          <p className=" text-xs text-gray-600">Members</p>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-sm font-semibold">100</p>
          <p className=" text-xs text-gray-600">Posts</p>
        </div>
      </div>
      <div className="flex text-xs text-gray-600 mb-3 mt-1.5 flex-row items-center gap-1">
        <Clock className="size-3" />
        <p>Active 2h ago</p>
      </div>

      <Link href={`/communities/1`}>
        <div className="bg-gray-800 text-center text-sm text-white px-3 py-2 rounded font-medium cursor-pointer">
          View
        </div>
      </Link>
    </div>
  );
};

export default CreatedCommunityCard;
