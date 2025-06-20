import { Progress } from "@/components/ui/progress";
import { BookOpen, Eye, Heart, MessageCircle, X } from "lucide-react";
import React from "react";

const FavoritesCard = () => {
  return (
    <div className="w-full border bg-white border-gray-200 rounded-md shadow overflow-hidden">
      <div className="relative">
        <img
          src={
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop"
          }
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full text-white bg-gray-900/50 cursor-pointer">
          <X className="size-3.5" />
        </div>
        <div className="absolute bottom-2 left-2 px-2 py-0.5 font-semibold flex items-center justify-center rounded-full text-xs text-black bg-white">
          Ongoing
        </div>
      </div>
      <div className="p-4">
        <p className="font-medium text-xl">The Willing</p>
        <p className="text-sm text-gray-600 mt-0.5">By Sara Myth</p>
        <p className="text-sm text-gray-700 my-3 line-clamp-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          illo praesentium, quis voluptas id maxime sed cumque vel, omnis libero
          corporis cupiditate modi. Amet reprehenderit labore et totam
          inventore? Deleniti, amet mollitia nobis aliquid fugiat cum neque
          eaque laboriosam doloribus repudiandae! Itaque voluptas culpa, eius
          sit praesentium sapiente modi aut eveniet, ipsum quasi, ratione
          doloremque magni non voluptatem. Tempora voluptatem soluta saepe
          officia dolorum deserunt, deleniti, pariatur porro ab dignissimos
          minus eos repudiandae vel quo dolores quae reprehenderit sunt
          inventore! Quam et ex veritatis ducimus quasi, sapiente explicabo
          officia rerum quisquam cumque ab distinctio aperiam necessitatibus
          nisi id velit laudantium.
        </p>
        <div className="grid grid-cols-3 text-gray-600 text-xs gap-2 my-3">
            <div className="flex flex-row items-center gap-1.5">
                <Heart className="size-3" />
                <p>235</p>
            </div>
            <div className="flex mx-auto flex-row items-center gap-1.5">
                <Eye className="size-3" />
                <p>235</p>
            </div>
            <div className="flex ms-auto flex-row items-center gap-1.5">
                <MessageCircle className="size-3" />
                <p>235</p>
            </div>
        </div>
        <div className="text-blue-600 mt-4 text-sm font-medium flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1.5">
                <BookOpen className="size-4" />
                <p className="text-gray-700 font-normal">23/40 Chapters</p>
            </div>
            <div>
                40%
            </div>
        </div>
        <div>
            <Progress value={40} className="mt-2 *:bg-blue-600" />
        </div>
        <div className="mt-6 w-full text-center py-1.5 rounded-md text-sm border border-blue-400 text-blue-600 font-medium cursor-pointer">
            Read Novel
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
