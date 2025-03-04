import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'



const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {

    const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: searchText.current.value }),
    });

    const data = await response.json();
    console.log(data); // ✅ Log response from Gemini

 
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