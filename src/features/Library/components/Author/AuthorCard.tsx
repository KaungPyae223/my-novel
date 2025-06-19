import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthorCard = () => {
  return (
    <div className="w-full p-4 py-6 flex flex-col items-center justify-center overflow-hidden bg-white rounded-md shadow border border-gray-200">
      <div>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          alt=""
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>
      <p className="text-lg font-medium mt-3">John Doe</p>
      <p className="text-xs font-mono mt-1.5 text-gray-600">@Jhon1234</p>
      <div className="flex mt-1.5 flex-row items-center justify-center gap-1 text-sm">
        <Heart className="size-3.5 text-red-700" />
        2.3k
      </div>
      <p className="text-gray-700 text-sm mt-5 line-clamp-5 text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
        commodi praesentium aliquam, magnam veritatis ipsam laudantium eaque ex
        eius amet provident explicabo iusto reiciendis repellendus expedita
        asperiores ad dolores voluptatum! Tempore, odio distinctio? Sit eaque
        iusto asperiores deleniti numquam, voluptatibus voluptatem quia delectus
        iste distinctio, officia eligendi dignissimos aut consectetur?
      </p>
      <div className="grid grid-cols-2 w-full my-6 gap-3">
        <AuthorProperties label="Novels" value="30" />
        <AuthorProperties label="Completed" value="15" />
        <AuthorProperties label="Followers" value="1.2k" />
        <AuthorProperties label="Views" value="1.2M" />
      </div>
      <Link href={`/authors/1` } className="w-full rounded-sm border text-sm font-medium text-center py-2 cursor-pointer border-gray-300">
        View Profile
      </Link>
    </div>
  );
};

const AuthorProperties = ({
    label,
    value
    }:{
        label: string;
        value: string;
    }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-0.5 text-sm ">
            <p className="text-gray-900 font-medium">{value}</p>
            <p className="text-gray-600">{label}</p>
        </div>
    )
}

export default AuthorCard;
