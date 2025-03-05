import React, { useEffect, useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addGeminiMovieResult } from '../utils/gptSearchSlice'



const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const searchMovieTMDB = async (movieName) => {
        
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        
        return json.results;
  }


  const handleGptSearchClick = async () => {

    const geminiQuery = "Act as a movie Recommendation system and suggest some movies for the query " + 
                         searchText.current.value + 
                        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Fight Club, GodFather, The Dark Knight, Interstellar, Inception";

    const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: geminiQuery }),
    });

    const data = await response.json();
   

    const geminiMovieRessult = data?.message?.split(",") // creating an array with collected data
    console.log(geminiMovieRessult);  // ✅ Log response from Gemini

    const promiseArray = geminiMovieRessult.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults)
    dispatch(addGeminiMovieResult({movieNames:geminiMovieRessult,tmdbResults}));
 
  }

  return (
    <div className='pt-[10%] flex justify-center' >
        
        <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()} >
            <input type='text' ref={searchText}
                   className='p-4 m-4 bg-white col-span-9' 
                   placeholder={lang[langKey].gptSearchPlaceholder}
                   />
            <button className='col-span-3 px-6 py-2 m-4 cursor-pointer bg-red-700 rounded-xs text-white' 
                    onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar