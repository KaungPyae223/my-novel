import { Heart, Pause, Play, Share2, X, ZoomIn, ZoomOut } from "lucide-react";
import React, { useEffect } from "react";
import { languagesList } from "@/lib/languageData";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ChapterTranslateLoading from "./ChapterTranslateLoading";

const ChapterCard = () => {
  const [fontSize, setFontSize] = React.useState<number>(16);

  const OriginalText = `In a distant coastal village where the fog never cleared and the stars rarely shone, stood an old lighthouse. It had long been abandoned by sailors and maps, but not by its keeper — Elias, a man who hadn’t left in thirty years.

Every night, Elias climbed the spiral stairs, lit the lantern, and watched the sea. No ships came anymore, but he said it wasn’t for them.

“It’s for the ones who are lost,” he whispered to the wind.

One stormy evening, the light flickered and went out. Elias, trembling, descended to fix it — but as he reached the base, there was a knock at the heavy door.

A girl, soaked to the bone, stood there. “I saw your light,” she said. “I was walking in the dark... I didn’t know where I was going.”

Elias gave her shelter, warmth, and tea. The next morning, the fog had lifted for the first time in years.

She left with a smile. “Thank you,” she said, “for lighting the way.”

That night, Elias lit the lamp again — not for ships, but for the lost souls still wandering, waiting for someone to show them the way home.`;

  const [translatedText, setTranslatedText] = React.useState<string>("");

  useEffect(() => {
    setTranslatedText(OriginalText);
  }, []);

  const handleZoomIn = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };

  const handleZoomOut = () => {
    if (fontSize > 16) {
      setFontSize((prevFontSize) => prevFontSize - 1);
    }
  };

  const playVoice = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(OriginalText);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
    setIsPlaying("pause");
  };

  const stopVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying("play");
  };

  const [isPlaying, setIsPlaying] = React.useState<"play" | "pause" | "resume">(
    "play"
  );

  const pauseVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.pause();
    }
    setIsPlaying("resume");
  };

  const resumeVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.resume();
    }
    setIsPlaying("pause");
  };

  const [loading, setLoading] = React.useState<boolean>(false);

  const translateText = async (language: string) => {
    setLoading(true);
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-0528:free",
          messages: [
            {
              role: "user",
              content: `Please translate the following text to ${language}: ${OriginalText}. In there Please give only translated text.`,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    setLoading(false);
    setTranslatedText(data.choices[0].message.content);
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-xl">Chapter 1: The Discovery</p>
          <p className="text-sm text-gray-500 mt-1.5">Chapter 1 of 21</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs mb-0.5 text-gray-800">Font Size</p>
            <div className="flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
              <ZoomOut
                className="size-4 cursor-pointer"
                onClick={handleZoomOut}
              />
              <div className="border-l border-gray-300 h-4"></div>
              <p className="text-sm pointer-events-none">{fontSize}</p>
              <div className="border-l border-gray-300 h-4"></div>
              <ZoomIn
                className="size-4 cursor-pointer"
                onClick={handleZoomIn}
              />
            </div>
          </div>

          <div>
            <p className="text-xs mb-0.5 text-gray-800">Voice</p>
            <div className="flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
              {isPlaying === "pause" ? (
                <Pause onClick={pauseVoice} className="size-4 cursor-pointer" />
              ) : isPlaying === "resume" ? (
                <Play onClick={resumeVoice} className="size-4 cursor-pointer" />
              ) : (
                <Play onClick={playVoice} className="size-4 cursor-pointer" />
              )}
              <div className="border-l border-gray-300 h-4"></div>
              <X onClick={stopVoice} className="size-4 cursor-pointer" />
            </div>
          </div>
          <div>
            <p className="text-xs mb-0.5 text-gray-800">Translation</p>
            <Select onValueChange={translateText}>
              <SelectTrigger className="w-[180px] h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  {languagesList.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-xs mb-0.5 text-gray-800">{"General"}</p>
            <div className="flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
              <Heart className="size-4 cursor-pointer" />
              <div className="border-l border-gray-300 h-4"></div>
              <Share2 className="size-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div
        style={{ fontSize: `${fontSize}px` }}
        className="text-justify text-gray-800 mt-6 leading-relaxed"
      >
        {loading ? <ChapterTranslateLoading /> : translatedText}
      </div>
    </div>
  );
};

export default ChapterCard;
