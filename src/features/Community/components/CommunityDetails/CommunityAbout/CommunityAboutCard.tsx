import React from "react";

const CommunityAboutCard = () => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 shadow-xs rounded-lg">
      <p className="text-xl font-semibold">About Fantasy Lovers </p>
      <p className="font-medium text-lg mt-7">Description</p>
      <p className="text-gray-600 mt-3 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi magnam
        libero culpa assumenda soluta, maiores obcaecati tempora quo minima?
        Placeat nam numquam neque deleniti asperiores porro quae, modi ex
        voluptates quibusdam, obcaecati, quis quod saepe itaque corrupti
        distinctio amet illum.
      </p>
      <p className="font-medium text-lg mt-7">Community Rules</p>
      <div className="text-gray-700 space-y-2  mt-3 text-justify">
        <div className="flex flex-row items-center gap-2">
            <span className=" ">1.</span>
            <p>Respect other members</p>
        </div>
        <div className="flex flex-row items-center gap-2">
            <span className=" ">2.</span>
            <p>Respect other members</p>
        </div>
        <div className="flex flex-row items-center gap-2">
            <span className=" ">3.</span>
            <p>Respect other members</p>
        </div>
      </div>
      <p className="font-medium text-lg mt-7">Created by</p>
      <div className="flex flex-row items-center gap-2 mt-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          alt=""
          className="size-10 rounded-full"
        />
        <p className="font-medium ms-1 text-lg">Lourics Chan</p>
      </div>

    </div>
  );
};

export default CommunityAboutCard;
