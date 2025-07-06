import { Calendar, Edit, Mail, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfileHeader = () => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <div className="flex flex-row justify-between items-start gap-2">
        <div className="flex flex-row items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="size-16 object-cover rounded-full"
          />
          <div>
            <p className="font-semibold text-2xl">Fantasy Lovers</p>
            <p className="text-sm font-mono text-gray-500 mt-1">
              @FantasyLovers
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2.5">
          <Link href="/profile/edit" className="flex flex-row bg-gray-800 text-white items-center gap-3 font-medium hover:bg-gray-700 cursor-pointer rounded-sm border border-gray-300 px-4 py-1.5">
            <Edit className="size-4" />
            Edit Profile
          </Link>
        </div>
      </div>
      <p className=" text-gray-700 mt-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        vero. Commodi, eaque nostrum voluptatem consequuntur sapiente odio
        reiciendis voluptates expedita recusandae temporibus quia laborum.
      </p>
      <div className="flex flex-row items-center gap-6 mt-4">
        <div className="flex text-gray-700 flex-row items-center gap-2">
          <MapPin className="size-3.5" />
          <p className="text-sm">N/A</p>
        </div>
        <div className="flex text-gray-700 flex-row items-center gap-2">
          <Calendar className="size-3.5" />
          <p className="text-sm">Joined March 2022</p>
        </div>
        <div className="flex text-gray-700 flex-row items-center gap-2">
          <Mail className="size-3.5" />
          <a
            href="mailto:example@example.com"
            className="text-sm text-blue-800"
          >
            example@example.com
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
