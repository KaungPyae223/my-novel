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

const postLoved = (postId: string) => {
  return api.post(`/posts/loved/${postId}`);
};

export const usePostLoved = () => {
  return useMutate({
    mutationFn: postLoved,
    queryKey: [],
    successMessage: "",
  });
};

export const useCreateNovelPost = ({ novelId }: { novelId: string }) => {
  return useMutate({
    mutationFn: createNovelPost,
    queryKey: [`post-${novelId}`],
    successMessage: "Successfully created novel post",
  });
};

export const useDeletePost = ({ novelId }: { novelId: string }) => {
  return useMutate({
    mutationFn: deletePost,
    queryKey: [`post-${novelId}`],
    successMessage: "Successfully deleted post",
  });
};

export const useUpdatePost = ({ novelId }: { novelId: string }) => {
  return useMutate({
    mutationFn: updatePost,
    queryKey: [`post-${novelId}`],
    successMessage: "Successfully updated post",
  });
};
