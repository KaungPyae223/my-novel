import React from "react";

interface NovelQuerySuggestionCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const NovelQuerySuggestionCard = ({ data }: NovelQuerySuggestionCardProps) => {
  return (
    <div
      key={data.title}
      className="flex items-start gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-20 object-cover rounded-md"
      />
      <div className="flex-1">
        <p
          className="font-medium text-sm mb-1 text-justify"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></p>
        <p
          className="text-gray-500 text-xs text-justify line-clamp-6"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
};

export default NovelQuerySuggestionCard;
