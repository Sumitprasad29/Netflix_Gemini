import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-36 px-5 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayMovies}
          />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
          {/* Movielist - popular
       Movielist - now playing
        Movielist - trending
         Movielist - gnere */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
