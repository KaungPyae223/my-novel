import { api } from "./api";
import { useMutate } from "./mutate";

const createChapter = (chapterData: any) => {
  return api.post("/chapters", chapterData);
};

const updateChapter = (chapterData: any) => {
  return api.put(`/chapters/${chapterData.id}`, chapterData);
};

const deleteChapter = (chapterID: string) => {
  return api.delete(`/chapters/${chapterID}`);
};

const chapterLoved = (chapterID: string) => {
  return api.post(`/chapters/loved/${chapterID}`);
};

const shareChapter = (chapterID: string) => {
  return api.post(`chapters/share/${chapterID}`);
};

const restoreChapter = (chapterID: string) => {
  return api.post(`chapters/restore/${chapterID}`);
};

export const useRestoreChapter = ({ id }: { id: string }) => {
  return useMutate({
    mutationFn: restoreChapter,
    queryKey: [`/novel-trashed-chapters/${id}`, `/novel-chapters/${id}`],
    successMessage: "Successfully restored chapter",
  });
};

export const useShareChapter = ({ chapterID }: { chapterID: string }) => {
  return useMutate({
    mutationFn: shareChapter,
    successMessage: "Link copied to clipboard",
    queryKey: [],
  });
};

export const useCreateChapter = ({ id }: { id: string }) => {
  return useMutate({
    mutationFn: createChapter,
    queryKey: [`/novel-chapters/${id}`, `/novels/${id}`],
    successMessage: "Successfully created chapter",
    pushPath: `/my-novels/details/${id}`,
  });
};

export const useUpdateChapter = ({
  id,
  chapterID,
}: {
  id: string;
  chapterID: string;
}) => {
  return useMutate({
    mutationFn: updateChapter,
    queryKey: [
      `/chapters/update-chapter-show/${chapterID}`,
      `/novel-chapters/${id}`,
    ],
    successMessage: "Successfully updated chapter",
    pushPath: `/my-novels/details/${id}`,
  });
};

export const useDeleteChapter = ({ id }: { id: string }) => {
  return useMutate({
    mutationFn: deleteChapter,
    queryKey: [`/novel-chapters/${id}`, `/novel-trashed-chapters/${id}`],
    successMessage: "Successfully deleted chapter",
  });
};

export const useChapterLoved = ({ chapterID }: { chapterID: string }) => {
  return useMutate({
    mutationFn: chapterLoved,
    successMessage: "",
    queryKey: [],
  });
};
