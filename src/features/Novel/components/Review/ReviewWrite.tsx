import { MessageCircle } from "lucide-react";
import React from "react";

const ReviewWrite = () => {
  return (
    <div className="p-7 shadow border border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <MessageCircle className="size-6" />
        Write Review
      </div>
      <div className="mt-6">
        <form action="">
          <div className="flex flex-col gap-2">
            <label htmlFor="Review">Review</label>
            <textarea
              name="Review"
              id="Review"
              className="border rounded-lg border-gray-300 p-2 resize-none"
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <div className="w-full flex justify-end mt-3">
            <button
              type="submit"
              className="w-fit px-6 py-3 ms-auto bg-blue-700 text-white rounded-md text-sm font-medium text-center cursor-pointer"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewWrite;
