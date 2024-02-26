import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customhooks/useNowplaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customhooks/usePopularMovies';
import useTopRatedMoives from '../customhooks/useTopRatedMoives';
import useAiringToday from '../customhooks/useAiringToday'
import usePopularTvShow from '../customhooks/usePopularTvShow';
import useTopRatedTvShow from '../customhooks/useTopRatedTvShow';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptStatus = useSelector((store) => store.gpt.showGptStatus)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMoives();
  useAiringToday();
  usePopularTvShow();
  useTopRatedTvShow();
  
  return (
    <div>
      <Header />
      {showGptStatus ?  (<GptSearch/>) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>

      ) }
     
    
      
      </div>
  )
}

export default Browse