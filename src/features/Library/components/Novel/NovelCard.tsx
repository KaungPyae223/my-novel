import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDate } from "@/utils/formatDate";
import { BookOpen, Clock, Eye, Heart } from "lucide-react";

interface NovelCardProps {
  novel: {
    id: string;
    title: string;
    author: string;
    description: string;
    genre: string;
    synopsis: string;
    image: string;
    chapters_count: number;
    views_count: number;
    loved_count: number;
    tags: string;
    progress: number;
    created_at: string;
  };
  handleSynopsis: () => void;
}

const NovelCard = ({ novel, handleSynopsis }: NovelCardProps) => {
  return (
    <div className="w-full flex overflow-hidden bg-white rounded-md shadow border border-gray-200">
      <div className="basis-2/5 h-full">
        <img src={novel.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex-1 h-full flex flex-col">
        <p className="font-medium text-lg">{novel.title}</p>

        <p className="text-sm text-blue-600 font-medium mt-1">
          By {novel.author}
        </p>
        <div className="flex flex-row mt-3 items-center gap-2">
          <p className="bg-blue-200 px-3 py-0.5 font-semibold rounded-full text-gray-800 text-xs">
            {novel.genre}
          </p>
          <p className="bg-gray-200 px-3 py-0.5 font-semibold rounded-full text-gray-800 text-xs">
            {novel.progress}
          </p>
        </div>
        <div className="mt-auto">
          <p className="text-sm text-justify text-gray-700 mt-3 line-clamp-4">
            {novel.description}
          </p>
          <div className="grid grid-cols-2 text-gray-600 text-xs gap-2 my-6">
            <div className="flex items-center gap-1.5">
              <Heart className="size-3.5" fill="red" />
              {novel.loved_count}
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="size-3.5" />
              {novel.views_count}
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <BookOpen className="size-3.5" />
              {novel.chapters_count} Chapters
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {formatDate(novel.created_at)}
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-4 gap-1.5">
            {novel.tags.split(",").map((tag: string, index: number) => (
              <p
                key={index}
                className="text-xs border border-gray-300 px-2 py-0.5 rounded-full font-medium"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div onClick={handleSynopsis} className="border w-full text-center cursor-pointer border-gray-400 text-gray-900 px-3 py-1.5 rounded-md text-sm ">
              Synopsis
            </div>

            <button className="bg-gray-800 cursor-pointer text-white px-3 py-1.5 rounded-md text-sm font-medium">
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelCard;
