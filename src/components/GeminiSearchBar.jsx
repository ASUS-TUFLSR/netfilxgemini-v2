import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGeminiMovieResult } from '../utils/geminiSearchSlice';
import { Loader2, Search } from 'lucide-react';

const GeminiSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGeminiSearchClick = async () => {
    if (!searchText.current.value.trim()) return;
    setLoading(true);

    const geminiQuery =
      "Act as a movie Recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Fight Club, GodFather, The Dark Knight, Interstellar, Inception";

    const BACKEND_URL =
      process.env.NODE_ENV === 'production'
        ? 'https://backend-ez66.onrender.com'
        : 'http://localhost:5001';

    try {
      const response = await fetch(`${BACKEND_URL}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: geminiQuery }),
      });

      const data = await response.json();
      const geminiMovieResult = data?.message?.split(',');

      const promiseArray = geminiMovieResult.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGeminiMovieResult({ movieNames: geminiMovieResult, movieResults: tmdbResults }));
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
    } finally {
      setLoading(false);
    }
  };




  return (
      <div className="flex justify-center items-center px-4 h-[40vh] md:h-[50vh]"> {/* Changed height */}
      <div className="w-full max-w-2xl md:max-w-3xl space-y-4">
  

        <div className={`relative flex mt-30 items-center px-5 transition-all duration-300 ${
          isFocused ? ' ring-red-500 shadow-lg' : 'shadow-md'
        } bg-black/90 backdrop-blur-sm rounded-xl overflow-hidden mt-4`}>
          <div className="absolute  text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          
          <input
            type="text"
            ref={searchText}
            className="flex-1 py-4 pl-12 pr-4 text-white bg-transparent placeholder-gray-400 focus:outline-none text-base md:text-lg"
            placeholder={lang[langKey].gptSearchPlaceholder || "Search for movies like..."}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => e.key === 'Enter' && handleGeminiSearchClick()}
          />
          
          <button
            className={`flex items-center justify-center mr-11 p-5 md:p-3  h-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all ${
              loading ? 'w-18' : 'w-24 md:w-28'
            }`}
            onClick={handleGeminiSearchClick}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin text-white" />
            ) : (
              <span className="text-white font-medium">
                {lang[langKey].search || "Search"}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiSearchBar;