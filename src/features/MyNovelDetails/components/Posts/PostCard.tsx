import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dot,
  Heart,
  MessageCircle,
  Pencil,
  Send,
  Share2,
  Trash,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import MyNovelDetailsPostCommentContainer from "../Container/MyNovelDetailsPostCommentContainer";
import Image from "next/image";
import { useDeletePost } from "@/services/post";
import { toast } from "sonner";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PostUpdate from "./PostUpdate.";

const PostCard = ({
  data,
  handleEdit,
}: {
  data: any;
  handleEdit: () => void;
}) => {
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

  const { mutate } = useDeletePost({ novelId: data.relative_id });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      toast.loading("Deleting post...");
      mutate(data.id);
    }
  };

  return (
    <div className="grid grid-cols-3 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex-row gap-6">
      <div
        ref={postRef}
        className="col-span-2 flex flex-col justify-between min-h-[500px] pe-6 h-fit border-e border-e-gray-300"
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src={
                data.user.profile_image ||
                `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
                  data?.user?.full_name
                )}`
              }
              alt="User avatar"
              width={64}
              height={64}
              className="w-10 h-10 rounded-full object-cover"
              onLoad={adjustHeight}
            />
            <div className="flex-1">
              <p className="text-base font-semibold text-gray-900">
                {data.user.full_name}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>{data.created_at}</span>
                {data.is_edited && (
                  <>
                    <Dot className="size-4" />
                    <span className="text-xs text-gray-500">Edited</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Button onClick={handleDelete} size="icon" variant="outline">
              <Trash className="size-4" />
            </Button>
           
              <Button onClick={handleEdit} size="icon">
                <Pencil className="size-4" />
              </Button>
            
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed  text-justify">
            {data.content}
          </p>

          {data.image && (
            <Image
              src={data.image}
              alt="Post content"
              className="w-full  object-cover rounded-xl mt-4"
              width={500}
              height={300}
            />
          )}
        </div>

        <div className="mt-auto">
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
