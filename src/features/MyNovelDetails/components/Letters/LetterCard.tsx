import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBanUser, useUnbanUser } from "@/services/ban";
import { useDeleteAuthorFanLetter, useReplyFanLetter } from "@/services/novel";
import { avatarFallback } from "@/utils/avatarFallBack";
import { confirmToast } from "@/utils/customToasts";
import { formatDate } from "@/utils/formatDate";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  Ban,
  Calendar,
  MessageCircle,
  Send,
  Trash,
  UserCheck,
} from "lucide-react";
import React from "react";

const LetterCard = ({
  letter,
  setData,
}: {
  letter: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const replyRef = React.useRef<HTMLTextAreaElement>(null);

  const { mutate: replyLetter } = useReplyFanLetter({
    novelID: letter.novel_id,
  });

  const { mutate: deleteLetter } = useDeleteAuthorFanLetter({
    novelID: letter.novel_id,
  });

  const { mutate: banUser } = useBanUser({
    novelID: letter.novel_id,
  });

  const { mutate: unbanUser } = useUnbanUser({
    novelID: letter.novel_id,
  });

  const handleReply = () => {
    if (replyRef.current && replyRef.current.value.trim() !== "") {
      confirmToast({
        title: "Reply to fan letter",
        description: "Are you sure you want to reply to this fan letter?",
        confirmText: "Reply",
        confirmColor: "bg-green-600 hover:bg-green-700",
        onConfirm: () => {
          replyLetter({
            id: letter.id,
            reply: replyRef.current?.value,
          });
        },
      });
    }
  };

  const handleDelete = () => {
    confirmToast({
      title: "Delete fan letter",
      description: "Are you sure you want to delete this fan letter?",
      confirmText: "Delete",
      confirmColor: "bg-red-600 hover:bg-red-700",
      onConfirm: () => {
        deleteLetter(letter.id);
        setData((prev: any) =>
          prev.filter((item: any) => item.id !== letter.id)
        );
      },
    });
  };

  const handleBanUser = () => {
    confirmToast({
      title: "Ban user",
      description: "Are you sure you want to ban this user?",
      confirmText: "Ban",
      confirmColor: "bg-red-600 hover:bg-red-700",
      onConfirm: () => {
        banUser({
          novelID: letter.novel_id,
          user_id: letter.user_id,
        });
      },
    });
  };

  const handleUnbanUser = () => {
    confirmToast({
      title: "Unban user",
      description: "Are you sure you want to unban this user?",
      confirmText: "Unban",
      confirmColor: "bg-green-600 hover:bg-green-700",
      onConfirm: () => {
        unbanUser({
          novelID: letter.novel_id,
          user_id: letter.user_id,
        });
      },
    });
  };

  return (
    <div className="p-4 border border-gray-300 bg-blue-50/50 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage
              className="w-12 h-12 object-cover rounded-full"
              src={letter.user_image}
              alt={letter.user_name}
            />
            <AvatarFallback className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
              {avatarFallback(letter.user_name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium font-poppins">{letter.user_name}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="size-3.5" />
              <p>{formatDate(letter.created_at)}</p>
            </div>
          </div>
        </div>
        <div className="text-sm text-white bg-gray-800 px-3 py-0.5 rounded-full">
          New
        </div>
      </div>
      <p className="text-gray-800 my-6 text-sm bg-blue-100/50 p-4 rounded-md border border-blue-200">
        {letter.body}
      </p>

      {letter.reply ? (
        <div className="bg-gray-100 border-l-4 border-gray-400 rounded p-3">
          <p className="text-sm font-semibold text-gray-700 mb-1 flex gap-1 items-center">
            <MessageCircle className="size-4 text-gray-600" />
            Author&apos;s Reply:
          </p>
          <p className="text-sm mt-2 text-gray-700">{letter.reply}</p>
        </div>
      ) : (
        <div>
          <Label className="text-sm font-medium text-gray-600 mb-1">
            Reply to this fan letter
          </Label>
          <Textarea ref={replyRef} placeholder="Write your reply..." />
        </div>
      )}

      <hr className="my-3 border-gray-200" />
      <div className="flex items-center gap-3">
        {letter.ban ? (
          <Button
            onClick={handleUnbanUser}
            variant="outline"
            className="flex items-center gap-3"
          >
            <UserCheck className="size-3.5" /> Unban User
          </Button>
        ) : (
          <Button
            onClick={handleBanUser}
            variant="outline"
            className="flex items-center gap-3"
          >
            <Ban className="size-3.5" /> Ban User
          </Button>
        )}
        
        <Button
          onClick={handleDelete}
          variant="destructive"
          className="flex items-center gap-3"
        >
          <Trash className="size-3.5" /> Delete
        </Button>
        <Button variant="outline" className="flex items-center ms-auto gap-3">
          <MessageCircle className="size-3.5" /> Message
        </Button>
        {!letter.reply && (
          <Button onClick={handleReply} className="flex items-center gap-3">
            <Send className="size-3.5" /> Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export default LetterCard;
