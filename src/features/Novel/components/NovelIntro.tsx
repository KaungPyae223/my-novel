import React from "react";

const NovelIntro = () => {
  return (
    <div className="p-6 flex flex-row gap-6 shadow border border-gray-200 rounded-lg">
      <div>
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop"
          alt=""
          className="w-56 h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <p className="font-semibold text-3xl font-poppins">The Willing</p>
            <div className="rounded-full text-sm px-3 py-0.5  bg-blue-100 text-blue-800 font-medium">
              Sci-Fi
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <ActionButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              }
              text="Like"
            />
            <ActionButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              }
              text="Share"
            />
            <ActionButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              }
              text="Save"
            />
          </div>
        </div>
        <p className="text-gray-500 mt-2">by Louisa May Alcott</p>
        <div className="mt-3 flex items-center gap-4">
          <div className="text-xs font-medium text-gray-700 bg-amber-100 px-3 py-0.5 border border-amber-300 rounded-full">
            On Going
          </div>
          <div className="text-sm font-medium flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            3.5k
          </div>
        </div>
        <div className="flex flex-row my-4 text-sm gap-4 text-gray-600 ">
          <div className="flex flex-row  items-center gap-1.5  ">
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
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            25 Chapters
          </div>
          <div className="flex flex-row  items-center gap-1.5  ">
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            3.5k Reads
          </div>
        </div>
        <p className="text-justify text-gray-800 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum minus
          ipsam distinctio suscipit molestiae facilis error mollitia, laboriosam
          eos architecto deserunt ullam omnis quasi reprehenderit aut nemo
          quidem repellendus maiores dolor quaerat. Alias sint natus odit
          assumenda expedita recusandae veritatis ducimus rem. Delectus dolore
          amet totam assumenda dolorem itaque maxime vitae repudiandae adipisci
          libero, dolores eveniet quibusdam illum, quia aspernatur quis
          accusantium praesentium! Sit, magni. Repellendus aliquam error
          eligendi illum. Molestias porro repudiandae eum ullam est! Tempore
          natus odit impedit nostrum cumque earum quis odio possimus deleniti
          fuga minima, pariatur asperiores corporis molestias laboriosam
          aspernatur rem sed? Incidunt, voluptatem consequuntur.
        </p>
        <div className="flex flex-row gap-2 mt-4">
          <GenreCard genre="Drama" />
          <GenreCard genre="Sci-Fi" />
          <GenreCard genre="Comendy" />
        </div>
      </div>
    </div>
  );
};

export default NovelIntro;

const GenreCard = ({ genre }: { genre: string }) => {
  return (
    <div className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 text-gray-600">
      {genre}
    </div>
  );
};

const ActionButton = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex text-gray-700 text-sm items-center gap-2 font-medium">
      {icon}
      {text}
    </div>
  );
};
