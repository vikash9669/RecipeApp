import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { meal } from "../features/meal/mealSlice";
import Category from "./category";
import PacmanLoader from "react-spinners/PacmanLoader";

const Meal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    mealData: { meals },
    mealLoading,
  } = useSelector((state) => state.singleMeal);
  const [ingredients, setIngredients] = useState([]);
  const [Instructions, setInstructions] = useState([]);

  useEffect(() => {
    if (id) dispatch(meal(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (meals?.length) {
      const newIngredients = [];

      if (meals?.[0]) {
        for (let i = 1; i <= 20; i++) {
          const ingredient = meals?.[0][`strIngredient${i}`];
          const measure = meals?.[0][`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            newIngredients.push({ ingredient, measure });
          }
        }
      }
      const Instructions = meals?.[0] && meals?.[0].strInstructions.split(". ");
      setIngredients(newIngredients);
      setInstructions(Instructions);
    }
  }, [meals]);

  return (
    <div className="container whitesmoke my-4 rounded">
      <div className="h-[100px]">
        <h2 className="p-4 text-3xl">
          Meal Details <div className="h-[4px] w-[100px] bg-red-400 mt-2"></div>
        </h2>
      </div>
      {mealLoading ? (
        <div className="flex justify-center items-center h-64">
          <PacmanLoader color="#36d7b7" loading={mealLoading} size={35} />
        </div>
      ) : (
        <>
          <div className="m-auto bg-white flex border h-full w-full ">
            <div className="w-1/2 ">
              <img
                className="px-8 py-8"
                src={meals?.[0]?.strMealThumb}
                alt=""
              />
            </div>
            <div className="w-1/2 mx-2">
              <h2 className="pt-8 text-3xl">
                {meals?.[0]?.strMeal}{" "}
                <div className="h-[4px] w-cover bg-red-400 mt-2"></div>
              </h2>
              <h3 className="text-3xl my-4 flex">
                Category:<p className="font-thin">{meals?.[0]?.strCategory}</p>{" "}
              </h3>
              <div className="flex flex-column bg-orange-500  h-auto w-full">
                <div className="text-white mx-4 my-4">
                  <h3 className="text-bold">Ingredients</h3>
                </div>
                <div className="grid grid-cols-3 gap-4  h-auto w-full mx-4 my-4">
                  {ingredients.length &&
                    ingredients.map((item, index) => (
                      <div key={index} className="text-white">
                        <div className="flex">
                          <div className="h-6 w-6 bg-green-950 object-center">
                            <p className="px-2">{index + 1}</p>
                          </div>
                          <p className="pl-2 font-semibold">
                            {item.ingredient}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container flex flex-col h-auto my-4 bg-whitesmoke border  ">
            <div className="text-black my-4 mx-4">
              <h3>Measure:</h3>
            </div>
            <div className="grid grid-cols-3 gap-4  h-auto w-full mx-4 my-4">
              {ingredients.length &&
                ingredients.map((item, index) => (
                  <div key={index} className="text-white">
                    <div className="flex">
                      <div className="h-6 w-6 bg-green-950 object-center">
                        <p className="px-2">{index + 1}</p>
                      </div>
                      <p className="pl-2 text-black font-semibold">
                        {item.measure}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="container flex flex-col h-auto my-4 bg-whitesmoke border  ">
            <div className="text-black my-4 mx-4">
              <h3>Instructions:</h3>
            </div>
            {Instructions.length &&
              Instructions.map((item, index) => (
                <div className="flex mx-4 my-2 ">
                  <div className="h-8 w-8 bg-green-950 text-white">
                    <p className="px-2">{index + 1}</p>
                  </div>
                  <p className="px-4 font-semibold">{item}</p>
                </div>
              ))}
          </div>
          <Category />
        </>
      )}
      ;
    </div>
  );
};

export default Meal;
