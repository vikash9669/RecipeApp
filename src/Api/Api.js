import  axios  from 'axios';
const URL = "https://www.themealdb.com/api/json/v1/1/";

const getAllCategoriesApi = async () => {
    const response = await axios
      .get(`${URL}categories.php`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
    return response;
  };

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
//   www.themealdb.com/api/json/v1/1/categories.php

const getMeals = async (searchQuery) => {
  // console.log("----------------------------------")
  const response = await axios
  .get(`${URL}search.php?s=${searchQuery}`)
  .then((res) =>{
    return res.data;
  })
  .catch((err) =>{
    throw new Error(err);
  })
  return response;
}
const getMealsByCategoryApi = async (searchQuery) => {
  // console.log("-----------=-=-==-=-=-----")
  const response = await axios
  .get(`${URL}filter.php?c=${searchQuery}`)
  .then((res) =>{
    return res.data;
  })
  .catch((err) =>{
    throw new Error(err);
  })
  return response;
}
export { getAllCategoriesApi, getMealsByCategoryApi, getMeals};