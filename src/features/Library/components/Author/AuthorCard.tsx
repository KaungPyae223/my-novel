import React from "react";

const AuthorCard = () => {
  return (
    <div className="w-full p-4 py-6 flex flex-col items-center justify-center overflow-hidden bg-white rounded-md shadow border border-gray-200">
      <div>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          alt=""
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>
      <p className="text-lg font-medium mt-3">John Doe</p>
      <p className="text-xs font-mono mt-1.5 text-gray-600">@Jhon1234</p>
      <div className="flex mt-1.5 flex-row items-center justify-center gap-1 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        2.3k
      </div>
      <p className="text-gray-700 text-sm mt-5 line-clamp-5 text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
        commodi praesentium aliquam, magnam veritatis ipsam laudantium eaque ex
        eius amet provident explicabo iusto reiciendis repellendus expedita
        asperiores ad dolores voluptatum! Tempore, odio distinctio? Sit eaque
        iusto asperiores deleniti numquam, voluptatibus voluptatem quia delectus
        iste distinctio, officia eligendi dignissimos aut consectetur?
      </p>
      <div className="grid grid-cols-2 w-full my-6 gap-3">
        <AuthorProperties label="Novels" value="30" />
        <AuthorProperties label="Completed" value="15" />
        <AuthorProperties label="Followers" value="1.2k" />
        <AuthorProperties label="Views" value="1.2M" />
      </div>
      <div className="w-full rounded-sm border text-sm font-medium text-center py-2 cursor-pointer border-gray-300">
        View Profile
      </div>
    </div>
  );
};

const AuthorProperties = ({
    label,
    value
    }:{
        label: string;
        value: string;
    }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-0.5 text-sm ">
            <p className="text-gray-900 font-medium">{value}</p>
            <p className="text-gray-600">{label}</p>
        </div>
    )
}

export default AuthorCard;
