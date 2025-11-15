import { Camera } from "lucide-react";
import React from "react";
import { useUpdateProfileImage } from "@/services/profile";
import Image from "next/image";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { avatarFallback } from "@/utils/avatarFallBack";

const ProfileImageEdit = ({
  profileImage,
  fullName,
}: {
  profileImage: string;
  fullName: string;
}) => {
  const { mutate } = useUpdateProfileImage();

  const updateProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    toast.loading("Updating profile image...");

    mutate(formData);
  };

  return (
    <div className=" flex flex-col items-center">

      <Avatar className="w-28 h-28">
        <AvatarImage className="w-28 h-28" src={profileImage} alt={fullName} />
        <AvatarFallback className="w-28 h-28 text-3xl flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
          {avatarFallback(fullName)}
        </AvatarFallback>
      </Avatar>

      

      <label htmlFor="profileImageInput">
        <div className="flex mt-4 bg-gray-200 py-2 px-4 w-fit items-center justify-center gap-3 text-sm text-gray-700 font-semibold rounded-sm">
          <Camera className="size-4" /> Change Photo
        </div>
      </label>
      <input
        type="file"
        onChange={(e) => updateProfileImage(e)}
        id="profileImageInput"
        className="hidden"
        accept=".png, .jpg, .jpeg"
      />
      <p className="text-xs mt-2  text-gray-500">PNG, JPG up to 5MB</p>
    </div>
  );
};

export default ProfileImageEdit;
