const NovelReference = () => {
  return (
    <div className="p-3 h-48 flex flex-row items-start gap-4 mb-6 rounded-lg bg-amber-50 border border-amber-300">
      <img
        className="w-32 h-full object-cover rounded-lg items-center"
        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop"
        alt=""
      />
      <div className="flex-1 h-full flex flex-col">
        <div className="flex flex-row items-center gap-1.5">
          <p className="font-medium text-xl font-poppins">The Willing</p>
          <p className="text-xs bg-white rounded-full border border-gray-300 px-2 py-0.5 font-medium text-gray-800">
            Sci-Fi
          </p>
          <span className="px-2 py-0.5 rounded-full text-xs text-gray-600 bg-gray-200">
            Complete
          </span>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-3 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          autem quasi repellat. Odit, neque placeat architecto facere atque
          temporibus saepe libero doloremque! Maiores numquam veniam saepe
          molestiae eligendi recusandae cumque cupiditate aliquam at illo
          incidunt, culpa deserunt. Maxime rem officia voluptate dicta. Ex
          distinctio, dolorem dolore natus aspernatur dolorum aliquam.
        </p>
        <div className="mt-auto pt-4">
          <div className="flex flex-row items-center text-gray-800 gap-1 text-xs">
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
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <p>24 Chapters</p>
          </div>

          <div className="mt-2 text-center bg-amber-600 py-2 rounded-lg text-sm text-white font-medium cursor-pointer">
            Read Novel{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelReference;
