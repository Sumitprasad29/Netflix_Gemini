export const GET_MOVIE_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const GET_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
