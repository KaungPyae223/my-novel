"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAddParams } from "@/utils/searchParams";
import useFetchData from "@/services/fetcher";
import { useGenerateQuery } from "@/utils/searchParams";
import { useChapterLoved, useShareChapter } from "@/services/chapter";
import shareLink from "@/utils/shareLink";

export const useChapterCard = ({ chapterID }: { chapterID: string }) => {
  const searchParams = useSearchParams();

  const [fontSize, setFontSize] = React.useState<number>(16);
  const readType = searchParams.get("read_type") || "content";
  const translatedLanguage = searchParams.get("language") || "";

  const [already_love, setAlready_love] = React.useState<boolean>(false);

  const addParams = useAddParams();

  const { data, isLoading, error } = useFetchData(
    useGenerateQuery(`/chapters/${chapterID}`)
  );

  useEffect(() => {
    if (data) {
      setAlready_love(data.data.already_love);
    }
  }, [data]);

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
    setAlready_love((prev) => !prev);
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
    addParams,
    data,
    isLoading,
    already_love,
    error,
  };
};
