import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BackgroundVideo from './BackgroundVideo';


const VideoBanner = () => {
  const bannerMovie = useSelector(store=>store.movies?.nowPlayingMovies);
 
  if(!bannerMovie) return;
  const { original_title, overview} = bannerMovie[0];



  return (
    <div>
      <div>
        <BackgroundVideo />
      </div>
      <div>
        <h2>{original_title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default VideoBanner