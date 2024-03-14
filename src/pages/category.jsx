import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allCategories } from "../features/category/categorySlice.js";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const Category = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCategories());
  }, []);

  const {
    categoriesData: { categories = [] },
    categoriesLoading,
  } = useSelector((state) => state.recipes);

  return (
    <div className="container bg-whitesmoke my-4 rounded">
      <div className="h-[100px]">
        <h2 className="text-3xl p-4">
          CATEGORIES <div className="h-[4px] w-[100px] bg-red-400 mt-2"></div>
        </h2>
      </div>
      {categoriesLoading ? (
        <div className="flex justify-center items-center h-64">
          <PacmanLoader color="#36d7b7" loading={categoriesLoading} size={35} />
        </div>
      ) : (
        <div className="grid grid-cols-5">
          {categories &&
            categories.map((category, index) => (
              <Link
                key={index}
                to={`/meals/${category.strCategory}`}
                className="h-[220px] w-[220px] mx-2 my-4 bg-zinc-100 rounded"
              >
                <div className="pt-8">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                </div>
                <div className="mx-2 h-8 justify-center badge badge-secondary">
                  <h3 className="pb-2">{category.strCategory}</h3>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
