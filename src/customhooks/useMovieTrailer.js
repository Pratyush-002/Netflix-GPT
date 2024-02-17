import React, { useEffect } from 'react'
import { apiOption } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', apiOption)
        const json = await data.json();

        const filterData = json.results?.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMovieTrailer();
    },[]);
}

export default useMovieTrailer