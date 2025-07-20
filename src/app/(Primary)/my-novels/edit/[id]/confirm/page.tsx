import React from "react";
import NovelEditConfirmationPage from "@/features/MyNovel/pages/NovelEditConfirmationPage";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <NovelEditConfirmationPage id={id} />;
};

export default page;
