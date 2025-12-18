"use client";
import React from "react";
import ProfileCoverPhotoEdit from "../components/ProfileEdit/ProfileCoverPhotoEdit";
import ProfileEditForm from "../components/ProfileEdit/ProfileEditForm";
import useFetchData from "@/services/fetcher";
import Loading from "@/features/Components/Loading/Loading";

const ProfileEditPage = () => {
  const { data, isLoading, error } = useFetchData("/profile");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  return (
      <div className="max-w-4xl my-9 w-full mx-auto px-4">
        <p className="font-semibold text-3xl">Edit Profile</p>
        <p className="text-gray-600 mt-3">
          Update your profile information and preferences.
        </p>
        <ProfileCoverPhotoEdit coverImage={data?.user?.cover_image} />
        <ProfileEditForm data={data?.user} />
      </div>
  );
};

export default ProfileEditPage;
