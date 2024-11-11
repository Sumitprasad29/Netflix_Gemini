import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addupcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
