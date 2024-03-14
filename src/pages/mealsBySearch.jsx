import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMeals } from "../features/search/searchSlice";
import { Link, useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
const MealsBySearch = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id)dispatch(searchMeals(id));
  }, [dispatch,id]);

  const { searchData: { meals },searchLoading ,searchError} = useSelector(
    (state) => state.search
  );
  return (
    <>
      <div className="container bg-whitesmoke my-4 rounded">
        <div className="h-[100px]">
          <h2 className="text-3xl p-4">
            Meals <div className="h-[4px] w-[100px] bg-red-400 mt-2"></div>
          </h2>
        </div>
        {searchLoading ? (
          <div className="flex justify-center items-center h-64">
            <PacmanLoader color="#36d7b7" loading={searchLoading} size={45} />
          </div>
        ) : !meals ? (
          <div className="text-center text-red-600"><h2>No Recipe Found</h2></div>
        ) : (
          <div className="grid grid-cols-5">
            {meals &&
              meals?.map((meal, index) => (
                <Link
                  key={index}
                  to={`/meals/meal/${meal?.strMeal}`}
                  className="h-[300px] w-[240px] mx-2 my-4 bg-zinc-100 rounded flex flex-col justify-center"
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
      </div>
    </>
  );
};

export default MealsBySearch;
