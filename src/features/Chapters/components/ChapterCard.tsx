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
import AiLoading from "@/features/Components/Loading/AiLoading";
import useFetchData from "@/services/fetcher";
import { notFound, useSearchParams } from "next/navigation";
import { useAddParams, useGenerateQuery } from "@/utils/searchParams";

const ChapterCard = ({
  chapterID,
  chapterData,
}: {
  chapterID: string;
  chapterData: any;
}) => {
  const [fontSize, setFontSize] = React.useState<number>(16);

  const [translatedLanguage, setTranslatedLanguage] =
    React.useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const language = searchParams.get("language");
    if (language && language !== translatedLanguage) {
      setTranslatedLanguage(language);
    }
  }, [searchParams]);

  const addParams = useAddParams();

  useEffect(() => {
    if (
      translatedLanguage &&
      searchParams.get("language") !== translatedLanguage
    ) {
      addParams([{ key: "language", value: translatedLanguage }]);
    }
  }, [translatedLanguage, addParams]);

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/chapters/${chapterID}`)
  );

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
      const utterance = new SpeechSynthesisUtterance(data.data.content);
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

  if (error) {
    if (error.status === 404) {
      return notFound();
    }
    throw error;
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-xl">
            Chapter {chapterData?.chapter}: {chapterData?.title}
          </p>
          <p className="text-sm text-gray-500 mt-1.5">
            Chapter {chapterData?.chapter} of{" "}
            {chapterData?.novel?.total_chapters}
          </p>
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
            <Select
              value={translatedLanguage}
              onValueChange={(value) => setTranslatedLanguage(value)}
            >
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
        {isLoading ? (
          <AiLoading text="Translating content..." />
        ) : (
          data.data.content
        )}
      </div>
    </div>
  );
};

export default ChapterCard;
