import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { GET_MOVIE_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideo = async () => {
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
  };

  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
