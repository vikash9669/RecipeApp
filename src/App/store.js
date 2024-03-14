import {configureStore} from '@reduxjs/toolkit';
import  categorySlice  from '../features/category/categorySlice';
import mealSlice from '../features/meal/mealSlice';
import searchSlice from '../features/search/searchSlice';
import mealsSlice from '../features/meal/mealsSlice';
const store = configureStore({
    reducer:{
        recipes:categorySlice,
        singleMeal:mealSlice,
        meals:mealsSlice,
        search:searchSlice
    },
});
export default store;