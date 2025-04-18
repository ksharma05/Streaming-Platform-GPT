import React, { useEffect } from 'react'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoBanner from './VideoBanner';
import BrowseContent from './BrowseContent';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <>
      <VideoBanner  />
      <BrowseContent />
    </>
  )
}

export default Browse