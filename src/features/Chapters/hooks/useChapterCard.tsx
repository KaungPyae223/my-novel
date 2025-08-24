"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAddParams } from "@/utils/searchParams";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import { useChapterLoved, useShareChapter } from "@/services/chapter";
import shareLink from "@/utils/shareLink";

export const useChapterCard = ({ chapterID }: { chapterID: string }) => {
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
    mutate(chapterID);
  };

  const { mutate: shareChapter } = useShareChapter({ chapterID });

  const handleShare = () => {
    shareLink();
    shareChapter(chapterID);
  };

  return {
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
    setReadType,
    setTranslatedLanguage,
    data,
    isLoading,
    error,
  };
};
