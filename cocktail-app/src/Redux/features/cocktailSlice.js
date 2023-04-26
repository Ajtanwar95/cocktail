import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "cocktails/fetchData", //ye action h
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    ).then((res) => res.json());
  }
);
export const fetchSingleCocktails = createAsyncThunk(
  "cocktails/fetchSignleCocktails",
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);
export const fetchSearchCocktails = createAsyncThunk(
  "cocktails/fetchSearchCocktails",
  async ({ searchText }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    ).then((res) => res.json());
  }
);
const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    cocktail: [],
    error: null,
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload; //error update ho jAye ga
    },
    [fetchSingleCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSearchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default cocktailSlice.reducer;
