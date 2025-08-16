import { Heart } from "lucide-react";
import React from "react";

const MyNovelDetailsPostCommentContainer = () => {
  return <div className="space-y-3">
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>

  </div>;
};

const CommentCard = () => {
  return (
    <div className="border border-gray-200 shadow-sm p-4 rounded-xl bg-white">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
            alt="User avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm text-gray-900">Aung Aung</p>
            <p className="text-xs text-gray-500">2h ago</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 transition">
          <Heart className="size-4 text-red-500" fill="currentColor" />
          <span>100</span>
        </div>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        quae vel dolorum repudiandae soluta at!
      </p>
    </div>
  );
};

export default MyNovelDetailsPostCommentContainer;
