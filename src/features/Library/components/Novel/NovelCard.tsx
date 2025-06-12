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
import { BookOpen, Clock, Eye } from "lucide-react";

const NovelCard = () => {
  return (
    <Dialog>
      <div className="w-full flex gap-3 overflow-hidden bg-white rounded-md shadow border border-gray-200">
        <div className="basis-2/5 h-full">
          <img
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex-1">
          <p className="font-semibold">The Digital Nomad</p>

          <p className="text-sm text-blue-600 font-medium mt-1">
            By Kaung Pyae
          </p>
          <div className="flex flex-row mt-3 items-center gap-2">
            <p className="bg-blue-200 px-3 py-0.5 font-semibold rounded-full text-gray-800 text-xs">
              Sci-Fi
            </p>
            <p className="bg-gray-200 px-3 py-0.5 font-semibold rounded-full text-gray-800 text-xs">
              Ongoing
            </p>
          </div>
          <p className="text-sm text-justify text-gray-700 mt-3 line-clamp-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi
            magnam libero culpa assumenda soluta, maiores obcaecati tempora quo
            minima? Placeat nam numquam neque deleniti asperiores porro quae,
            modi ex voluptates quibusdam, obcaecati, quis quod saepe itaque
            corrupti distinctio amet illum.
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

export default NovelCard;
