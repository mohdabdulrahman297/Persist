import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md";
import { IoMdShare } from "react-icons/io";

export default function RecipeCard({
  recipe,
  onSaveToggle,
  onRemoveToggle,
  isSaved,
}) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: recipe.title,
          text: recipe.title,
          url: window.location.href,
        });
      } else {
        // Fallback behavior if navigator.share is not available
        // You can implement your own custom share UI or provide a link to copy the URL
        console.log("Sharing not supported, implement your custom share UI");
      }
    } catch (error) {
      console.error("Error sharing recipe:", error.message);
    }
  };

  return (
    <div className="group relative w-full border border-teal-500 hover:border-2 h-[350px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <Link to={`/recipe/${recipe.slug}`}>
        <img
          src={recipe.image}
          alt="recipe cover"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center gap-20">
          <p className="text-lg font-semibold line-clamp-2 dark:text-black">
            {recipe.title}
          </p>
          {isSaved ? (
            <MdOutlineBookmarkRemove
              onClick={() => onRemoveToggle(recipe._id)}
              className="cursor-pointer size-5 dark:text-black hover:opacity-45"
            />
          ) : (
            <MdOutlineBookmarkAdd
              onClick={() => onSaveToggle(recipe._id)}
              className="cursor-pointer size-5 dark:text-black hover:opacity-45"
            />
          )}
          <IoMdShare
            onClick={handleShare}
            className="cursor-pointer size-5 hover:opacity-45 dark:text-black"
          />
        </div>
        <span className="italic text-sm mb-2 dark:text-black">
          {recipe.category}
        </span>
        <Link
          to={`/recipe/${recipe.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-orange-500 text-teal-500 hover:bg-orange-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}
