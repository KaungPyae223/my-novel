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

export const useShareChapter = ({ chapterID }: { chapterID: string }) => {
  return useMutate({
    mutationFn: shareChapter,
    queryKey: [`/chapters/${chapterID}`],
    successMessage: "Copy the chapter link",

  });
};

export const useCreateChapter = ({ id }: { id: string }) => {
  return useMutate({
    mutationFn: createChapter,
    queryKey: [`/novel-chapters/${id}`],
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
    queryKey: [`/novel-chapters/${id}`],
    successMessage: "Successfully deleted chapter",
  });
};

export const useChapterLoved = ({ chapterID }: { chapterID: string }) => {
  return useMutate({
    mutationFn: chapterLoved,
    queryKey: [`/chapters/${chapterID}`],
  });
};
