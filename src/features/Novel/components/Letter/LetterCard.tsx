import { formatDate } from "@/utils/formatDate";
import { Calendar, Eye, MessageCircle, Send, Trash2 } from "lucide-react";
import React from "react";
import { useDeleteReaderFanLetter } from "@/services/novel";
import { confirmToast } from "@/utils/customToasts";
import { Button } from "@/components/ui/button";

const LetterCard = ({
  letter,
  setData,
}: {
  letter: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const { mutate } = useDeleteReaderFanLetter({ novelID: letter.novel_id });

  const handleDelete = () => {
    confirmToast({
      title: "Are you sure?",
      description: "Are you sure you want to delete this letter?",
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmColor: "bg-red-600 hover:bg-red-700",
      onConfirm: () => {
        setData((prev: any) =>
          prev.filter((item: any) => item.id !== letter.id)
        );
        mutate(letter.id);
      },
    });
  };

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      {/* Top section */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-800 bg-gray-100 p-2  rounded-full">
            <Send className="size-4" />
          </span>
          {letter.status === "read" && (
            <span className="text-sm font-bold text-gray-800 bg-gray-100 p-2 rounded-full">
              <Eye className="size-4" />
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            variant="destructive"
            size="icon"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-800 mt-3 mb-4">{letter.body}</p>

      {/* Author reply */}
      {letter.reply && (
        <div className="bg-gray-100 border-l-4 border-gray-400 rounded p-3">
          <p className="text-sm font-semibold text-gray-700 mb-1 flex gap-1 items-center">
            <MessageCircle className="size-4 text-gray-600" />
            Author&apos;s Reply:
          </p>
          <p className="text-sm mt-2 text-gray-700">{letter.reply}</p>
        </div>
      )}
      <span className="text-sm text-gray-500 flex items-center gap-1">
        <Calendar className="size-3.5" /> {formatDate(letter.created_at)}
      </span>
    </div>
  );
};

export default LetterCard;
