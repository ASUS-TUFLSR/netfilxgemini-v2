import React from 'react'
import Header from './Header'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NET_BACK } from '../utils/constants'

const GptSearch = () => {
  return <>
      <div className="absolute -z-10" >
         <img src={NET_BACK}
          alt="net-back" />
       </div>
     <GptSearchBar/>
     <GptMovieSuggestion/>
  </>
}

export default GptSearch