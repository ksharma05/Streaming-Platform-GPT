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
        <div className='absolute top-1/2 md:-translate-y-2/3 left-6  md:left-28 text-white'>
          <h2 className='text-xl md:text-4xl font-bold'>{original_title}</h2>
          <p className='text-sm w-1/3 hidden md:block'>{overview}</p>
          <button className='bg-white rounded text-black w-20 h-8 hover:opacity-90'>Play</button>
          <button className='bg-gray-700 opacity-80 rounded text-white w-20 h-8 hover:opacity-90 m-4'>Info</button>
        </div>
     
      </div>
    </div>
  )
}

export default VideoBanner