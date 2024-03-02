import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

export default function YourComponent() {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipeIds, setSavedRecipeIds] = useState([]);

  useEffect(() => {
    // Fetch recipes or set your recipes state
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipe/getRecipes");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
      }
    };

    fetchRecipes();
  }, []); // Run this effect only once on component mount

  const handleSaveToggle = async (recipeId) => {
    try {
      const response = await fetch(`/api/recipe/saveRecipe`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipeId,
          userId,
        }),
      });

      if (response.ok) {
        // Update the savedRecipeIds state to trigger a re-render
        setSavedRecipeIds((prevIds) =>
          prevIds.includes(recipeId)
            ? prevIds.filter((id) => id !== recipeId)
            : [...prevIds, recipeId]
        );
      } else {
        console.error("Failed to save recipe:", response.status);
      }
    } catch (error) {
      console.error("Error saving recipe:", error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center dark:text-black">
          Your Favourites
        </h2>
        <div className="flex flex-wrap gap-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              onSaveToggle={handleSaveToggle}
              isSaved={savedRecipeIds.includes(recipe._id)}
            />
          ))}
        </div>
        <Link
          to={"/create-recipe"}
          className="text-lg text-teal-500 hover:underline text-center"
        >
          Let's create
        </Link>
      </div>
    </div>
  );
}
