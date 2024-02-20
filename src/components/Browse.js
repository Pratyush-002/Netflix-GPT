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

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMoives();
  useAiringToday();
  usePopularTvShow();
  useTopRatedTvShow();
  
  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer />
      
      </div>
  )
}

export default Browse