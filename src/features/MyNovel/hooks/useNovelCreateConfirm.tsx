import { useCreateNovel } from "@/services/novel";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useStoreNovel from "@/store/useNovelStore";
import { toast } from "sonner";

export const useNovelCreateConfirm = () => {
  const { novelData }: any = useStoreNovel();

  const router = useRouter();

  useEffect(() => {
    if (!novelData.title) {
      router.push("/my-novels/create");
    }
  }, [novelData.title]);

  const genre = novelData.genre ? JSON.parse(novelData.genre) : null;

  const novelTag = novelData.tags
    .split("/")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  const handleBack = () => {
    router.push("/my-novels/create");
  };

  const { mutate } = useCreateNovel();

  const handleCreate = () => {
    const formData = new FormData();
    formData.append("title", novelData.title);
    formData.append("genre", genre.genre);
    formData.append("status", novelData.status);
    formData.append("tags", novelData.tags);
    formData.append("description", novelData.description);
    formData.append("synopsis", novelData.synopsis);
    formData.append("cover_image", novelData.coverImage);
    formData.append("genre_id", genre.id);

    toast.loading("Creating novel...");

    mutate(formData);
  };

  return {
    handleBack,
    handleCreate,
    novelData,
    novelTag,
    genre,
  };
};
