import {
  Heart,
  Pause,
  Play,
  Share,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import React from "react";
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
import { notFound } from "next/navigation";
import { useChapterCard } from "../hooks/useChapterCard";
import { motion } from "framer-motion";

const ChapterCard = ({
  chapterID,
  chapterData,
}: {
  chapterID: string;
  chapterData: any;
}) => {
  const {
    fontSize,
    readType,
    translatedLanguage,
    isPlaying,
    handleZoomIn,
    handleZoomOut,
    playVoice,
    stopVoice,
    pauseVoice,
    resumeVoice,
    handleLoved,
    handleShare,
    addParams,
    data,
    isLoading,
    already_love,
    error,
  } = useChapterCard({ chapterID });

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
                onValueChange={(value) =>
                  addParams([
                    {
                      key: "read_type",
                      value: value === "content" ? "" : value,
                    },
                  ])
                }
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
                onValueChange={(value) =>
                  addParams([
                    {
                      key: "language",
                      value: value === "Original Language" ? "" : value,
                    },
                  ])
                }
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
                  key={already_love ? "filled" : "unfilled"} // forces animation when state changes
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleLoved}
                >
                  {already_love ? (
                    <Heart
                      className="size-4 cursor-pointer"
                      stroke="red"
                      fill="red"
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
