"use client";
import React from "react";
import ProfileCoverPhotoEdit from "../components/ProfileEdit/ProfileCoverPhotoEdit";
import ProfileEditForm from "../components/ProfileEdit/ProfileEditForm";

const ProfileEditPage = () => {
  return (
    <div className="max-w-4xl my-9 w-full mx-auto px-4">
      <p className="font-semibold text-3xl">Edit Profile</p>
      <p className="text-gray-600 mt-3">
        Update your profile information and preferences.
      </p>
      <ProfileCoverPhotoEdit />
      <ProfileEditForm />
    </div>
  );
};

export default ProfileEditPage;
