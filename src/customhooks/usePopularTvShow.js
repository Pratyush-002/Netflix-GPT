import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { apiOption } from '../utils/constant';
import { addPopularTvShow } from '../utils/moviesSlice';

const usePopularTvShow = () => {
   const dispatch = useDispatch();

   const getPopularTvShow = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', apiOption)
    const json = await data.json();

    dispatch(addPopularTvShow(json.results))
   }
   useEffect(()=>{
    getPopularTvShow();
   },[])
}

export default usePopularTvShow