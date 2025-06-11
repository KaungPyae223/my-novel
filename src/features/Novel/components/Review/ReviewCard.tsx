import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex flex-row gap-4 pb-6 border-b border-gray-200 last:border-b-0">
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      <div>
        <p className="font-medium font-poppins">John Doe</p>
        <div className="flex flex-row items-center text-gray-500 mt-0.5 gap-1 text-xs">
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

          <p>4h ago</p>
        </div>
        <p className="mt-3 text-gray-700 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          odio itaque corporis corrupti commodi odit numquam in nesciunt
          similique! Perspiciatis molestiae nihil aut quia alias dignissimos
          corrupti incidunt veritatis nesciunt beatae, itaque, dicta temporibus
          eveniet cupiditate magni! Velit alias sint amet provident voluptate
          eum distinctio quisquam aliquam dolores modi soluta maiores
          repudiandae, error iste delectus aperiam perspiciatis corrupti,
          cupiditate officia inventore sequi? Alias ex, assumenda libero,
          excepturi unde magni, perspiciatis aspernatur quaerat exercitationem
          quisquam impedit eveniet quos non sapiente ab!
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
