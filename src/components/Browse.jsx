import React, { useEffect } from 'react'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoBanner from './VideoBanner';
import BrowseContent from './BrowseContent';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <VideoBanner  />
      <BrowseContent />
    </>
  )
}

export default Browse