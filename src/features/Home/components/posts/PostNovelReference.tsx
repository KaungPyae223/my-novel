import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NovelReference = ({ novel }: { novel: any }) => {
  const router = useRouter();

  const handleReadNovel = () => {
    router.push(`/novel/${novel.id}`);
  };

  return (
    <div className="p-3 h-52 flex flex-row items-start gap-4 mb-6 rounded-lg bg-amber-50 border border-amber-300">
      <Image
        className=" max-w-32 w-full h-full object-cover rounded-lg items-center"
        src={novel.image}
        alt={novel.title}
        width={128}
        height={128}
      />
      <div className="flex-1 h-full flex flex-col">
        <div className="flex flex-row items-center gap-1.5">
          <p className="font-medium text-xl font-poppins">{novel.title}</p>
          <p className="text-xs bg-white rounded-full border border-gray-300 px-2 py-0.5 font-medium text-gray-800">
            {novel.genre}
          </p>
          <span className="px-2 py-0.5 rounded-full text-xs text-gray-600 bg-gray-200">
            {novel.progress}
          </span>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-3 text-justify text-sm">
          {novel.description}
        </p>
        <div className="mt-auto pt-4">
          <div className="flex flex-row items-center text-gray-700 gap-1 text-xs">
            <BookOpen className="size-3.5" />

            <p>{novel.total_chapters} Chapters</p>
          </div>

          <div
            onClick={handleReadNovel}
            className="mt-2 text-center bg-amber-600 py-2.5 rounded-md text-sm text-white font-medium cursor-pointer"
          >
            Read Novel{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelReference;
