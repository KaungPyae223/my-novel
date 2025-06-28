import { BookHeart, BookOpen, Eye, Heart, Save, Share, Star } from "lucide-react";
import React from "react";

const NovelIntro = () => {
  return (
    <div className="p-6 flex flex-row gap-6 bg-white shadow border border-gray-200 rounded-lg">
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
              icon={<Heart className="size-4" />}
              text="Love"
            />
            <ActionButton
              icon={<Share className="size-4" />}
              text="Share"
            />
            <ActionButton
              icon={<Star className="size-4" />}
              text="Favorite"
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
            <BookOpen className="size-4" />
            25 Chapters
          </div>
          <div className="flex flex-row  items-center gap-1.5  ">
            <Eye className="size-4" />
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
