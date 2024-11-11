import React from "react";
import { GET_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, name, id }) => {
  if (!posterPath) return null;
  return (
    <Link to={`/player/${id}`}>
      <div className="w-36 md:w-48 pr-3 hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="rounded-md shadow-lg w-full h-auto"
          src={GET_IMG_URL + posterPath}
          alt="Movie IMG"
        />
        <h1 className="text-white md:font-semibold mt-2 text-center font-medium">
          {name}
        </h1>
      </div>
    </Link>
  );
};

export default MovieCard;
