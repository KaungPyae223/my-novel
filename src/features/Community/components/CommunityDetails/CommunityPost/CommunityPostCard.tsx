import { Heart, MessageCircle } from "lucide-react";

const CommunityPostCard = () => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
          alt="User avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-base font-semibold text-gray-900">Lourics Chan</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="border border-gray-300 rounded-full px-2 py-0.5 font-medium text-gray-600">
              Member
            </span>
            <span>•</span>
            <span>2h ago</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-5 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi magnam
          libero culpa assumenda soluta, maiores obcaecati tempora quo minima?
          Placeat nam numquam neque deleniti asperiores porro quae, modi ex
          voluptates quibusdam, obcaecati, quis quod saepe itaque corrupti
          distinctio amet illum.
        </p>

        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop"
          alt="Post content"
          className="max-h-64 object-cover rounded-xl mt-4"
        />
      </div>

      {/* Stats */}
      <div className="flex gap-6 text-sm text-gray-600 mt-4">
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          <span>100</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>100</span>
        </div>
      </div>

      <hr className="mt-5 mb-3 border-gray-200" />

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 font-medium ">
        <button className="flex py-2 items-center cursor-pointer w-full rounded active:bg-gray-100 justify-center gap-2 hover:text-red-500 transition-colors duration-150">
          <Heart className="w-5 h-5" />
          Love
        </button>
        <button className="flex py-2 items-center cursor-pointer w-full rounded active:bg-gray-100 justify-center gap-2 hover:text-blue-500 transition-colors duration-150">
          <MessageCircle className="w-5 h-5" />
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommunityPostCard;
