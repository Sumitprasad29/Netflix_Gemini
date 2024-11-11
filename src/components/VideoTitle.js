import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-24 px-4 md:px-20 lg:pt-64 absolute text-white bg-gradient-to-r from-black w-full aspect-video z-5">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">{title}</h1>
      <p className="hidden sm:block md:inline-block py-4 sm:py-6 text-base sm:text-lg md:text-xl md:w-2/3 lg:w-1/3">
        {overview}
      </p>
      <div className="mt-6 flex gap-4">
        <button className="flex items-center bg-white text-black font-bold text-lg py-2 md:py-2.5 px-4 md:px-10 hover:bg-slate-300 cursor-pointer rounded-lg">
          <img
            src="https://miro.medium.com/v2/da:true/resize:fit:768/1*IDJ4x4E-bOypnEZdA5TGHQ.gif"
            alt="play"
            className="w-8 h-8 mr-2"
          />
          Play
        </button>
        <button className="hidden sm:block md:inline-block bg-gray-800 text-white text-lg md:text-xl font-bold py-2 md:py-3 px-4 md:px-10 hover:bg-slate-900 cursor-pointer rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
