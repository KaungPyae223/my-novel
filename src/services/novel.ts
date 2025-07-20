import { api, formApi } from "./api";
import { useMutate } from "./mutate";

const createNovel = (formData: FormData) => {
  return formApi.post("/novels", formData);
};

const deleteNovel = (id: string) => {
  return formApi.delete(`/novels/${id}`);
};

const updateNovel = (novelData: any) => {
  return api.put(`/novels/${novelData.id}`, novelData);
};

const updateNovelCoverImage = (formData: FormData) => {
  return formApi.post(`/novels/upload-image/${formData.get("id")}`, formData);
};

export const useCreateNovel = () => {
  return useMutate({
    mutationFn: createNovel,
    queryKey: ["/novels"],
    successMessage: "Successfully created novel",
    pushPath: "/my-novels",
  });
};

export const useUpdateNovel = () => {
  return useMutate({
    mutationFn: updateNovel,
    queryKey: ["/novels"],
    successMessage: "Successfully updated novel data",
  });
};

export const useUpdateNovelCoverImage = () => {
  return useMutate({
    mutationFn: updateNovelCoverImage,
    queryKey: ["/novels"],
    successMessage: "Successfully updated novel cover image",
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


  