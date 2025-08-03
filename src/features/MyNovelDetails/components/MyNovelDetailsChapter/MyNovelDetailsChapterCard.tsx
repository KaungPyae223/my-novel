import {
  ChevronRight,
  Clock,
  Dot,
  Edit,
  EllipsisVertical,
  Eye,
  Trash,
} from "lucide-react";
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

const MyNovelDetailsChapterCard = ({
  chapterNumber,
  data,
}: {
  chapterNumber: number;
  data: any;
}) => {
  const router = useRouter();

  const handleView = () => {
    router.push(`/novel/1/chapter/2`);
  };

  return (
    <div
      onClick={handleView}
      className="p-4 group bg-gray-50 hover:bg-gray-100 cursor-pointer duration-300 rounded-lg flex flex-row items-center gap-6"
    >
      <div className="bg-blue-100 text-blue-800 w-12 h-12 font-medium flex items-center justify-center rounded-full">
        {chapterNumber}
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
          <div className={`flex flex-row items-center gap-1.5 px-2 font-medium text-xs py-0.5 rounded-full ${data.status === "published" ? "text-green-800 bg-green-300 " : "text-red-400 bg-gray-300"}`}>{data.status}</div>
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
            <DropdownMenuItem className="p-2 flex flex-row items-center gap-2">
              <Edit className="size-4" /> Edit Chapter
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2 text-red-800 flex flex-row items-center gap-2">
              <Trash className="size-4 text-red-800" /> Delete Chapter
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MyNovelDetailsChapterCard;
