import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { GET_MOVIE_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideo = useCallback(async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        GET_MOVIE_OPTIONS
      );
      const json = await data.json();

      // Check if results are available
      if (json?.results?.length > 0) {
        const filterData = json.results.filter(
          (video) => video?.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
      } else {
        console.error("No video results found");
      }
    } catch (error) {
      console.error("Error fetching movie video:", error); // Log error to the console
    }
  }, [dispatch, movieId]); // Include movieId as a dependency

  useEffect(() => {
    getMoviesVideo();
  }, [getMoviesVideo]); // Include getMoviesVideo as a dependency
};

export default useMovieTrailer;
