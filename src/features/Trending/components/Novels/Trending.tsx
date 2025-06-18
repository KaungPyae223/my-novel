import React from "react";

const Trending = () => {
  return (
    <div className="bg-amber-50 flex flex-row gap-3 items-center text-xs px-4 py-2 rounded-md my-5">
      <div className="text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full bg-orange-200 text-orange-800">
        1
      </div>
      <div>
        <p className="text-orange-800 font-medium">Weekly Growth</p>
        <p className="text-orange-500 mt-1">235 viewers</p>
      </div>
    </div>
  );
};

export default Trending;
