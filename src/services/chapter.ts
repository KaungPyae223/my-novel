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

export const useCreateChapter = ({id}: {id: string}) => {
  return  useMutate({
    mutationFn: createChapter,
    queryKey: [`/novel-chapters/${id}`],
    successMessage: "Successfully created chapter",
    pushPath: `/my-novels/details/${id}`,
  });
};

export const useUpdateChapter = ({id}: {id: string}) => {
  return useMutate({
    mutationFn: updateChapter,
    queryKey: [`/novel-chapters/${id}`],
    successMessage: "Successfully updated chapter",
    pushPath: `/my-novels/details/${id}`,
  });
};

export const useDeleteChapter = ({id}: {id: string}) => {
  return useMutate({
    mutationFn: deleteChapter,
    queryKey: [`/novel-chapters/${id}`],
    successMessage: "Successfully deleted chapter",
  });
};

