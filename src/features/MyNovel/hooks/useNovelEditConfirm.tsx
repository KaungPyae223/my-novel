import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useStoreNovel from "@/store/useNovelStore";
import { toast } from "sonner";
import { useUpdateNovel, useUpdateNovelCoverImage } from "@/services/novel";

export const useNovelEditConfirm = () => {
  const { novelData } = useStoreNovel();

  const router = useRouter();

  useEffect(() => {
    if (!novelData.title) {
      router.push("/my-novels");
    }
  }, [novelData.title, router]);

  const genre = novelData?.genre ? JSON.parse(novelData.genre) : {};

  const novelTag = novelData?.tags
    .split("/")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  const handleBack = () => {
    router.push(`/my-novels/edit/${novelData.id}`);
  };

  const updateNovelMutation = useUpdateNovel({id: novelData.id});
  const updateNovelCoverImageMutation = useUpdateNovelCoverImage({id: novelData.id});

  const handleEdit = () => {
    toast.loading("Updating novel...");

    const updateNovelData = {
      id: novelData.id,
      title: novelData.title,
      description: novelData.description,
      synopsis: novelData.synopsis,
      tags: novelData.tags,
      status: novelData.status,
      progress: novelData.progress,
      genre_id: genre.id,
    };

    updateNovelMutation.mutate(updateNovelData);

    if (novelData.coverImage instanceof File) {
      const formData = new FormData();
      formData.append("id", novelData.id);
      formData.append("image", novelData.coverImage);
      updateNovelCoverImageMutation.mutate(formData, {
        onSuccess: () => {
          toast.success("Successfully updated novel cover image");
        },
      });
    }
    toast.dismiss();
    router.push(`/my-novels`);
  };

  return {
    handleBack,
    handleEdit,
    novelData,
    novelTag,
    genre,
  };
};
