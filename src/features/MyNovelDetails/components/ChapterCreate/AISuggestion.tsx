import React from "react";
import { Sparkles, Lightbulb, Users, Zap, Pencil } from "lucide-react";

const suggestions = [
  {
    icon: <Lightbulb className="text-yellow-500 w-5 h-5" />,
    title: "Chapter Direction",
    text: "Based on your novel's progression, consider exploring the emotional impact of the dragon's first appearance on the villagers. This could add depth to your world-building and character development.",
  },
  {
    icon: <Users className="text-blue-500 w-5 h-5" />,
    title: "Character Development",
    text: "Your protagonist could show internal conflict between duty and personal desires. This chapter might be perfect for revealing a hidden fear or past trauma that affects their decision-making.",
  },
  {
    icon: <Zap className="text-yellow-600 w-5 h-5" />,
    title: "Plot Enhancement",
    text: "Consider introducing a subplot that connects to your main theme. Perhaps a secondary character discovers something that will become important later in the story.",
  },
  {
    icon: <Pencil className="text-pink-500 w-5 h-5" />,
    title: "Writing Tips",
    text: (
      <>
        <ul className="list-disc pl-5 space-y-1 text-sm text-purple-700">
          <li>Use sensory details to immerse readers in the fantasy world</li>
          <li>Show character emotions through their actions and dialogue</li>
        </ul>
      </>
    ),
  },
];

const AISuggestion = () => {
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
          <div
            key={idx}
            className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 text-purple-700 font-medium">
              {item.icon}
              <span>{item.title}</span>
            </div>
            <div className="text-purple-700 text-sm leading-relaxed">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISuggestion;
