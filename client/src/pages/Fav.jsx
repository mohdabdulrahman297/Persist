import React, { useState, useEffect } from "react";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";

function Fav({ recipe }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await fetch("/api/saved/get");
        if (response.ok) {
          const savedRecipes = await response.json();
          setFavourites(savedRecipes);
        } else {
          console.error("Failed to fetch saved recipes");
        }
      } catch (error) {
        console.error("Error fetching saved recipes:", error.message);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      <h2>Your Favourites</h2>
      <div className="grid grid-cols-3 gap-6">
        {favourites.length === 0 ? (
          <p>No recipes saved in favourites yet.</p>
        ) : (
          favourites.map((savedRecipe, index) => (
            <div
              key={index}
              className="group relative border border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all"
            >
              <img
                src={savedRecipe.savedImage}
                alt="saved recipe image"
                className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
              />
              <div className="p-3 flex flex-col gap-2">
                <div className="flex items-center gap-20 mb-2">
                  <p className="text-lg font-semibold line-clamp-2">
                    {savedRecipe.savedName}
                  </p>
                  <div className="flex items-center gap-2"></div>
                </div>
                <span className="italic text-sm">
                  {savedRecipe.savedCategory}
                </span>
                <Link
                  to="/"
                  className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-orange-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
                >
                  Explore more
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Fav;
