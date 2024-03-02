import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export default function RecipePage() {
  const { recipeSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [recentRecipes, setRecentRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/recipe/getRecipes?slug=${recipeSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setRecipe(data.recipes[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [recipeSlug]);

  useEffect(() => {
    try {
      const fetchRecentRecipes = async () => {
        const res = await fetch(`/api/recipe/getRecipes?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentRecipes(data.recipes);
        }
      };
      fetchRecentRecipes();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Error fetching recipe</p>
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {recipe && recipe.title}
      </h1>
      <Link
        to={`/search?category=${recipe && recipe.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {recipe && recipe.category}
        </Button>
      </Link>
      <Link
        to={recipe.videoLink}
        className="mt-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative">
          <FaYoutube
            size={80}
            color="red"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
          <img
            src={recipe && recipe.image}
            alt={recipe && recipe.title}
            className="p-3 max-h-[600px] w-full object-cover cursor-pointer"
          />
        </div>
      </Link>
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{recipe && new Date(recipe.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {recipe &&
            recipe.content &&
            (recipe.content.length / 1000).toFixed(0)}{" "}
          mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full recipe-content"
        dangerouslySetInnerHTML={{ __html: recipe && recipe.content }}
      ></div>
    </main>
  );
}
