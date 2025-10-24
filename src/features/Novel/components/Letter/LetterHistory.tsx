import { Calendar, Eye, Mail, MessageCircle, Send } from "lucide-react";
import React from "react";
import LetterCard from "./LetterCard";

const LetterHistory = () => {
  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Mail className="size-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Sent Letters History
        </h2>
      </div>
      <div className="mt-6 space-y-6">
        <LetterCard />
        <LetterCard />
        <LetterCard />
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

export default LetterHistory;
