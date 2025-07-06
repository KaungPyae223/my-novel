import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React from "react";

const ProfileCoverPhotoEdit = () => {
  return (
    <div className="bg-white p-6 rounded-md my-6 shadow-sm border border-gray-200">
      <p className="font-semibold text-xl">Cover Photo</p>
      <p className="text-sm text-gray-600 mt-1">
        Upload a cover photo for your profile
      </p>
      <div className="flex w-full mt-3 flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-12 cursor-pointer hover:bg-gray-50 transition">
        <Upload className="h-8 w-8 text-gray-400" />
        <p className="text-sm text-gray-500">Upload a cover image</p>
        <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            className="cursor-pointer pointer-events-none"
          >
            Choose File
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCoverPhotoEdit;
