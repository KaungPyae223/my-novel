"use client";
import { MessageCircle, Plus } from "lucide-react";
import React, { useState } from "react";
import PostCard from "../Posts/PostCard";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import EmptyState from "@/features/Components/EmptyState/EmptyState";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PostCreate from "../Posts/PostCreate";
import PostUpdate from "../Posts/PostUpdate.";

const MyNovelDetailsPostContainer = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useFetchData(`/novels/posts/${id}`);

  const [editingPost, setEditingPost] = useState<any>(null);
  const [creatingPost, setCreatingPost] = useState<boolean>(false);

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  return (
    <Dialog>
      <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <MessageCircle className="size-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Posts</h2>
          </div>

          <div
            onClick={() => setCreatingPost(true)}
            className="flex bg-gray-800 text-sm text-white px-4 py-2 cursor-pointer rounded-md flex-row items-center gap-2"
          >
            <Plus className="size-4" />
            Create Post
          </div>
        </div>

        <div className="mt-9 space-y-6">
          {data?.data.length === 0 ? (
            <EmptyState title="No Posts" />
          ) : (
            data?.data.map((post: any) => (
              <PostCard key={post.id} data={post} handleEdit={() => setEditingPost(post)} />
            ))
          )}
        </div>
      </div>
      {creatingPost && (
        <Dialog
          open={creatingPost}
          onOpenChange={(open) => !open && setCreatingPost(false)}
        >
          <PostCreate novelId={id} />
        </Dialog>
      )}
      {editingPost && (
        <Dialog
          open={!!editingPost}
          onOpenChange={(open) => !open && setEditingPost(null)}
        >
          <PostUpdate data={editingPost} />
        </Dialog>
      )}
    </Dialog>
  );
};

export default MyNovelDetailsPostContainer;
