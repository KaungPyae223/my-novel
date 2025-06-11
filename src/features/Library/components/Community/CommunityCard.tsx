import React from "react";

const CommunityCard = () => {
  return (
    <div className="w-full p-4 py-6 bg-white rounded-md shadow border border-gray-200">
      <p className="font-semibold  text-xl">The King of Fire</p>
      <p className="text-xs font-mono mt-1.5 text-gray-600">@TheKingOfFire</p>
      <div className=" font-medium rounded-full border border-gray-300 px-3 my-3 py-0.5 w-fit text-xs text-gray-900">
        Book Club
      </div>
      <p className="text-sm text-gray-700 text-justify line-clamp-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi magnam
        libero culpa assumenda soluta, maiores obcaecati tempora quo minima?
        Placeat nam numquam neque deleniti asperiores porro quae, modi ex
        voluptates quibusdam, obcaecati, quis quod saepe itaque corrupti
        distinctio amet illum.
      </p>
      <div className="bg-pink-50/80 flex flex-row items-center gap-4 p-2 my-3 mt-4 rounded-sm">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          alt=""
        />
        <div>
          <div className="flex text-xs flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-3 text-yellow-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            Community Leader
          </div>
          <p className="font-semibold mt-1">Lourics Chan</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 my-6 ">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-sm font-semibold">100</p>
          <p className=" text-xs text-gray-600">Members</p>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-sm font-semibold">100</p>
          <p className=" text-xs text-gray-600">Posts</p>
        </div>
      </div>
      <div className="flex text-xs text-gray-600 mb-3 mt-1.5 flex-row items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p>Active 2h ago</p>
      </div>

      <div className="bg-gray-800 text-center text-sm text-white px-3 py-2 rounded font-medium cursor-pointer">
        Join Community
      </div>
    </div>
  );
};

export default CommunityCard;
