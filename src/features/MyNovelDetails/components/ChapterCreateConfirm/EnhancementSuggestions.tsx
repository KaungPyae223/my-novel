import AiLoading from "@/features/Components/Loading/AiLoading";
import { api } from "@/services/api";
import useStoreChapter from "@/store/useChapterStore";
import React, { useEffect, useState } from "react";

const suggestions = {
  story_pacing:{
    icons:"📈",
    title:"Story Pacing",
  },
  character_development:{
    icons:"🧑‍🎤",
    title:"Character Development",
  },
  world_building:{
    icons:"🌍",
    title:"World Building",
  },
  chapter_ending:{
    icons:"🔚",
    title:"Chapter Ending",
  },
  overall_assessment:{
    icons:"⭐",
    title:"Overall Assessment",
  },
}




const EnhancementSuggestions = () => {

  const { chapterData } = useStoreChapter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.post("/chapter-assessment", {
        content: chapterData.content,
      });
      setData(response.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <AiLoading text="Analyzing chapter..." />;
  }

  return (
    <div className="w-full mt-6 shadow-xs mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-6">
        <span className="text-2xl">🧠</span> Enhancement Suggestions
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SuggestionCard item={data.story_pacing} icon_title={suggestions.story_pacing} />
        <SuggestionCard item={data.character_development} icon_title={suggestions.character_development} />
        <SuggestionCard item={data.world_building} icon_title={suggestions.world_building} />
        <SuggestionCard item={data.chapter_ending} icon_title={suggestions.chapter_ending} />
        
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-md p-5">
        <h3 className="text-lg font-semibold text-purple-800 flex items-center gap-2 mb-2">
          <span className="text-xl">{suggestions.overall_assessment.icons}</span> {suggestions.overall_assessment.title}
        </h3>
        <p className="text-sm text-purple-700 mb-3">{data.overall_assessment.suggestion}</p>
        <p className="font-semibold text-purple-800 mt-auto">
          Overall Score:{" "}
          <span className="text-lg ms-1">{data.overall_assessment.score} / 10</span>{" "}

        </p>
      </div>
    </div>
  );
};

const SuggestionCard = ({ item, icon_title }: { item: any, icon_title: any }) => {
  return (
    <div
      className="bg-white border border-blue-200 rounded-md p-4 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-purple-800 flex items-center gap-2 mb-2">
        <span className="text-xl">{icon_title.icons}</span> {icon_title.title}
      </h3>
      <p className="text-sm text-purple-700 mb-3">{item.suggestion}</p>
      <span className="text-sm bg-blue-100 text-blue-800 font-medium px-2 py-1 rounded">
        Score: {item.score} / 10
      </span>
    </div>
  );
};

export default EnhancementSuggestions;
