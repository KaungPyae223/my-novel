import { api } from "./api";
import { useMutate } from "./mutate";

const createChapter = (chapterData: any) => {
  return api.post("/chapters", chapterData);
};

const updateChapter = (chapterData: any) => {
  return api.put(`/chapters/${chapterData.id}`, chapterData);
};

export const useCreateChapter = ({id}: {id: string}) => {
  return  useMutate({
    mutationFn: createChapter,
    queryKey: [`/novel-chapters/${id}`],
    successMessage: "Successfully created chapter",
    pushPath: `/my-novels/details/${id}`,
  });
};

export const useUpdateChapter = ({id, chapterID}: {id: string, chapterID: string}) => {
  return useMutate({
    mutationFn: updateChapter,
    queryKey: [`/novel-chapters/${id}`],
    successMessage: "Successfully updated chapter",
    pushPath: `/my-novels/details/${id}`,
  });


