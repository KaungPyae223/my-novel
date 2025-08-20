import ChapterPage from "@/features/Chapters/pages/ChapterPage";
import QueryProvider from "@/features/Components/Middleware/QueryProvider";
import React from "react";

async function getChapterMeta(chapterID: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chapters/${chapterID}`
  );
  if (!res.ok) return null;
  return res.json();
}

// ✅ Dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: { chapterID: string };
}) {
  const { chapterID } = await params;
  const data = await getChapterMeta(chapterID);

  const chapter = data?.data;

  if (!chapter) {
    return {
      title: "Chapter Not Found",
      description: "The chapter you are looking for does not exist.",
    };
  }

  return {
    title: `${chapter.title}`,
    description: chapter.description ?? "Read this amazing chapter online.",
    keywords: chapter.title,
    authors: [{ name: chapter.user_name }],
    creator: chapter.novel.user_name,
    openGraph: {
      title: chapter.title,
      description: chapter.summary ?? "Read this amazing chapter online.",
      siteName: "My Novel",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      description: chapter.summary ?? "Read this amazing chapter online.",
      title: chapter.title,
    },
  };
}

const page = async ({ params }: { params: { chapterID: string } }) => {
  const { chapterID } = await params;
  return (
    <QueryProvider>
      <ChapterPage chapterID={chapterID} />
    </QueryProvider>
  );
};

export default page;
