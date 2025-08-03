import React from "react";
import { Sparkles, Lightbulb, Users, Zap, Pencil } from "lucide-react";
import useFetchData from "@/services/fetcher";
import AiLoading from "@/features/Components/Loading/AiLoading";

const AISuggestion = ({ novelId }: { novelId: string }) => {
  const icons = {
    chapter_direction: <Lightbulb className="text-yellow-500 w-5 h-5" />,
    character_development: <Users className="text-blue-500 w-5 h-5" />,
    plot_enhancement: <Zap className="text-yellow-600 w-5 h-5" />,
    writing_tips: <Pencil className="text-pink-500 w-5 h-5" />,
  };

  const { isLoading, data, error } = useFetchData(
    `/chapters/generate-suggestion/${novelId}`
  );

  if (isLoading) {
    return <AiLoading text="Generating suggestions..." />;
  }

  if (error) {
    throw error;
  }

  const suggestions = [
    "chapter_direction",
    "character_development",
    "plot_enhancement",
    "writing_tips",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-purple-50 border border-purple-200 rounded-xl">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-purple-600 w-5 h-5" />
        <h2 className="text-2xl font-semibold text-purple-700">
          AI Writing Suggestions
        </h2>
      </div>
      <div className="space-y-4">
        {suggestions.map((item, idx) => (
          <SuggestionItem
            key={idx}
            icon={icons[item as keyof typeof icons]}
            title={item}
            text={data?.[item]}
          />
        ))}
      </div>
    </div>
  );
};

const SuggestionItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  const suggestionList = text.split("//");

  return (
    <div className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-purple-700 font-medium">
        {icon}
        <span>{title}</span>
      </div>
      <ol className="space-y-2 mt-4 text-purple-800 text-sm leading-relaxed list-decimal list-inside">
        {suggestionList.map((item, idx) => (
          <li
            key={idx}
            
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AISuggestion;
