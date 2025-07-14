
import { api, formApi } from "./api"; 
import { useMutate } from "./mutate";

const updateProfile = (data: any) => {
  return api.put("/profile", data);
};

const updateCoverImage = (formData: FormData) => {
  return formApi.post("/profile/upload-cover-image", formData);
};

const updateProfileImage = (formData: FormData) => {
  return formApi.post("/profile/upload-profile-image", formData);
};

export const useUpdateProfile = () => {
  
  return useMutate({
    mutationFn: updateProfile,
    queryKey: ["/profile"],
    successMessage: "Successfully update profile data",
    pushPath: "/profile",
  });
};

export const useUpdateCoverImage = () => {
  return useMutate({
    mutationFn: updateCoverImage,
    queryKey: ["/profile"],
    successMessage: "Successfully update cover image",
  });
};

export const useUpdateProfileImage = () => {
  return useMutate({
    mutationFn: updateProfileImage,
    queryKey: ["/profile"],
    successMessage: "Successfully update profile image",
  });
};
