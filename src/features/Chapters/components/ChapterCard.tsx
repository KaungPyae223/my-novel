import {
  Heart,
  Pause,
  Play,
  Share,
  Share2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
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
import { useChapterLoved, useShareChapter } from "@/services/chapter";
import { toast } from "sonner";
import { motion } from "framer-motion";
import shareLink from "@/utils/shareLink";

const ChapterCard = ({
  chapterID,
  chapterData,
}: {
  chapterID: string;
  chapterData: any;
}) => {
  const [fontSize, setFontSize] = React.useState<number>(16);
  const [readType, setReadType] = React.useState<string>("content");

  const [translatedLanguage, setTranslatedLanguage] =
    React.useState<string>("");
  const searchParams = useSearchParams();

  const addParams = useAddParams();

  useEffect(() => {
    const language = searchParams.get("language");
    const readTypeParam = searchParams.get("read_type");
    if (language && language !== translatedLanguage) {
      setTranslatedLanguage(language);
    }
    if (readTypeParam && readTypeParam !== readType) {
      setReadType(readTypeParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const params = [];
    if (
      translatedLanguage &&
      searchParams.get("language") !== translatedLanguage
    ) {
      params.push({ key: "language", value: translatedLanguage });
    }
    if (readType && searchParams.get("read_type") !== readType) {
      params.push({ key: "read_type", value: readType });
    }

    if (params.length) addParams(params);
  }, [translatedLanguage, readType]);

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

  const { mutate } = useChapterLoved({ chapterID });

  const handleLoved = () => {
    toast.loading("Loving chapter...");
    mutate(chapterID);
  };

  const { mutate: shareChapter } = useShareChapter({ chapterID });

  const handleShare = () => {
    shareLink();
    shareChapter(chapterID);
  };

  if (error) {
    if (error.status === 404) {
      return notFound();
    }
    throw error;
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <div className="flex flex-col gap-4 justify-between">
        <div className="border-b border-gray-200 pb-4">
          <p className="font-medium text-xl">
            Chapter {chapterData?.chapter}: {chapterData?.title}
          </p>
          <p className="text-sm text-gray-500 mt-1.5">
            Chapter {chapterData?.chapter} of{" "}
            {chapterData?.novel?.total_chapters}
          </p>
        </div>
        <div className="flex flex-row  justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs mb-0.5 text-gray-800">Read Type</p>
              <Select
                value={readType}
                onValueChange={(value) => setReadType(value)}
              >
                <SelectTrigger className="w-[180px] h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
                  <SelectValue placeholder="Select read type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose how to read</SelectLabel>
                    <SelectItem value="content">Read Full Content</SelectItem>
                    <SelectItem value="summary">Read Summary</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
                  <Pause
                    onClick={pauseVoice}
                    className="size-4 cursor-pointer"
                  />
                ) : isPlaying === "resume" ? (
                  <Play
                    onClick={resumeVoice}
                    className="size-4 cursor-pointer"
                  />
                ) : (
                  <Play onClick={playVoice} className="size-4 cursor-pointer" />
                )}
                <div className="border-l border-gray-300 h-4"></div>
                <X onClick={stopVoice} className="size-4 cursor-pointer" />
              </div>
            </div>

            <div>
              <p className="text-xs mb-0.5 text-gray-800">{"General"}</p>
              <div className="flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
                <motion.div
                  key={chapterData?.already_love ? "filled" : "unfilled"} // forces animation when state changes
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleLoved}
                >
                  {chapterData?.already_love ? (
                    <Heart
                      className="size-4 cursor-pointer"
                      fill="currentColor"
                    />
                  ) : (
                    <Heart className="size-4 cursor-pointer" />
                  )}
                </motion.div>
                <div className="border-l border-gray-300 h-4"></div>
                <Share
                  onClick={handleShare}
                  className="size-4 cursor-pointer"
                />
              </div>
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
        ) : readType === "content" ? (
          data.data.content
        ) : (
          data.data.summary
        )}
      </div>
    </div>
  );
};

export default ChapterCard;
