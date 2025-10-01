"use client";
import React from "react";
import ChapterNovelIntro from "../components/ChapterNovelIntro";
import Container from "@/features/Components/Container/Container";
import ChapterCard from "../components/ChapterCard";
import ChapterPrevNext from "../components/ChapterPrevNext";
import ChapterHeader from "../components/ChapterHeader";
import Loading from "@/features/Components/Loading/Loading";
import { notFound } from "next/navigation";
import useFetchData from "@/services/fetcher";
import { Toaster } from "sonner";

const ChapterPage = ({ chapterID }: { chapterID: string }) => {
  const { data, isLoading, error } = useFetchData(`/chapters/${chapterID}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    if (error.status === 404) {
      return notFound();
    }
    throw error;
  }

  return (
    <div>
      <Toaster position="top-center" richColors />
      <ChapterHeader novelID={data.data.novel.id} />
      <Container className="mt-16 py-6 space-y-6">
        <ChapterNovelIntro novel={data.data.novel} />
        <ChapterCard chapterID={chapterID} chapterData={data.data} />
        <ChapterPrevNext
          novelID={data.data.novel.id}
          prevChapter={data.data.previous_chapter_id}
          nextChapter={data.data.next_chapter_id}
          chapter={data.data.chapter}
          totalChapters={data.data.novel.total_chapters}
        />
      </Container>
    </div>
  );
};

export default ChapterPage;
