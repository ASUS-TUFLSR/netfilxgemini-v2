import React, { useEffect, useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGeminiMovieResult } from '../utils/geminiSearchSlice';
import { Loader2 } from 'lucide-react'; // Lucide spinner icon

const GeminiSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false); // State for loading spinner

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGeminiSearchClick = async () => {
    if (!searchText.current.value.trim()) return; // Prevent empty search
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
    <div className="pt-[40%] md:pt-[10%] flex justify-center px-4">
      <form
        className="w-full md:w-2/3 bg-black flex items-center gap-2 p-4 rounded-lg shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="flex-1 p-4 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="flex items-center justify-center px-6 py-3 font-semibold text-white bg-red-700 rounded-lg hover:bg-red-600 transition-all duration-200"
          onClick={handleGeminiSearchClick}
          disabled={loading}
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
