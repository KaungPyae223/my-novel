import ChapterPage from "@/features/Chapters/pages/ChapterPage";
import React from "react";

const page = async ({params}: {params: {chapterID: string}}) => {
  const {chapterID} = await params;
  return <ChapterPage chapterID={chapterID} />;
};

export default page;
