import { useDispatch } from "react-redux";
import { GET_MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  // const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      GET_MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopRatedMovies;
