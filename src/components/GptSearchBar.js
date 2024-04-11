import React, { useRef } from 'react'
import openai from '../utils/openai';
import { apiOption } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMoviesResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async(movie) =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
      apiOption
    );
    const json = await data.json()

    return json.results
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value)

    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");


    const promiseData = gptMovies.map((movie)=> searchMoviesTMDB(movie)) 

    const tmdbResults = await Promise.all (promiseData)
    console.log(tmdbResults)

    dispatch(addGptMoviesResults({movieNames: gptMovies , movieResults: tmdbResults}));

  }

  return (
    <div className='top-[12rem] relative text-center sm:top-[8rem]'>
        <form className='w-[19rem] ml-[5%] h-[56px] sm:w-[27rem] sm:h-[71px] sm:pt-[24px] md:ml-[35%] bg-red-700 mr-[35%] flex items-center rounded-full' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type='text' className='h-[44px] top-[-1px] right-[-7px] w-[87%] sm:h-[100%] sm:top-[-12px] sm:right-[-11px] text-center rounded-full relative' placeholder='Search suggestion'/>
            <button className='top-[-2px] right-[-7px] md:top-[-13px] md:right-[-15px] relative'
            onClick={handleGptSearchClick}><img className='w-[34px] h-[34px] drop-shadow-[2px_4px_2px_black]' src='https://img.icons8.com/sf-regular/48/000000/search.png' alt='imgsrc'/></button>
        </form>
    </div>
  )
}

export default GptSearchBar;


