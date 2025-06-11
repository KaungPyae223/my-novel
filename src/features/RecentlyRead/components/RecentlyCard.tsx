import { Progress } from "@/components/ui/progress";
import React from "react";

const RecentlyCard = () => {
  return (
    <div className="w-full bg-white overflow-hidden rounded-lg border border-gray-200 shadow grid grid-cols-3 gap-3 ">
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=400&fit=crop')",
        }} 
        className="h-full bg-cover bg-center"
      ></div>

      <div className="col-span-2 p-6">
        <p className="font-semibold text-2xl">The Willing</p>
        <p className="text-xs font-mono text-gray-600">@willingm130</p>
        <p className="text-blue-600 font-medium mt-2">By Kaung Pyae</p>
        <div className="flex flex-row items-center gap-3 mt-3">
          <div className="border  border-gray-300 px-3 py-0.5 rounded-full text-xs font-semibold">
            Sci-Fi
          </div>
          <div className="flex flex-row items-center text-xs text-gray-600 gap-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            3 hours ago
          </div>
        </div>
        <p className="text-sm text-justify text-gray-600 mt-4 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sed
          numquam ut officiis iusto quaerat ex consectetur eaque ipsam mollitia
          fugit corporis repudiandae provident voluptas enim magnam laborum eius
          quidem! Unde velit recusandae aspernatur explicabo non accusantium
          labore porro, nihil inventore alias esse facere voluptas molestias
          quae nulla sapiente totam doloribus! Possimus doloribus quae ipsa
          deserunt est voluptates recusandae laboriosam, temporibus culpa a odit
          quo optio quasi iste doloremque porro veniam placeat, dolorum
          quisquam, obcaecati repellat aliquid? Tempore placeat dignissimos non,
          cumque excepturi ipsa cupiditate beatae ratione dolorem, modi rem
          culpa officia dolorum quibusdam fugiat officiis. Harum vel neque
          delectus.
        </p>
        <div className="mt-5 flex flex-row items-center justify-between">
          <p className="text-sm font-medium">Chapter 30 of 100</p>
          <p className="text-sm font-medium text-blue-600">30%</p>
        </div>
        <Progress value={30} className="w-full mt-3" />
        <div className="flex flex-row items-center gap-2 text-sm text-gray-600 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-amber-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <p>Chapter 31: The main Major of Hello</p>
        </div>
        <div className="flex flex-row items-center gap-2 mt-5">
          <div className="bg-black cursor-pointer flex-1 text-white px-3 py-2 rounded text-center  font-medium text-sm">
            Continue Reading
          </div>
          <div className="border cursor-pointer text-gray-800 border-gray-300 px-3 py-2 rounded text-center  font-medium text-sm">
            Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyCard;
