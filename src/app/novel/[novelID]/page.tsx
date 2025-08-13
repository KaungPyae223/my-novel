import QueryProvider from "@/features/Components/Middleware/QueryProvider";
import NovelPage from "@/features/Novel/pages/NovelPage";

const Page = async ({params}: {params: {novelID: string}}) => {
  const {novelID} = await params;
  return (
    <QueryProvider>
      <NovelPage novelID={novelID} />
    </QueryProvider>
  );
};

export default Page;
