import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    const currentRef = cardsRef.current;
    currentRef.addEventListener("wheel", handleWheel);
    return () => currentRef.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="px-4">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div
        ref={cardsRef}
        className=" flex overflow-x-scroll scrollbar-hide space-x-4 "
      >
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                posterPath={movie.poster_path}
                name={movie.original_title}
              />
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
