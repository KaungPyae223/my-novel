import { Calendar, Eye, MessageCircle, Send } from "lucide-react";
import React from "react";

const LetterCard = () => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      {/* Top section */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-800 bg-gray-100 p-2  rounded-full">
            <Send className="size-4" />
          </span>
          <span className="text-sm font-bold text-gray-800 bg-gray-100 p-2 rounded-full">
            <Eye className="size-4" />
          </span>
        </div>

        <span className="text-sm text-gray-500 flex items-center gap-1">
          <Calendar className="size-3.5" /> 2024-02-10
        </span>
      </div>

      {/* Review text */}
      <p className="text-gray-800 mt-2 mb-4">
        I absolutely love your novel! The character development is amazing and I
        can't wait for the next chapter.
      </p>

      {/* Author reply */}
      <div className="bg-gray-100 border-l-4 border-gray-400 rounded p-3">
        <p className="text-sm font-semibold text-gray-700 mb-1 flex gap-1 items-center">
          <MessageCircle className="size-4 text-gray-600" />
          Author's Reply:
        </p>
        <p className="text-sm mt-2 text-gray-700">
          Thank you so much for your kind words! Your support motivates me to
          keep writing. Chapter 26 is coming soon!
        </p>
      </div>
    </div>
  );
};

export default LetterCard;
