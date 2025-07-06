import { Camera } from "lucide-react";
import React from "react";

const ProfileImageEdit = () => {
  return (
    <div className=" flex flex-col items-center">

      <img
        src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="size-28 rounded-full"
      />

      <div className="flex mt-4 bg-gray-200 py-2 px-4 w-fit items-center justify-center gap-3 text-sm text-gray-700 font-semibold rounded-sm"><Camera className="size-4" /> Change Photo</div>
      <p className="text-xs mt-2  text-gray-500">PNG, JPG up to 5MB</p>
    </div>
  );
};

export default ProfileImageEdit;
