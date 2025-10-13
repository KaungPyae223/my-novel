import { Heart, MessageCircle } from "lucide-react";
import React from "react";
import { usePostLoved } from "@/services/post";
import { motion } from "framer-motion";

const PostLoveShare = ({ id, already_loved,setLoveCount }: { id: string, already_loved: boolean,setLoveCount: React.Dispatch<React.SetStateAction<number>> }) => {
  const { mutate } = usePostLoved({id});


  const [alreadyLoved, setAlreadyLoved] =
    React.useState<boolean>(already_loved);

  const handleLoved = () => {
    mutate(id);

    if (alreadyLoved) {
      setLoveCount((prev) => prev - 1);
    } else {
      setLoveCount((prev) => prev + 1);
    }
    setAlreadyLoved(!alreadyLoved);
  };

  return (
    <div className="grid grid-cols-2 text-sm  gap-3">
      <motion.div
        key={alreadyLoved ? "filled" : "unfilled"} // forces animation when state changes
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleLoved}
        className="cursor-pointer"
      >
        {alreadyLoved ? (
          <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
            <Heart className="size-4 text-red-500" fill="currentColor" />
            Loved
          </div>
        ) : (
          <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
            <Heart className="size-4" />
            Love
          </div>
        )}
      </motion.div>
      <div className="flex w-full hover:bg-gray-100 py-2 rounded-lg cursor-pointer gap-3 flex-row items-center justify-center">
        <MessageCircle className="size-4" />
        <p>Comment</p>
      </div>
    </div>
  );
};

export default PostLoveShare;
