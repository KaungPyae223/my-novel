import { BookOpen, Clock, Eye } from "lucide-react";
import React from "react";
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

const AuthorDetailsNovelCard = () => {
  return (
    <Dialog>
      <div className="w-full bg-white shadow border border-gray-200 rounded-md overflow-hidden">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1000&h=1000&fit=crop"
            alt=""
            className="h-64 w-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <p className="bg-gray-800 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Sci-Fi
            </p>
          </div>
          <div className="absolute top-3 right-3">
            <p className="bg-white text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
              Ongoing
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="font-semibold text-xl">The Arrow and the Green</p>
          <p className="text-sm font-mono mt-1 text-gray-500">
            @arrow_and_green
          </p>

          <p className="text-sm text-justify text-gray-700 mt-3 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            excepturi dicta, aliquid facilis id iure natus voluptate unde eos
            qui eius porro! Blanditiis inventore veniam, temporibus a vitae
            dolorem aperiam ipsam laudantium dolores consequatur non. Omnis amet
            eius debitis facilis quae, veritatis placeat dolor, illum quidem
            velit consequuntur at minus.
          </p>

          <div className="grid grid-cols-2 text-gray-600 text-xs gap-2 my-6">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 text-red-700"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              12.5k
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="size-3.5" />
              12.5k
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <BookOpen className="size-3.5" />
              23 Chapters
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              23 June 2025
            </div>
          </div>
          <div className="flex items-center mt-4 gap-1.5">
            <p className="text-xs border border-gray-300 px-2 py-0.5 rounded-full font-medium">
              Sci-Fi
            </p>
            <p className="text-xs border border-gray-300 px-2 py-0.5 rounded-full font-medium">
              Comedy
            </p>
            <p className="text-xs border border-gray-300 px-2 py-0.5 rounded-full font-medium">
              English
            </p>
            <p className="text-xs border border-gray-300 px-2 py-0.5 rounded-full font-medium">
              Dark
            </p>
          </div>
          <hr className="mt-4 border-gray-200" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <DialogTrigger>
              <p className="border w-full cursor-pointer border-gray-400 text-gray-900 px-3 py-1.5 rounded-md text-sm ">
                Synopsis
              </p>
            </DialogTrigger>

            <button className="bg-gray-800 cursor-pointer text-white px-3 py-1.5 rounded-md text-sm font-medium">
              Read Now
            </button>
          </div>
        </div>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-2xl font-semibold">
                Synopsis of The Digital Nomad
              </p>
            </DialogTitle>
            <DialogDescription className="text-gray-700 my-3 text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, earum! Minus, animi. Repudiandae non earum saepe rem
              ipsa modi magnam libero culpa assumenda soluta, maiores obcaecati
              tempora quo minima? Placeat nam numquam neque deleniti asperiores
              porro quae, modi ex voluptates quibusdam, obcaecati, quis quod
              saepe itaque corrupti distinctio amet illum.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose>
              <p className="border w-full cursor-pointer border-gray-400 text-gray-900 px-3 py-1.5 rounded-md text-sm ">
                Close
              </p>
            </DialogClose>

            <button className="bg-gray-800 cursor-pointer text-white px-3 py-1.5 rounded-md text-sm font-medium">
              Read Now
            </button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default AuthorDetailsNovelCard;
