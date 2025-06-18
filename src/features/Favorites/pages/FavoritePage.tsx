import React from "react";
import FavoritesSearch from "../components/FavoritesSearch";
import FavoritesCard from "../components/FavoritesCard";

const FavoritePage = () => {
  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">Favorites</p>
      <p className="text-gray-600 mt-3">
        Your collection of favorite novels - 4 novels saved
      </p>
      <FavoritesSearch />
      <div className="mt-6 grid grid-cols-3 gap-5">
        <FavoritesCard/>
        <FavoritesCard/>
        <FavoritesCard/>
        <FavoritesCard/>
        <FavoritesCard/>
        <FavoritesCard/>
        <FavoritesCard/>
        <FavoritesCard/>

      </div>
    </div>
  );
};

export default FavoritePage;
