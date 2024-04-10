import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector((store)=> store.movies);


  return (
    movies.nowPlayingMovies &&(
    <div className="bg-black">
      <div className=" md:-mt-52 mt-[7.8rem]  md:pl-[71px] pl-[24px] relative z-20">
      <MovieList title = {"Now Playing"} movies= {movies.nowPlayingMovies} />
      <MovieList title = {"Top Rated"} movies= {movies.topRatedMovies} />
      <MovieList title = {"Popular"} movies= {movies.popularMovies} />
      <MovieList title = {"Airing Today"} movies= {movies.airingToday} />
      <MovieList title = {"Top Rated Tv Show"} movies= {movies.topRatedTvShow} />
      <MovieList title = {"Popular Tv Show"} movies= {movies.popularTvShow} />
      
    </div>
    </div>
   )
  );
}

export default SecondaryContainer