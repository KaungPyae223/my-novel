"use client";
import { Trash, RotateCcw, Eye } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { useDeleteChapter, useRestoreChapter } from "@/services/chapter";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { confirmToast } from "@/utils/customToasts";

const ChapterTrashedCard = ({
  novelId,
  data,
}: {
  novelId: string;
  data: any;
}) => {
  const router = useRouter();

  const { mutate: deleteChapter } = useDeleteChapter({ id: novelId });
  const { mutate: restoreChapter } = useRestoreChapter({ id: novelId });

 
  const handleView = () => {
    router.push(`/novel/${novelId}/chapter/${data.id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    confirmToast({
      title: "Delete Chapter Permanently",
      description:
        "Are you sure to delete this chapter ' " +
        data.title +
        " '  permanently ?",
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmColor: "bg-red-600 hover:bg-red-700",
      onConfirm: () => {
        deleteChapter(data.id);
      },
    });
  };

  const handleRestore = (e: React.MouseEvent) => {
    e.stopPropagation();

    confirmToast({
      title: "Restore Chapter",
      description:
        "Are you sure you want to restore this chapter ' " +
        data.title +
        " ' ?",
      confirmText: "Restore",
      cancelText: "Cancel",
      confirmColor: "bg-green-600 hover:bg-green-700",
      onConfirm: () => {
        restoreChapter(data.id);
      },
    });
  };

  return (
    <div
      onClick={handleView}
      className="p-4 group bg-gray-50 hover:bg-gray-100 cursor-pointer duration-300 rounded-lg flex flex-row items-center gap-6"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium text-lg group-hover:text-blue-600">
            {data.title}
          </p>
        </div>

        <div className="flex flex-row items-center gap-1.5 text-sm mt-1 text-gray-500">
          <Trash className="size-3.5" />
          {data.deleted_at}
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-green-50/50 hover:bg-green-100/70 text-green-600 hover:text-green-700"
          onClick={(e) => {
            e.stopPropagation();
            handleRestore(e);
          }}
          title="Restore chapter"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-red-50/50 hover:bg-red-100/70 text-red-600 hover:text-red-700"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(e);
          }}
          title="Permanently delete"
        >
          <Trash className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-blue-50/50 hover:bg-blue-100/70 text-blue-600 hover:text-blue-700"
          onClick={(e) => {
            e.stopPropagation();
            handleView();
          }}
          title="View chapter"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChapterTrashedCard;
