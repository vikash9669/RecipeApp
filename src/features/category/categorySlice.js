import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategoriesApi } from "../../Api/Api";

export const allCategories = createAsyncThunk("recipes/allCategories",
  async (_, thunkAPI) => {
    try {
      const response = await getAllCategoriesApi();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  categoriesData: [],
  categoriesLoading: false,
  categoriesSuccess: null,
  categoriesError: null,
};

export const categorySlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(allCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesData = action.payload;
        state.categoriesSuccess = true;
      })
      .addCase(allCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesError = action.error;
      });
  },
 
});
// export const {getCategories} = categorySlice.actions;

export default categorySlice.reducer