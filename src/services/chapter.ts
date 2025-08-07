import { api } from "./api";
import { useMutate } from "./mutate";

const createChapter = (chapterData: any) => {
  return api.post("/chapters", chapterData);
};

export const useCreateChapter = ({id}: {id: string}) => {
  return  useMutate({
    mutationFn: createChapter,
    queryKey: ["/my-novels"],
    successMessage: "Successfully created chapter",
    pushPath: `/my-novels/details/${id}`,
  });
};
