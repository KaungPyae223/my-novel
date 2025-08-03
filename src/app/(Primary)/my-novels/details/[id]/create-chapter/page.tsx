import CreateChapterPage from "@/features/MyNovelDetails/pages/CreateChapterPage";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <CreateChapterPage novelId={id} />;
};

export default Page;
