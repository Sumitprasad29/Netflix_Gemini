import React, { useRef } from "react";
import axios from "axios";
import { GET_MOVIE_OPTIONS, OPENAI_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      GET_MOVIE_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const aiQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of good 5 movies, comma seperated like the example given ahead. Example result : Titanic, Gadar, Avengers, Venom, Don";
    const gptResults = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${OPENAI_API_KEY}`,
      method: "post",
      data: { contents: [{ parts: [{ text: aiQuery }] }] },
    });
    const textResult =
      gptResults.data?.candidates[0]?.content?.parts[0]?.text.split(",");

    const promiseArray = textResult.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: textResult, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-20 md:pt-40 flex justify-center">
      <form
        className="w-11/12 sm:w-3/4 md:w-1/2 bg-black grid grid-cols-12 gap-2 p-4 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Search your favorite movies"
          className="col-span-8 md:col-span-9 p-2 rounded-md text-black"
        />
        <button
          className="col-span-4 md:col-span-3 px-4 py-2 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
