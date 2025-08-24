import React from "react";

const NovelSynopsis = ({ novel:{synopsis} }: { novel: {synopsis:string} }) => {
  return <div>
    <p className="font-semibold text-gray-800">Synopsis:</p>
    <p className="mt-2 text-gray-800 text-justify font-serif">
      {synopsis}
    </p>
  </div>;
};

export default NovelSynopsis;