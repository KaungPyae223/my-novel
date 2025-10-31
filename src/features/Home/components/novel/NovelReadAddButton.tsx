import Link from "next/link";
import { useNovelFavorite } from "@/services/novel";

const NovelReadAddButton = ({ novel: { id, already_favorited } }: { novel: { id: string, already_favorited: boolean } }) => {
  const { mutate } = useNovelFavorite();

  const handleAddFavorite = () => {
    mutate(id);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <Link
        href={`/novel/${id}`}
        className=" w-full text-center bg-gradient-to-r from-blue-600 to-pink-700 py-2.5 rounded-md text-sm my-6 text-white font-medium cursor-pointer"
      >
        Read Novel
      </Link>
      <div
        onClick={handleAddFavorite}
        className={`${already_favorited ? "bg-green-300" : ""} w-full text-center border border-gray-300 py-2.5 rounded-md text-sm my-6 text-gray-800 font-medium cursor-pointer`}
      >
        {already_favorited ? "Favorites Novel" : "Add to Favorites"}
      </div>
    </div>
  );
};

export default NovelReadAddButton;
