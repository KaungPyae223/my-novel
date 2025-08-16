import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Heart,
  MessageCircle,
  Pencil,
  Send,
  Share2,
  Trash,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import MyNovelDetailsPostCommentContainer from "../Container/MyNovelDetailsPostCommentContainer";

const PostCard = () => {
  const postRef = useRef<HTMLDivElement>(null);
  const commentContainerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const adjustHeight = () => {
    if (
      postRef.current &&
      commentContainerRef.current &&
      headerRef.current &&
      footerRef.current &&
      scrollerRef.current
    ) {
      commentContainerRef.current.style.height = `${postRef.current.offsetHeight}px`;

      scrollerRef.current.style.height = `${
        postRef.current.offsetHeight -
        (headerRef.current.offsetHeight + footerRef.current.offsetHeight) -
        32
      }px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [postRef, commentContainerRef, headerRef, footerRef, scrollerRef]);

  return (
    <div className="grid grid-cols-3 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex-row gap-6">
      <div
        ref={postRef}
        className="col-span-2 pe-6 h-fit border-e border-e-gray-300"
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
              alt="User avatar"
              className="w-10 h-10 rounded-full object-cover"
              onLoad={adjustHeight}
            />
            <div className="flex-1">
              <p className="text-base font-semibold text-gray-900">
                Lourics Chan
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>2h ago</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Button size="icon" variant="outline">
              <Trash className="size-4" />
            </Button>
            <Button size="icon">
              <Pencil className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed  text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi
            magnam libero culpa assumenda soluta, maiores obcaecati tempora quo
            minima? Placeat nam numquam neque deleniti asperiores porro quae,
            modi ex voluptates quibusdam, obcaecati, quis quod saepe itaque
            corrupti distinctio amet illum.
          </p>

          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop"
            alt="Post content"
            className="w-full  object-cover rounded-xl mt-4"
          />
        </div>

        <hr className="mt-5 mb-3 border-gray-200" />

        <div className="grid grid-cols-2  gap-3">
          <div className="flex flex-row items-center gap-2.5 justify-center border-e border-e-gray-300">
            <Heart className="size-4" /> <span>100</span>
          </div>

          <div className="flex flex-row items-center gap-2.5 justify-center">
            <Share2 className="size-4" /> <span>100</span>
          </div>
        </div>
      </div>
      <div
        ref={commentContainerRef}
        className="flex flex-col w-full h-full gap-4"
      >
        <div ref={headerRef}>
          <p className="font-semibold mb-3 text-xl">Comments (75)</p>
          <hr />
        </div>
        <ScrollArea ref={scrollerRef} className=" w-full ">
          <MyNovelDetailsPostCommentContainer />
        </ScrollArea>
        <div ref={footerRef}>
          <hr className="mb-3 border-gray-200" />
          <div className="flex flex-row gap-3">
            <Input className="flex-1" placeholder="Write a comment..." />
            <Button size="icon">
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default PostCard;
