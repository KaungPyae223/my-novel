import { Clock } from "lucide-react";
import React from "react";

const PostCardHeader = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      <div>
        <p className="font-medium font-poppins">Marcos Bibo</p>
        <div className="flex flex-row items-center text-gray-500 mt-0.5 gap-1 text-xs">
          <Clock className="size-3" />

          <p>4h ago</p>
        </div>
      </div>
    </div>
  );
};

export default PostCardHeader;
