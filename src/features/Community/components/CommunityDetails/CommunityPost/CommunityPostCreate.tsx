import { Camera, Image } from "lucide-react";
import React from "react";

const CommunityPostCreate = () => {
  return (
    <div className="w-full p-4 py-6 bg-white border border-gray-200 shadow-xs rounded-lg">
      <form action="">
        <textarea
          name=""
          id=""
          rows={3}
          placeholder="What's on your mind?"
          className="w-full p-5 resize-none border border-gray-200 rounded-md"
        ></textarea>
        <div className="flex flex-row items-center justify-between mt-2 gap-2">
          <div className="flex flex-row items-center gap-3 text-sm font-medium cursor-pointer rounded-md text-blue-800 border border-blue-300 px-3 hover:bg-blue-50 py-2">
            <Camera className="size-5" />
            <p>Photo</p>
          </div>
          <button
            type="submit"
            className="bg-gray-800 font-medium text-white px-5 text-sm py-2 rounded-md"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunityPostCreate;
