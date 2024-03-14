import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMeals } from "../../Api/Api";

export const meal = createAsyncThunk(
  "singleMeal/meal",
  async (searchQuery, thunkAPI) => {
    try {
      const response = await getMeals(searchQuery);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  mealData: [],
  mealLoading: false,
  mealSuccess: null,
  mealError: null,
};

export const mealSlice = createSlice({
  name: "singleMeal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(meal.pending, (state) => {
        state.mealLoading = true;
      })
      .addCase(meal.fulfilled, (state, action) => {
        state.mealLoading = false;
        state.mealData = action.payload;
        state.mealSuccess = true;
      })
      .addCase(meal.rejected, (state, action) => {
        state.mealLoading = false;
        state.mealError = action.error;
      });
  },
});
// export const { getMeal } = mealSlice.actions;

export default mealSlice.reducer;
