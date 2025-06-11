import React from "react";

const FollowingAuthorCard = () => {
  return (
    <div className="w-full bg-white shadow border border-gray-200 rounded-lg p-4">
      <div className="flex flex-row items-center gap-5">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-xl font-poppins">John Doe</p>
          <p className="text-xs font-mono  text-gray-500">@jhon_doe_0123344</p>
          <div className="mt-2 text-sm text-gray-500 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              12.4k
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              12.5k
            </div>
          </div>
        </div>
      </div>
      <p className="my-3 text-sm text-gray-600 line-clamp-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea alias
        facere expedita odio enim, laborum quasi optio, numquam reiciendis
        inventore, dolorem veniam officiis? Veritatis at sed quod quaerat
        distinctio laborum necessitatibus aliquam, excepturi officiis quidem.
        Ullam ab accusamus iste eligendi.
      </p>
      <div className="flex mt-5 items-center text-sm text-gray-700 justify-between gap-2">
        <p>Novel Published:</p>
        <p className="font-semibold text-gray-800">10</p>
      </div>
      <div className="flex mt-2 mb-5 items-center text-sm text-gray-700 justify-between gap-2">
        <p>Latest Novel:</p>
        <p className="font-semibold text-blue-800">The Arrorow and the green</p>
      </div>
      <hr className="border-gray-200" />
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="flex items-center text-sm font-semibold cursor-pointer justify-center gap-2 rounded-md bg-blue-500 text-white px-2 py-2">Following</div>
        <div className=" text-blue-800 border text-sm cursor-pointer border-blue-300 px-2 py-2 rounded-lg flex items-center justify-center">View Profile</div>

      </div>
    </div>
  );
};

export default FollowingAuthorCard;
