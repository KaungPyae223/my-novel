import Link from "next/link";

const ReadAddButton = () => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <Link href="/novel/1" className=" w-full text-center bg-gradient-to-r from-blue-600 to-pink-700 py-3 rounded-lg text-sm my-6 text-white font-medium cursor-pointer">
                Read Novel
            </Link>
            <div className=" w-full text-center border border-gray-300 py-3 rounded-lg text-sm my-6 text-gray-800 font-medium cursor-pointer">
                Add to Favorites
            </div>
        </div>
    );
};  

export default ReadAddButton;