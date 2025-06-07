import React from "react";

const AuthorCard = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-3">
      <div className="flex flex-row items-center gap-3">
        <img
          className="w-11 h-11 rounded-full object-cover"
          src={
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
        />
        <div>
          <p className="font-medium font-poppins">John Doe</p>
          <p className="text-xs mt-0.5 text-gray-500">35k followers</p>
        </div>
      </div>

      <div className="border border-gray-400 text-sm  text-gray-600 px-2.5 py-1 rounded-lg">
        Follow
      </div>
    </div>
  );
};

export default AuthorCard;
