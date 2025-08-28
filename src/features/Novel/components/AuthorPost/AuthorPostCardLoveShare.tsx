import { Heart, MessageCircle } from "lucide-react";
import React from "react";
import { usePostLoved } from "@/services/post";
import { motion } from "framer-motion";

const AuthorPostCardLoveShare = ({ post }: { post: any }) => {
  const { mutate } = usePostLoved({id: post.id});

  const handleLoved = () => {
    mutate(post.id);
  };

  return (
    <div className="grid grid-cols-2 text-sm  gap-3">
      <motion.div
        key={post.already_loved ? "filled" : "unfilled"} // forces animation when state changes
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleLoved}
        className="cursor-pointer"
      >
        {post.already_loved ? (
          <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
            <Heart className="size-4 text-red-500" fill="currentColor" />
            Loved ({post.love_count})
          </div>
        ) : (
          <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
            <Heart className="size-4" />
            Love ({post.love_count})
          </div>
        )}
      </motion.div>
      <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
        <MessageCircle className="size-4" />
        <p>Comment ({post.comment_count})</p>
      </div>
    </div>
  );
};

export default AuthorPostCardLoveShare;
