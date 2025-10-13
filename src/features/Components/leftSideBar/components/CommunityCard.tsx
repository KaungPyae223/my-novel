"use client";

import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { avatarFallback } from "@/utils/avatarFallBack";

const CommunityCard = ({
  name,
  members,
}: {
  name: string;
  members: number;
}) => {
  

  return (
    <div className="flex cursor-pointer flex-row items-center gap-3">
      <Avatar className="w-9 h-9">
        <AvatarImage
          src={""}
          alt={name}
          className="w-9 h-9 object-cover rounded-md"
        />
        <AvatarFallback className="w-9 h-9 flex items-center justify-center bg-green-200 text-gray-700 font-medium rounded-md">
          {avatarFallback(name)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium font-poppins">{name}</p>
        <p className="text-xs pt-0.5 text-gray-500">{members} Members</p>
      </div>
    </div>
  );
};

export default CommunityCard;
