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

const novelLoved = (novelID: string) => {
  return api.post(`novels/loved/${novelID}`);
};

const shareNovel = (novelID: string) => {
  return api.post(`novels/share/${novelID}`);
};

const novelFavorite = (novelID: string) => {
  return api.post(`novels/favorite/${novelID}`);
};

export const useShareNovel = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: shareNovel,
    queryKey: ["/my-novels", `/user/novels/${novelID}`],
    successMessage: "Copy the novel link",
  });
};

export const useNovelLoved = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: novelLoved,
    queryKey: [
      "/my-novels",
      `/recommend-novels`,
      `/user/novels/${novelID}`,
      `/novels/${novelID}`,
    ],
  });
};

export const useNovelFavorite = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: novelFavorite,
    queryKey: [
      `/recommend-novels`,
      `/user/novels/${novelID}`,
      `/novels/${novelID}`,
    ],
  });
};

export const useCreateNovel = () => {
  return useMutate({
    mutationFn: createNovel,
    queryKey: ["/my-novels"],
    successMessage: "Successfully created novel",
    pushPath: "/my-novels",
  });
};

export const useUpdateNovel = ({ id }: { id: string }) => {
  return useMutate({
    mutationFn: updateNovel,
    queryKey: ["/my-novels", `/novels/${id}`],
    successMessage: "Successfully updated novel data",
  });
};

export const useUpdateNovelCoverImage = ({ id }: { id: string }) => {
  return useMutate({
    mutationFn: updateNovelCoverImage,
    queryKey: ["/my-novels", `/novels/${id}`],
    successMessage: "Successfully updated novel cover image",
  });
};

export const useDeleteNovel = () => {
  return useMutate({
    mutationFn: deleteNovel,
    queryKey: ["/my-novels"],
    successMessage: "Successfully deleted novel",
    pushPath: "/my-novels",
  });
};
