import { useEffect } from "react";
import { apiOption } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();
  


    const getNowPlaying = async () =>{
        const nowPlayingData = await fetch (
            'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', apiOption
        );
        const json = await nowPlayingData.json();
        console.log(json)
        dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(()=>{
          getNowPlaying();
    },[])
}

export default useNowPlayingMovies;