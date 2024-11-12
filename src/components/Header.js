import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import profile_img from ".././assets/profile_img.png";
import logo from ".././assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div
      className={`fixed top-0 w-full px-4 py-2 z-40 flex items-center justify-between transition-colors duration-300 ${
        isScrolled ? "bg-opacity-80 bg-black" : "bg-gradient-to-b from-black"
      }`}
    >
      <img className="w-24 md:w-44 mt-2" src={logo} alt="logo" />

      {user && (
        <div className="hidden md:flex flex-1 justify-center text-white font-medium mr-64 pr-64">
          <ul className="flex list-none gap-6 cursor-pointer">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
      )}

      {user && (
        <div className="flex items-center space-x-2">
          <button
            className="md:py-2.5 md:px-2.5 py-0.5 px-1 bg-red-600 rounded text-white text-xs md:text-sm"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "Search Movies"}
          </button>
          <img
            className="w-7 h-7 md:w-10 md:h-10 rounded-full md:rounded-md cursor-pointer"
            src={profile_img}
            alt="user-logo"
          />
          <button
            className="md:px-2 md:py-1 px-1 py-0.5 bg-red-600 text-white font-semibold text-xs md:text-sm rounded hover:bg-red-700 transition-all"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
