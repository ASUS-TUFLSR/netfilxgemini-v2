import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GeminiMovieSuggestion = () => {
  
  const {movieResults, movieNames} = useSelector(store => store.gemini)
  if(!movieNames) return null;

  
  return <div className='p-4 m-4 bg-black text-white' style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
    <div>
      {movieNames.map((movieName, index) =>  
        <MovieList  
         key={movieName} 
         title={movieName} 
         movies={movieResults[index]} 
      />)}
      </div>
  </div>
}

export default GeminiMovieSuggestion