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
        ? 'https://backend-8im3.onrender.com'
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
      <div className='pt-[40%] md:pt-[10%] flex justify-center' >
 
         
         <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()} >
             <input type='text' ref={searchText}
                    className='p-4 m-4 bg-white col-span-9' 
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    />
            
             <button className='col-span-3 md:px-6 py-2 m-4 cursor-pointer  bg-red-700 rounded-xs text-white' 
                     onClick={handleGeminiSearchClick} disabled={loading}
             >
                 {loading ? <div className='w-6 h-6 border-t-2 ml-10 border-b-2  rounded-full animate-spin'></div> : lang[langKey].search}
             </button>
         </form>
     </div>
  );
};

export default GeminiSearchBar;