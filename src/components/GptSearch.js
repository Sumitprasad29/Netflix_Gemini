import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import Search_tab_img from ".././assets/Search_tab_img.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-full"
          src={Search_tab_img}
          alt="bg-logo"
        />
      </div>
      <div className="pt-[25%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
