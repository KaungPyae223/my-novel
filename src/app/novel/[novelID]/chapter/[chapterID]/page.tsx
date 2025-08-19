import ChapterPage from "@/features/Chapters/pages/ChapterPage";
import QueryProvider from "@/features/Components/Middleware/QueryProvider";
import React from "react";

const page = async ({ params }: { params: { chapterID: string } }) => {
  const { chapterID } = await params;
  return (
    <QueryProvider>
      <ChapterPage chapterID={chapterID} />
    </QueryProvider>
  );
};

export default page;
