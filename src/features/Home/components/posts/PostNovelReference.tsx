import { BookOpen } from "lucide-react";

const NovelReference = () => {
  return (
    <div className="p-3 h-52 flex flex-row items-start gap-4 mb-6 rounded-lg bg-amber-50 border border-amber-300">
      <img
        className="w-32 h-full object-cover rounded-lg items-center"
        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop"
        alt=""
      />
      <div className="flex-1 h-full flex flex-col">
        <div className="flex flex-row items-center gap-1.5">
          <p className="font-medium text-xl font-poppins">The Willing</p>
          <p className="text-xs bg-white rounded-full border border-gray-300 px-2 py-0.5 font-medium text-gray-800">
            Sci-Fi
          </p>
          <span className="px-2 py-0.5 rounded-full text-xs text-gray-600 bg-gray-200">
            Complete
          </span>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-3 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          autem quasi repellat. Odit, neque placeat architecto facere atque
          temporibus saepe libero doloremque! Maiores numquam veniam saepe
          molestiae eligendi recusandae cumque cupiditate aliquam at illo
          incidunt, culpa deserunt. Maxime rem officia voluptate dicta. Ex
          distinctio, dolorem dolore natus aspernatur dolorum aliquam.
        </p>
        <div className="mt-auto pt-4">
          <div className="flex flex-row items-center text-gray-700 gap-1 text-xs">
            <BookOpen className="size-3.5" />

            <p>24 Chapters</p>
          </div>

          <div className="mt-2 text-center bg-amber-600 py-2.5 rounded-md text-sm text-white font-medium cursor-pointer">
            Read Novel{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelReference;
