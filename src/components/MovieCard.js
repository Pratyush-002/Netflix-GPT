import React from 'react'
import { MOVIE_CARD_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
    if (!posterPath) return null; 
  return (
    <div className="w-48 pr-6 mr-2">
    <img alt="Movie Card" src={MOVIE_CARD_URL + posterPath} />
    </div>
  )
}

export default MovieCard