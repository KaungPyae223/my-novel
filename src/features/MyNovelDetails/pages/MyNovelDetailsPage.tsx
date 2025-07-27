"use client";

import Middleware from "@/features/Components/Middleware/Middleware";
import {
  ArrowLeft,
  BookOpen,
  ChartLine,
  Edit,
  Eye,
  MessageCircle,
  Star,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import MyNovelDetailsHeader from "../components/MyNovelDetails/MyNovelDetailsHeader";
import MyNovelDetailsKPI from "../components/MyNovelDetails/MyNovelDetailsKPI";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";
import { useDeleteNovel } from "@/services/novel";
import { toast } from "sonner";
import MyNovelDetailsChapterContainer from "../components/Container/MyNovelDetailsChapterContainer";

const MyNovelDetailsPage = ({ id }: { id: string }) => {
  const router = useRouter();

  const [activeTab,setActiveTab] = useState<string>("Chapters");

  const handleBack = () => {
    router.push("/my-novels");
  };

  const handleEdit = () => {
    router.push(`/my-novels/edit/${id}`);
  };

  const { mutate } = useDeleteNovel();

  const handleTrash = () => {
    toast.loading("Deleting...");
    mutate(id);
    router.push("/my-novels");
  };

  const handleView = () => {
    router.push(`/novel/${id}`);
  };

  const [deleteNovel, setDeleteNovel] = React.useState<string>("");

  const { data, error, isLoading } = useFetchData(`/novels/${id}`);

  if (isLoading) return <Loading />;

  if (error) {
    throw error;
  }

  const tabs = [
    {
      label: "Chapters",
      value: "Chapters",
      icon: <BookOpen className="size-3.5" />,
    },
    {
      label: "Analysis",
      value: "Analysis",
      icon: <ChartLine className="size-3.5" />,
    },
    {
      label: "Posts",
      value: "Posts",
      icon: <MessageCircle className="size-3.5" />,
    },
    {
      label: "Reviews",
      value: "Reviews",
      icon: <Star className="size-3.5" />,
    },
  ];

 
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Middleware>
      <Dialog>
        <div className="py-9 px-6 mx-auto max-w-6xl">
          <div className="flex flex-row justify-between items-center py-3">
            <div
              onClick={handleBack}
              className="flex flex-row cursor-pointer items-center gap-3  font-medium rounded-md text-sm text-gray-800 w-fit"
            >
              <ArrowLeft className="size-4" /> Back to My Novels
            </div>
            <div className="grid grid-cols-3 gap-3">
              <DialogTrigger asChild>
                <Button variant="destructive" className="justify-between">
                  <Trash className="size-4" /> Trash Novel
                </Button>
              </DialogTrigger>

              <Button
                variant="outline"
                onClick={handleEdit}
                className="justify-between"
              >
                <Edit className="size-4" /> Edit Novel
              </Button>
              <Button
                onClick={handleView}
                className="bg-gray-800 justify-between text-white"
              >
                <Eye className="size-4" />
                View Novel
              </Button>
            </div>
          </div>
          <MyNovelDetailsHeader novel={data?.data} />
          <MyNovelDetailsKPI novel={data?.data} />
          <div className="grid grid-cols-4 my-7 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
            {tabs.map((tab) => (
              <div
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`rounded-md flex flex-row items-center justify-center gap-2 w-full py-1.5 ${
                  activeTab === tab.value
                    ? "bg-white font-medium shadow"
                    : "text-gray-600 cursor-pointer"
                }`}
              >
                {tab.icon}
                {tab.label}
              </div>
            ))}
          </div>
          {activeTab === "Chapters" && <MyNovelDetailsChapterContainer />}
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Novel</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 my-3">
            <div className="grid gap-3">
              <Label htmlFor="name-1">
                Please type
                <span className="font-bold text-red-800">DELETE</span> to
                confirm
              </Label>
              <Input
                id="name-1"
                value={deleteNovel}
                onChange={(e) => setDeleteNovel(e.target.value)}
                name="name"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={handleTrash}
              disabled={deleteNovel !== "DELETE"}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Middleware>
  );
};

export default MyNovelDetailsPage;
