import { Camera } from "lucide-react";
import React from "react";
import { useUpdateProfileImage } from "@/services/profile";
import Image from "next/image";
import { toast } from "sonner";

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
      <Image
        src={
          profileImage ||
          `https://api.dicebear.com/8.x/initials/png?seed=${encodeURIComponent(
            fullName
          )}`
        }
        alt=""
        width={100}
        height={100}
        className="size-28 rounded-full"
      />

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
