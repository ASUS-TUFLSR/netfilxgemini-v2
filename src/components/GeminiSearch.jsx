import React from 'react'
import GptSearchBar from './GeminiSearchBar'
import GeminiMovieSuggestion from './GeminiMovieSuggestion'
import { NET_BACK } from '../utils/constants'

const GeminiSearch = () => {
  return <>
  
        <div className="fixed -z-10" >
         <img src={NET_BACK} className='h-screen object-cover md:h-auto' alt="net-back" />
       </div>
       <div >
     <GptSearchBar/>
     <GeminiMovieSuggestion/>
     </div>
  
</>
}

export default GeminiSearch