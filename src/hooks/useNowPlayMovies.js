import { useEffect } from "react";
import { GET_MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../utils/movieSlice";

const useNowPlayMovies = () => {
  const dispatch = useDispatch();
  // const nowPlayMovies = useSelector((store) => store.movies.nowPlayMovies);
  const getMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      GET_MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayMovies(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);
};

export default useNowPlayMovies;
