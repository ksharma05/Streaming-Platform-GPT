import React, { useEffect } from 'react'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoBanner from './VideoBanner';
import BrowseContent from './BrowseContent';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


const Browse = () => {
  const displaySearch = useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    
    <>
    {displaySearch ?  <GptSearch /> : 
    <>
    <VideoBanner  />
      <BrowseContent />
      </>}
    
    </>
  )
}

export default Browse