import QueryProvider from "@/features/Components/Middleware/QueryProvider";
import NovelPage from "@/features/Novel/pages/NovelPage";

const Page = () => {
  return (
    <QueryProvider>
      <NovelPage />
    </QueryProvider>
  );
};

export default Page;
