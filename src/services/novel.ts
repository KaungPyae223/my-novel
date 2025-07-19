import { formApi } from "./api";
import { useMutate } from "./mutate";

const createNovel = (formData: FormData) => {
  return formApi.post("/novels", formData);
};

const deleteNovel = (id: string) => {
  return formApi.delete(`/novels/${id}`);
};

export const useCreateNovel = () => {
  return useMutate({
    mutationFn: createNovel,
    queryKey: ["/novels"],
    successMessage: "Successfully created novel",
    pushPath: "/my-novels",
  });
};

export const useDeleteNovel = () => {
  return useMutate({
    mutationFn: deleteNovel,
    queryKey: ["/novels"],
    successMessage: "Successfully deleted novel",
    pushPath: "/my-novels",
  });
};