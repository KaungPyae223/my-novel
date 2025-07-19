import NovelEditPage from "@/features/MyNovel/pages/NovelEditPage";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <NovelEditPage id={id} />;
};

export default page;
