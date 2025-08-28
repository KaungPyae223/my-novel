import { Heart, MessageCircle } from "lucide-react";
import React from "react";

const PostView = ({
  post: { love_count, comment_count },
}: {
  post: { love_count: number; comment_count: number };
}) => {
  return (
    <div className="flex flex-row items-center justify-between gap-3 text-gray-500 text-sm">
      <div className="flex flex-row items-center gap-1.5">
        {love_count}
        <Heart className="size-4" />
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-row items-center gap-1.5">
          {comment_count}
          <MessageCircle className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default PostView;
