import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { apiOption } from '../utils/constant'
import { addTopRatedMovies } from '../utils/moviesSlice'

const useTopRatedMoives = () => {
  
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {
        const data = await 
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', apiOption);
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        getTopRatedMovies()
    },[]);
}

export default useTopRatedMoives