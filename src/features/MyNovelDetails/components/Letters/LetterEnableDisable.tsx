import Loading from "@/features/Components/Loading/Loading";
import useFetchData from "@/services/fetcher";
import { useToggleFanLetter } from "@/services/novel";
import { Lock, LockOpen } from "lucide-react";
import React from "react";

const LetterEnableDisable = ({ novelID }: { novelID: string }) => {
  const { data, isLoading, error } = useFetchData(
    `novels/fan-letter-status/${novelID}`
  );

  const { mutateAsync: toggleFanLetter } = useToggleFanLetter({ novelID });

  const toggleFanLetters = () => {
    toggleFanLetter(novelID);
  };

  if (error) {
    throw error;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <h3 className="font-medium text-gray-900">Fan Letters</h3>
          <p className="text-sm text-gray-500">
            {data.open_letter
              ? "Fans can send you letters."
              : "Fans cannot send you letters."}
          </p>
        </div>
        <div
          onClick={toggleFanLetters}
          className={`flex text-sm items-center gap-2 p-3 text-white rounded-lg cursor-pointer
              ${data.open_letter ? "bg-red-500" : "bg-gray-800"}
          `}
        >
          {data.open_letter ? (
            <>
              <Lock className="size-4" />
              Close Fan Letters
            </>
          ) : (
            <>
              <LockOpen className="size-4" />
              Open Fan Letters
            </>
          )}
        </div>
      </div>

      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-medium text-yellow-800">Note</h3>
        <p className="text-sm text-yellow-700 mt-1">
          When fan letters are closed, existing letters will remain visible but
          no new letters can be sent.
        </p>
      </div>
    </div>
  );
};

export default LetterEnableDisable;
