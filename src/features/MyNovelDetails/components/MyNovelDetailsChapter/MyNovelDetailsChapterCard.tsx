"use client";
import { Clock, Dot, Edit, EllipsisVertical, Eye, Trash } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import { useDeleteChapter } from "@/services/chapter";
import { toast } from "sonner";
import { confirmToast } from "@/utils/customToasts";

const MyNovelDetailsChapterCard = ({
  novelId,
  data,
  deleteChapter,
}: {
  novelId: string;
  data: any;
  deleteChapter: (id: string) => void;
}) => {
  const router = useRouter();

  const { mutate } = useDeleteChapter({ id: novelId });

  const handleView = () => {
    router.push(`/novel/${novelId}/chapter/${data.id}`);
  };

  const handleEdit = (e: any) => {
    e.stopPropagation();
    router.push(`/my-novels/details/${novelId}/edit-chapter/${data.id}`);
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    confirmToast({
      title: "Delete Chapter",
      description:
        "Are you sure to delete this chapter ' " + data.title + " ' ?",
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmColor: "bg-red-600 hover:bg-red-700",
      onConfirm: () => {
        toast.loading("Deleting chapter...");
        mutate(data.id);
        deleteChapter(data.id);
      },
    });
  };

  return (
    <div
      onClick={handleView}
      className="p-4 group bg-gray-50 hover:bg-gray-100 cursor-pointer duration-300 rounded-lg flex flex-row items-center gap-6"
    >
      <div className="bg-blue-100 text-blue-800 w-12 h-12 font-medium flex items-center justify-center rounded-full">
        {data.chapter_index}
      </div>
      <div>
        <p className="font-medium text-lg group-hover:text-blue-600">
          {data.title}
        </p>
        <div className="flex flex-row items-center text-sm mt-1 text-gray-500 gap-2">
          <div className="flex flex-row items-center gap-1.5">
            <Clock className="size-3.5" />
            {formatDate(data.updated_at)}
          </div>
          <Dot className="size-5" />
          <div className="flex flex-row items-center gap-1.5   ">
            <Eye className="size-3.5" />
            {data.view_count}
          </div>
          <Dot className="size-5" />
          <div
            className={`flex flex-row items-center gap-1.5 px-2 font-medium text-xs py-0.5 rounded-full ${
              data.status === "published"
                ? "text-green-800 bg-green-300 "
                : "text-red-400 bg-gray-300"
            }`}
          >
            {data.status}
          </div>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="ms-auto cursor-pointer  p-3">
            <EllipsisVertical className="size-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={(e) => {
                handleEdit(e);
              }}
              className="p-2 flex flex-row items-center gap-2"
            >
              <Edit className="size-4" /> Edit Chapter
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleDelete}
              className="p-2 text-red-800 flex flex-row items-center gap-2"
            >
              <Trash className="size-4 text-red-800" /> Delete Chapter
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MyNovelDetailsChapterCard;
