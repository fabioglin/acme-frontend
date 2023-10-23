import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface MovieState {
  data: Movie | null;
  loading: boolean;
  error: string | null;
}

export interface Movie {
  title: string;
  year: string;
  genre: string;
  poster: string;
}

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchMovie = createAsyncThunk<Movie, { title: string }>(
  "movie/fetchMovie",
  async ({ title }) => {
    const response = await fetch(`http://localhost:3000/search?title=${title}`);
    if (response.status === 404) {
      return Promise.reject("Movie not Found");
    }
    const data = await response.json();
    return data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearMovieData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
export const { clearMovieData } = movieSlice.actions;
