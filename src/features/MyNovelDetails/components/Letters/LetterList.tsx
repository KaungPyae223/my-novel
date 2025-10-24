import React from "react";
import LetterCard from "./LetterCard";
import { Mail } from "lucide-react";

const LetterList = () => {
  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <Mail className="size-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Fan Letter List
          </h2>
        </div>
      </div>
      <div className="mt-6 space-y-6">
        <LetterCard />
        <LetterCard />
        <LetterCard />
        <LetterCard />
        <LetterCard />
        <LetterCard />
      </div>
    </div>
  );
};

export default LetterList;
