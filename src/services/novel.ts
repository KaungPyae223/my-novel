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

const novelReview = (reviewData: any) => {
  return api.post(`reviews`, reviewData);
};

const toggleFanLetter = (novelID: string) => {
  return api.put(`novels/toggle-fan-letter/${novelID}`);
};

const replyFanLetter = (replyData: any) => {
  return api.put(`novels/reply-letter/${replyData.id}`, replyData);
};

const deleteAuthorFanLetter = (id: string) => {
  return api.delete(`novels/author/delete-letter/${id}`);
};

const deleteReaderFanLetter = (id: string) => {
  return api.delete(`novels/reader/delete-letter/${id}`);
};

const writeFanLetter = (letterData: any) => {
  return api.post(`novels/create-letter/${letterData.novelID}`, letterData);
};



export const useWriteFanLetter = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: writeFanLetter,
    queryKey: [`reader-letter-${novelID}`],
  });
};

export const useDeleteAuthorFanLetter = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: deleteAuthorFanLetter,
    queryKey: [`letters-${novelID}`],
  });
};

export const useDeleteReaderFanLetter = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: deleteReaderFanLetter,
    queryKey: [`reader-letter-${novelID}`],
  });
};

export const useReplyFanLetter = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: replyFanLetter,
    queryKey: [`letters-${novelID}`],
  });
};

export const useToggleFanLetter = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: toggleFanLetter,
    queryKey: [`novels/fan-letter-status/${novelID}`],
  });
};

export const useNovelReview = ({ novelID }: { novelID: string }) => {
  return useMutate({
    mutationFn: novelReview,
    queryKey: [`review-${novelID}`],
  });
};

export const useShareNovel = () => {
  return useMutate({
    mutationFn: shareNovel,
    queryKey: [],
    successMessage: "Copy Novel Link Successfully",
  });
};

export const useNovelLoved = () => {
  return useMutate({
    mutationFn: novelLoved,
    queryKey: [],
    successMessage: "",
  });
};

export const useNovelFavorite = () => {
  return useMutate({
    mutationFn: novelFavorite,
    queryKey: [],
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
