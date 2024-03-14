import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMeals, getMealsByCategoryApi } from "../../Api/Api";

export const allMeals = createAsyncThunk(
  "meals/allMeals",
  async (searchQuery, thunkAPI) => {
    try {
      const response = await getMeals(searchQuery);
      console.log("hello");

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const allMealsByCategory = createAsyncThunk(
  "meals/allMealsByCategory",
  async (searchQuery, thunkAPI) => {
    try {
      const response = await getMealsByCategoryApi(searchQuery);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  mealsData: [],
  mealsLoading: false,
  mealsSuccess: null,
  mealsError: null,

  mealsByCategoryData: [],
  mealsByCategoryLoading: false,
  mealsByCategorySuccess: null,
  mealsByCategoryError: null,
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(allMeals.pending, (state) => {
        state.mealsLoading = true;
      })
      .addCase(allMeals.fulfilled, (state, action) => {
        state.mealsLoading = false;
        state.mealsData = action.payload;
        state.mealsSuccess = true;
      })
      .addCase(allMeals.rejected, (state, action) => {
        state.mealsLoading = false;
        state.mealsError = action.error;
      })

      .addCase(allMealsByCategory.pending, (state) => {
        state.mealsByCategoryLoading = true;
      })
      .addCase(allMealsByCategory.fulfilled, (state, action) => {
        state.mealsByCategoryLoading = false;
        state.mealsByCategoryData = action.payload;
        state.mealsByCategorySuccess = true;
      })
      .addCase(allMealsByCategory.rejected, (state, action) => {
        state.mealsByCategoryLoading = false;
        state.mealsByCategoryError = action.error;
      });
  },
});
// export const { getmeals, getMealsByCategory } = mealsSlice.actions;

export default mealsSlice.reducer;
