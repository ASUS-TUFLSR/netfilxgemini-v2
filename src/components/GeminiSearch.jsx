import React from 'react'
import GptSearchBar from './GeminiSearchBar'
import GeminiMovieSuggestion from './GeminiMovieSuggestion'
import { NET_BACK } from '../utils/constants'

const GeminiSearch = () => {
  return <>
      <div className="fixed -z-10" >
         <img src={NET_BACK}
          alt="net-back" />
       </div>
     <GptSearchBar/>
     <GeminiMovieSuggestion/>
  </>
}

export default GeminiSearch