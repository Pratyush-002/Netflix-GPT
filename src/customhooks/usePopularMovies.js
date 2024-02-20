import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { apiOption } from '../utils/constant'
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {
  
    const dispatch = useDispatch()

    const getPopularMovies = async () => {

        const data = await fetch(' https://api.themoviedb.org/3/movie/popular?page=1', apiOption)
        const json = await data.json();
        console.log(json.results)
        dispatch(addPopularMovies(json.results))

    }

    useEffect(() =>{
        getPopularMovies();
    }, [])

};

export default usePopularMovies