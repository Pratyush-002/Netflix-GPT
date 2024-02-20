import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { apiOption } from '../utils/constant'
import { addTopRatedTvShow } from '../utils/moviesSlice'

const useTopRatedTvShow = () => {
   const dispatch = useDispatch()

   const getTopRatedTvShow = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', apiOption)
    const json = await data.json()
    
    dispatch(addTopRatedTvShow(json.results))
   }
   useEffect(() => {

    getTopRatedTvShow();
   }, [])
}

export default useTopRatedTvShow