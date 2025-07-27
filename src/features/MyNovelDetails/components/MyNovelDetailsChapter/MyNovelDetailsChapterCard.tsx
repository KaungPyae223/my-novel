import { ChevronRight, Clock, Edit, EllipsisVertical, Trash } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const MyNovelDetailsChapterCard = ({
  chapterNumber,
}: {
  chapterNumber: number;
}) => {

  const router = useRouter();

  const handleView = () => {
    router.push(`/novel/1/chapter/2`);
  };


  return (
    <div onClick={handleView} className="p-4 group bg-gray-50 hover:bg-gray-100 cursor-pointer duration-300 rounded-lg flex flex-row items-center gap-6">
      <div className="bg-blue-100 text-blue-800 w-12 h-12 font-medium flex items-center justify-center rounded-full">
        {chapterNumber}
      </div>
      <div>
        <p className="font-medium text-lg group-hover:text-blue-600">
          The Discovery
        </p>
        <div className="flex flex-row items-center text-sm mt-1 text-gray-500 gap-1">
          <Clock className="size-3.5" />
          23 June 2024
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="ms-auto cursor-pointer px-3">
            <EllipsisVertical className="size-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem className="p-2 flex flex-row items-center gap-2"><Edit className="size-4" /> Edit Chapter</DropdownMenuItem>
            <DropdownMenuItem className="p-2 text-red-800 flex flex-row items-center gap-2"><Trash className="size-4 text-red-800" /> Delete Chapter</DropdownMenuItem>
            
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MyNovelDetailsChapterCard;
