import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { GET_MOVIE_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  // const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      GET_MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
};

export default usePopularMovies;
