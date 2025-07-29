import React from "react";

const suggestions = [
  {
    id: 1,
    icon: "📈",
    title: "Story Pacing",
    description:
      "Your chapter has good pacing with a nice balance of dialogue and narrative. Consider adding a brief pause before the climactic moment to build more tension.",
    score: 8.5,
  },
  {
    id: 2,
    icon: "🧑‍🎤",
    title: "Character Development",
    description:
      "Great character growth! Your protagonist shows clear internal conflict. You might enhance this by adding a small physical gesture that reflects their emotional state.",
    score: 9.0,
  },
  {
    id: 3,
    icon: "🌍",
    title: "World Building",
    description:
      "Excellent use of sensory details! The digital realm feels vivid and immersive. Consider adding one more detail about how the physical laws differ in this space.",
    score: 8.8,
  },
  {
    id: 4,
    icon: "🔚",
    title: "Chapter Ending",
    description:
      "Strong cliffhanger! The ending creates anticipation for the next chapter. The emotional weight of the decision is well-established and will keep readers engaged.",
    score: 9.2,
  },
];

const overallAssessment = {
  icon: "⭐",
  title: "Overall Assessment",
  description:
    "This chapter effectively advances your plot while maintaining character development. The emotional core is strong, and the world-building continues to enhance the story. Consider the suggestions above to push it from great to exceptional!",
  score: 8.9,
  rating: "Excellent",
};

const EnhancementSuggestions = () => {
  return (
    <div className="w-full mt-6 shadow-xs mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-6">
        <span className="text-2xl">🧠</span> Enhancement Suggestions
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {suggestions.map((item) => (
          <SuggestionCard key={item.id} item={item} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-md p-5">
        <h3 className="text-lg font-semibold text-purple-800 flex items-center gap-2 mb-2">
          <span className="text-xl">{overallAssessment.icon}</span> {overallAssessment.title}
        </h3>
        <p className="text-sm text-purple-700 mb-3">{overallAssessment.description}</p>
        <p className="text-sm font-semibold text-purple-800">
          Overall Score:{" "}
          <span className="text-lg ms-1">{overallAssessment.score}/10</span>{" "}
          <span className="text-sm font-medium ms-2 text-purple-600">{overallAssessment.rating}</span>
        </p>
      </div>
    </div>
  );
};

const SuggestionCard = ({ item }: { item: any }) => {
  return (
    <div
      className="bg-white border border-blue-200 rounded-md p-4 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-purple-800 flex items-center gap-2 mb-2">
        <span className="text-xl">{item.icon}</span> {item.title}
      </h3>
      <p className="text-sm text-purple-700 mb-3">{item.description}</p>
      <span className="text-xs bg-blue-100 text-blue-800 font-medium px-2 py-1 rounded">
        Score: {item.score}/10
      </span>
    </div>
  );
};

export default EnhancementSuggestions;
