import NovelLogs from "@/features/MyNovelDetails/pages/NovelLogs";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <NovelLogs id={id} />;
};

export default page;