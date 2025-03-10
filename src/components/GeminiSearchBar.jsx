import React, { useEffect, useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addGeminiMovieResult } from '../utils/geminiSearchSlice'



const GeminiSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const searchMovieTMDB = async (movieName) => {
        
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        
        return json.results;
  }


  const handleGeminiSearchClick = async () => {

    const geminiQuery = "Act as a movie Recommendation system and suggest some movies for the query " + 
                         searchText.current.value + 
                        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Fight Club, GodFather, The Dark Knight, Interstellar, Inception";

    const response = await fetch("/api/generate", {  
    method: "POST",  
    headers: { "Content-Type": "application/json" },  
    body: JSON.stringify({ prompt: geminiQuery }),  
});

    const data = await response.json();
    // add the port 
   

    const geminiMovieResult = data?.message?.split(",") 

    const promiseArray = geminiMovieResult.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    
    dispatch(addGeminiMovieResult({movieNames: geminiMovieResult, movieResults: tmdbResults}));
 
  }

  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center' >
        
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()} >
            <input type='text' ref={searchText}
                   className='p-4 m-4 bg-white col-span-9' 
                   placeholder={lang[langKey].gptSearchPlaceholder}
                   />
            <button className='col-span-3 md:px-6 py-2 m-4 cursor-pointer bg-red-700 rounded-xs text-white' 
                    onClick={handleGeminiSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GeminiSearchBar