import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allMealsByCategory } from "../features/meal/mealsSlice.js";
import { Link, useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const Meals = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if(id)dispatch(allMealsByCategory(id));
  }, [dispatch,id]);
  // const { categoriesData } = useSelector((state) => state.recipes);
  // const categoriesArray = categoriesData.categories ?? [];

  const { categoriesData: { categories = [] } = {} } = useSelector(
    (state) => state.recipes
  );
  // useEffect(() => {},[]);
  const selectedCategory = categories.filter(
    (category) => category.strCategory === id
  );
  let storedCategory = JSON.parse(sessionStorage.getItem(id));
  if (!storedCategory) {
    sessionStorage.setItem(id, JSON.stringify(selectedCategory[0]));
    storedCategory = selectedCategory[0];
  }

  const {
    mealsByCategoryData: { meals },
    mealsByCategoryLoading,
  } = useSelector((state) => state.meals);

  return (
    <>
      <div className="container h-auto my-4 rounded bg-whitesmoke border-4 border-orange-400">
        <div className="text-orange-400">
          <h3 className="text-2xl">{storedCategory?.strCategory}</h3>
        </div>
        <p>{storedCategory?.strCategoryDescription}</p>
      </div>
      <div className="container bg-whitesmoke my-4 rounded">
        <div className="h-[100px]">
          <h2 className="text-3xl p-4">
            Meals <div className="h-[4px] w-[100px] bg-red-400 mt-2"></div>
          </h2>
        </div>
        {mealsByCategoryLoading ? (
          <div className="flex justify-center items-center h-64">
            <PacmanLoader
              color="#36d7b7"
              loading={mealsByCategoryLoading}
              size={35}
            />
          </div>
        ) : (
          <div className="grid grid-cols-5">
            {meals &&
              meals.map((meal, index) => (
                <Link
                  key={index}
                  to={`/meals/meal/${meal?.strMeal}`}
                  className="h-[300px] w-[240px] mx-2 my-4 bg-zinc-100 rounded flex flex-col justify-center hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring focus:bg-gray-300"
                >
                  <div className="pt-4">
                    <img
                      className="h-[190px] w-[200px] rounded m-auto"
                      src={meal?.strMealThumb}
                      alt={meal?.strMeal}
                    />
                  </div>
                  <div className="m-auto w-[210px] h-auto rounded justify-center bg-pink-400">
                    <p className="px-[3px] py-[3px] font-medium text-white">
                      {meal?.strMeal}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        )}
        ;
      </div>
    </>
  );
};

export default Meals;
