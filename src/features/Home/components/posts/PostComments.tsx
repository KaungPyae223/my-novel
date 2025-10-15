import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { formatDistanceToNow } from "date-fns";

interface Comment {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  replies?: Comment[];
}

const PostComments = ({ postID }: { postID: string }) => {
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  // Mock data - replace with actual API calls
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      user: {
        id: "user1",
        name: "John Doe",
        avatar: "",
      },
      content: "This is a great post!",
      createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      replies: [
        {
          id: "1-1",
          user: {
            id: "user2",
            name: "Jane Smith",
            avatar: "",
          },
          content: "I agree!",
          createdAt: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
        },
      ],
    },
  ]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: {
        id: "current-user", // Replace with actual user ID
        name: "Current User",
        avatar: "",
      },
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleAddReply = (e: React.FormEvent, parentId: string) => {
    e.preventDefault();
    if (!replyContent.trim() || !replyingTo) return;

    const newReply: Comment = {
      id: `${parentId}-${Date.now()}`,
      user: {
        id: "current-user", // Replace with actual user ID
        name: "Current User",
        avatar: "",
      },
      content: replyContent,
      createdAt: new Date().toISOString(),
    };

    const addReplyToComment = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: addReplyToComment(comment.replies),
          };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments));
    setReplyingTo(null);
    setReplyContent("");
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${isReply ? "ml-8 mt-3" : "mb-4"}`}>
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
          <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="bg-gray-100 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">{comment.user.name}</span>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <p className="text-sm mt-1">{comment.content}</p>
          </div>
          <button
            onClick={() =>
              setReplyingTo(replyingTo === comment.id ? null : comment.id)
            }
            className="text-xs text-gray-500 hover:text-gray-700 mt-1 ml-2"
          >
            Reply
          </button>

          {replyingTo === comment.id && (
            <form
              onSubmit={(e) => handleAddReply(e, comment.id)}
              className="mt-2"
            >
              <div className="flex gap-2">
                <Input
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Write a reply..."
                  className="flex-1 text-sm"
                />
                <Button type="submit" size="sm">
                  Reply
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      {comment.replies?.map((reply) => renderComment(reply, true))}
    </div>
  );

  return (
    <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col">
      <DialogHeader>
        <DialogTitle>Comments</DialogTitle>
      </DialogHeader>

      <div className="flex-1 overflow-y-auto pr-2 -mr-2">
        {comments.length > 0 ? (
          <div className="space-y-4">{comments.map(renderComment)}</div>
        ) : (
          <p className="text-center text-gray-500 py-4">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      <form onSubmit={handleAddComment} className="mt-4 border-t pt-4">
        <div className="flex gap-2">
          <Avatar className="h-10 w-10">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="min-h-[40px] resize-none"
              rows={1}
            />
            <div className="flex justify-end">
              <Button type="submit" size="sm" disabled={!newComment.trim()}>
                Comment
              </Button>
            </div>
          </div>
        </div>
      </form>
    </DialogContent>
  );
};

export default PostComments;
