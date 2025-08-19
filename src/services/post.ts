import { api, formApi } from "./api";
import { useMutate } from "./mutate";

const createNovelPost = (formData: FormData) => {
  return formApi.post(
    `/novels/create-post/${formData.get("novel_id")}`,
    formData
  );
};

const updatePost = (formData: FormData) => {
  return formApi.post(`/posts/${formData.get("post_id")}`, formData);
};

const deletePost = (postId: string) => {
  return api.delete(`/posts/${postId}`);
};

export const useCreateNovelPost = ({ novelId }: { novelId: string }) => {
  return useMutate({
    mutationFn: createNovelPost,
    queryKey: [`/novels/posts/${novelId}`],
    successMessage: "Successfully created novel post",
  });
};

export const useDeletePost = ({ novelId }: { novelId: string }) => {
  return useMutate({
    mutationFn: deletePost,
    queryKey: [`/novels/posts/${novelId}`],
    successMessage: "Successfully deleted post",
  });
};

export const useUpdatePost = ({ novelId }: { novelId: string }) => {
  return useMutate({
    mutationFn: updatePost,
    queryKey: [`/novels/posts/${novelId}`],
    successMessage: "Successfully updated post",
  });
};
