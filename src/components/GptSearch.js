import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utilities/constants'

const GptSearch = () => {
  return (
   <div>
    <div className='absolute -z-10'>
      <img alt='bg-img' src={BG_IMG}/>
    </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
   </div>  
  )
}

export default GptSearch