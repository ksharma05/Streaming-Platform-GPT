import React, { useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LANG from '../utils/langConstants';
import OpenAI from "openai";
import { OPENAI_KEY, options } from '../utils/constants';
import { addTmdbMovies } from '../utils/gptSlice';


const client = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true
  });
  
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  const fetchMovieTmdb = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=true&language=en-US&page=1', options)
    const json = await data.json();
    return json.results;
  }

const SearchForm = () => {
    const {prefLang} = useSelector((store)=>store.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const handleGptSearch = async ()=>{
    if (loading) return; // prevent multiple requests
    setLoading(true);
    try {
      const genre = searchText.current.value;
      console.log(genre);
      const response = await client.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: "List only the names of popular movies in the "+genre+" genre, separated by commas. Do not include any descriptions or extra text." }
          ]
      });
      const movieListText = response.choices[0]?.message.content;
      const movieList = movieListText.split(", ").map(item => item.trim());
 

      const tmdbMovies = movieList.map((movie)=>fetchMovieTmdb(movie));

      const movieData = await Promise.all(tmdbMovies);

      dispatch(addTmdbMovies({movieList, movieData}));


    } catch (error) {
      console.error("Error during GPT search:", error);
    } finally {
      setLoading(false);
    }
  }

  const debouncedHandleGptSearch = useCallback(debounce(handleGptSearch, 2000), [loading]);
  return (
    <>
         <div className='text-white md:w-1/2 h-1/3 mx-auto bg-black rounded grid grid-cols-12 gap-4 md:gap-8 grid-rows-5'>
        <input className='p-2 col-span-8 col-start-2 row-span-1 row-start-3 rounded border-white border-2' type='text' name='gpt-search' placeholder={LANG[prefLang].gptSearchPlaceholder} ref={searchText}/>
        <button className='bg-red-600 col-span-2 row-span-1 row-start-3 rounded text-sm px-1' onClick={debouncedHandleGptSearch} disabled={loading}>
          {loading ? "Searching..." : LANG[prefLang].search}
        </button>
      </div>
    </>
  )
}

export default SearchForm