import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSuggestions = () => {
    const {gptMovieList, tmdbMovieData} = useSelector(store=>store.gpt);
    if (!gptMovieList) return null;

    console.log(gptMovieList);
    console.log(tmdbMovieData);
  return (
    <div className='w-full h-2/3 overflow-y-scroll'>
        {gptMovieList.map((movie,index)=><MovieList title={movie} list={tmdbMovieData[index]} />)}
    </div>
  )
}

export default GptSuggestions