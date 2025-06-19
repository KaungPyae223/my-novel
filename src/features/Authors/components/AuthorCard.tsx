import { Heart, Users } from "lucide-react";
import React from "react";

const FollowingAuthorCard = () => {
  return (
    <div className="w-full bg-white shadow border border-gray-200 rounded-lg p-4">
      <div className="flex flex-row items-center gap-5">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-xl font-poppins">John Doe</p>
          <p className="text-xs font-mono  text-gray-500">@jhon_doe_0123344</p>
          <div className="mt-2 text-sm text-gray-500 flex items-center gap-5">
            <div className="flex items-center gap-1">
              <Users className="size-4" />
              12.4k
            </div>
            <div className="flex items-center gap-1">
              <Heart className="size-4" />
              12.5k
            </div>
          </div>
        </div>
      </div>
      <p className="my-3 text-sm text-gray-600 line-clamp-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea alias
        facere expedita odio enim, laborum quasi optio, numquam reiciendis
        inventore, dolorem veniam officiis? Veritatis at sed quod quaerat
        distinctio laborum necessitatibus aliquam, excepturi officiis quidem.
        Ullam ab accusamus iste eligendi.
      </p>
      <div className="flex mt-5 items-center text-sm text-gray-700 justify-between gap-2">
        <p>Novel Published:</p>
        <p className="font-semibold text-gray-800">10</p>
      </div>
      <div className="flex mt-2 mb-5 items-center text-sm text-gray-700 justify-between gap-2">
        <p>Latest Novel:</p>
        <p className="font-semibold text-blue-800">The Arrorow and the green</p>
      </div>
      <hr className="border-gray-200" />
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="flex items-center text-sm font-semibold cursor-pointer justify-center gap-2 rounded-md bg-blue-500 text-white px-2 py-2">Following</div>
        <div className=" text-blue-800 border text-sm cursor-pointer border-blue-300 px-2 py-2 rounded-lg flex items-center justify-center">View Profile</div>

      </div>
    </div>
  );
};

export default FollowingAuthorCard;
