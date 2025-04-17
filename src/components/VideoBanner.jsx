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
      <div className='w-full aspect-video absolute top-0 left-0 bg-gradient-to-tr from-black'>
        <div className='absolute top-4/6 left-28 -translate-y-1/2 text-white'>
        <h2 className='text-4xl font-bold'>{original_title}</h2>
        <p className='text-lg w-1/3'>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoBanner