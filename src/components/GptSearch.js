import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { LOGIN_photo } from '../utils/constant'

const GptSearch = () => {
  return (
    
    <div>
      <div className='fixed -z-10'>
      <img src={LOGIN_photo} alt='BG-photo'></img>
      </div>
      
      <GptSearchBar />
      <GptMovieSuggestion />
      </div>
    
    
  )
}

export default GptSearch