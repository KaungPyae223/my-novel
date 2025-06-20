"use client";

import Image from "next/image";
import React from "react";

const CommunityCard = ({
  name,
  members,
}: {
  name: string;
  members: number;
}) => {
  const avatarUrl = `https://api.dicebear.com/8.x/initials/png?seed=${name}`;

  console.log(avatarUrl);

  return (
    <div className="flex cursor-pointer flex-row items-center gap-3">
      <Image
        src={avatarUrl}
        alt={name}
        width={35}
        height={35}
        className="rounded-lg"
      />
      <div>
        <p className="font-medium font-poppins">{name}</p>
        <p className="text-xs pt-0.5 text-gray-500">{members} Members</p>
      </div>
    </div>
  );
};

export default CommunityCard;
