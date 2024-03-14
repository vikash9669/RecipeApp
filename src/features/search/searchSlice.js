import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMeals } from "../../Api/Api"; 
export const searchMeals = createAsyncThunk(
  "search/searchMeals",
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
  searchData: [], 
  searchLoading: false,
  searchSuccess: null,
  searchError: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMeals.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(searchMeals.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchData = action.payload; 
        state.searchSuccess = true;
      })
      .addCase(searchMeals.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.error;
      });
  },
});

// export const { searchMeal } = searchSlice.actions; 

export default searchSlice.reducer;
