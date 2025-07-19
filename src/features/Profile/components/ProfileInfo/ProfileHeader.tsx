import { formatDate } from "@/utils/formatDate";
import { Calendar, Edit, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileHeader = ({ data }: { data: any }) => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <div className="flex flex-row justify-between items-start gap-2">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={
              data?.profile_image ||
              `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
                data?.full_name
              )}`
            }
            alt=""
            className="size-16 object-cover rounded-full"
            width={64}
            height={64}
          />

          <div>
            <p className="font-semibold text-2xl">{data?.full_name}</p>
            <p className="text-sm font-mono text-gray-500 mt-1">
              {data?.username}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2.5">
          <Link
            href="/profile/edit"
            className="flex flex-row bg-gray-800 text-white items-center gap-3 font-medium hover:bg-gray-700 cursor-pointer rounded-sm border border-gray-300 px-4 py-1.5"
          >
            <Edit className="size-4" />
            Edit Profile
          </Link>
        </div>
      </div>
      <p className=" text-gray-700 mt-5 text-justify">{data?.about}</p>
      <div className="flex flex-row items-center gap-6 mt-4">
        <div className="flex text-gray-700 flex-row items-center gap-2">
          <MapPin className="size-3.5" />
          <p className="text-sm">{data?.location || "N/A"}</p>
        </div>
        <div className="flex text-gray-700 flex-row items-center gap-2">
          <Calendar className="size-3.5" />
          <p className="text-sm">{formatDate(data?.created_at)}</p>
        </div>
        <div className="flex text-gray-700 flex-row items-center gap-2">
          <Mail className="size-3.5" />
          <a href={`mailto:${data?.email}`} className="text-sm text-blue-800">
            {data?.email}
          </a>
        </div>
      </div>
      <div className="flex flex-row  items-center justify-around gap-6 mt-9">
        <div className="flex flex-col items-center ">
          <p className="font-semibold text-2xl">320</p>
          <p className="text-sm text-gray-600">Novels</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-2xl">12.4k</p>
          <p className="text-sm text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-2xl">12.4k</p>
          <p className="text-sm text-gray-600">Following</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-2xl">12.4k</p>
          <p className="text-sm text-gray-600">Total Likes</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
