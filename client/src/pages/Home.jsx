import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Component() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch("/api/recipe/getRecipes");
      const data = await res.json();
      setRecipes(data.recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="bg-gray-100">
      <section className="py-12 lg:py-24">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:grid-cols-2 xl:gap-10 xl:px-8">
          <div className="space-y-4 lg:order-last">
            <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl/none dark:text-black text-black">
              Discover, cook, and share your favorite recipes
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              The all-in-one recipe app for home cooks. Discover new recipes,
              plan your meals, and create your wish list with a tap.
            </p>
            <Link
              to="/sign-in"
              className="inline-flex items-center rounded-md border-gray-200 bg-orange-500 px-6 text-xl font-medium shadow-sm transition-colors hover:bg-orange-400 text-white dark:border-gray-800 dark:hover:bg-orange-400 dark:hover:text-white dark:focus-visible:ring-gray-300 py-3"
            >
              Get started
            </Link>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom lg:aspect-square"
            height="320"
            src="https://i.quotev.com/rfuokl5dlurq.jpg"
            width="600"
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {recipes && recipes.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-center dark:text-black">
              Featured Recipes
            </h2>
            <div className="flex flex-wrap gap-4">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all Recipes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
