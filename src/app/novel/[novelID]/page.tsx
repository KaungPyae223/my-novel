import QueryProvider from "@/features/Components/Middleware/QueryProvider";
import NovelPage from "@/features/Novel/pages/NovelPage";

async function getNovelMeta(novelID: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/novels/${novelID}`
  );
  if (!res.ok) return null;
  return res.json();
}

// ✅ Dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: { novelID: string };
}) {
  const { novelID } = await params;
  const data = await getNovelMeta(novelID);

  const novel = data?.data;

  if (!novel) {
    return {
      title: "Novel Not Found",
      description: "The novel you are looking for does not exist.",
    };
  }

  const keywords = novel.tags.split("/");

  return {
    title: `${novel.title}`,
    description: novel.description ?? "Read this amazing novel online.",
    keywords: [...keywords, novel.title, novel.genre, "novel"],
    authors: [{ name: novel.user_name }],
    creator: novel.user_name,
    openGraph: {
      title: novel.title,
      description: novel.description,
      siteName: "My Novel",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: novel.title,
      description: novel.description,
      images: [novel.image ?? "/default-cover.jpg"],
    },
  };
}

const Page = async ({ params }: { params: { novelID: string } }) => {
  const { novelID } = await params;
  return (
    <QueryProvider>
      <NovelPage novelID={novelID} />
    </QueryProvider>
  );
};

export default Page;
