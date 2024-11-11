import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_MOVIE_OPTIONS } from "../utils/constants";
import { addupcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  // const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      GET_MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addupcomingMovies(json.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useUpcomingMovies;
