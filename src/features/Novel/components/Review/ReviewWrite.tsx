import React from "react";

const ReviewWrite = () => {
  return (
    <div className="p-7 shadow border border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          />
        </svg>
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
