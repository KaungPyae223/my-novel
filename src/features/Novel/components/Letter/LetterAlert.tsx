import React from "react";
import { AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

const LetterAlert = () => {
  return (
    <div>
      <div className="border border-orange-200 bg-orange-50 text-orange-800 p-7 rounded-md">
        <div className="flex flex-row items-center gap-3">
          <AlertCircleIcon className="size-5" />
          <AlertTitle className="text-xl font-semibold">
            Community Guidelines
          </AlertTitle>
        </div>
        <div>
          <p className="text-sm my-3">
            Please read and follow the community guidelines before writing a
            letter.
          </p>
          <ul className="list-inside list-disc text-sm">
            <li>Be respectful and constructive in your feedback</li>
            <li>Do not make personal attacks or use offensive language</li>
            <li>Keep your messages relevant to the novel and writing</li>
            <li>
              Inappropriate content will be removed and may result in account
              suspension
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LetterAlert;
