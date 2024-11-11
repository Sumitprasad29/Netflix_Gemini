import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { GET_MOVIE_OPTIONS } from "../utils/constants";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, seApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const videoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      GET_MOVIE_OPTIONS
    );
    const json = await data.json();
    if (json?.results?.length > 0) {
      const filterData = json.results.filter(
        (video) => video?.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      seApiData(trailer);
    } else {
      console.error("No video results found");
    }
  };

  useEffect(() => {
    videoTrailer();
  }, []);

  return (
    <div className="bg-black w-full h-screen flex flex-col items-center justify-center relative">
      <div className="absolute w-14 md:w-16 top-3 left-2.5 md:top-6 md:left-6">
        <img
          onClick={() => {
            navigate(-2);
          }}
          src={back_arrow_icon}
          alt="back arrow"
          className="md:w-14 md:h-14 cursor-pointer"
        />
      </div>

      <iframe
        className="border-none md:-mt-2 md:mb-2 mt-4"
        width="85%"
        height="85%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="flex justify-between items-center md:w-4/5 text-white text-sm md:text-lg font-medium md:mt-4">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
