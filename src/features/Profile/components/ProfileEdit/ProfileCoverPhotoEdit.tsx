
import { useUpdateCoverImage } from "@/services/profile";
import { Upload } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileCoverPhotoEdit = ({ coverImage }: { coverImage: string }) => {
  
  const { mutate } = useUpdateCoverImage();


  const updateCoverImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    mutate(formData);

  }

  return (
    <div className="bg-white p-6 rounded-md my-6 shadow-sm border border-gray-200">
      <p className="font-semibold text-xl">Cover Photo</p>
      <p className="text-sm text-gray-600 mt-1 mb-3">
        Upload a cover photo for your profile
      </p>
      <label htmlFor="imageInput" className="cursor-pointer">
        {coverImage ? (
          <Image
            src={coverImage}
            alt="cover"
            width={1000}
            height={1000}
            className="w-full object-center h-72 object-cover"
          />
        ) : (
          <div className="flex w-full mt-3 flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-16 cursor-pointer hover:bg-gray-50 transition">
            <Upload className="h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500">Upload a cover image</p>
            <p className="text-xs text-gray-400">JPEG, PNG, JPG up to 5MB</p>
          </div>
        )}
      </label>
      <input
        type="file"
        onChange={(e) => updateCoverImage(e)}
        id="imageInput"
        className="hidden"
        accept=".png, .jpg, .jpeg"
      />
    </div>
  );
};

export default ProfileCoverPhotoEdit;
