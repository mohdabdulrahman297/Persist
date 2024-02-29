import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashRecipe() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRecipes, setUserRecipes] = useState([]);
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `/api/recipe/getRecipes?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserRecipes(data.recipes);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser) {
      fetchRecipes();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userRecipes.length;
    try {
      const res = await fetch(
        `/api/recipe/getRecipes?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserRecipes((prev) => [...prev, ...data.recipes]);
        if (data.recipes.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser && userRecipes.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Recipe image</Table.HeadCell>
              <Table.HeadCell>Recipe title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userRecipes.map((recipe) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(recipe.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/recipe/${recipe.slug}`}>
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/recipe/${recipe.slug}`}
                    >
                      {recipe.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{recipe.category}</Table.Cell>
                  <Table.Cell>
                    <span className="font-medium text-red-500 hover:underline cursor-pointer">
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-recipe/${recipe._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have not posted any recipes !</p>
      )}
    </div>
  );
}
