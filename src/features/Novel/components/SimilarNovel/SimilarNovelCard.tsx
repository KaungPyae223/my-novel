import { BookOpen, Eye } from "lucide-react";
import React from "react";

const SimilarNovelCard = () => {
  return (
    <div className="p-4 shadow bg-white rounded-lg border border-gray-200">
      <img
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=400&fit=crop"
        alt=""
        className="w-full h-52 object-cover rounded-lg"
      />
      <div>
        <p className="text-lg font-semibold mt-3">Neural Networks</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-7 h-7 object-cover rounded-full"
          />
          <p>Elena Rodriguez</p>
        </div>
      </div>
      <p className="text-justify text-sm mt-4 text-gray-600 line-clamp-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, at
        expedita. Voluptas sequi, molestias assumenda deleniti delectus
        voluptatem? Reiciendis, aperiam.
      </p>
      <div className="mt-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-1 text-amber-700 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          <p>300</p>
        </div>
        <div className="text-xs font-semibold text-gray-700 bg-amber-100 px-2 py-0.5 border border-amber-300 rounded-full">
          OnGoing
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3 justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <BookOpen className="size-4" />
          <p>25 Chapters</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Eye className="size-4" />

          <p>2500</p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-3.5">
        <GenreCard genre="Fantasy" />
        <GenreCard genre="Sci-Fi" />
        <GenreCard genre="Mystery" />
      </div>
      <div className="w-full bg-blue-700 text-white py-2  rounded-md text-sm font-medium text-center cursor-pointer">
        Read Novel
      </div>
    </div>
  );
};

const GenreCard = ({ genre }: { genre: string }) => {
  return (
    <div className="text-xs font-medium text-gray-700 px-2 py-0.5 border border-gray-300 rounded-full">
      {genre}
    </div>
  );
};

export default SimilarNovelCard;
