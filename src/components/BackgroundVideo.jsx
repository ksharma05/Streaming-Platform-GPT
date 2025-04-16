import React from 'react'
import useVideoData from '../hooks/useVideoData'
import { useSelector } from 'react-redux';

const BackgroundVideo = () => {
    const videoClips = useSelector(store=>store.movies?.movieTrailerVideo); 
    useVideoData();
    if(!videoClips) return;
    const {results} = videoClips;
    const videoBannerTrailer = results.filter(clip=>clip.type.toLowerCase() === "trailer")
    const {key} = videoBannerTrailer[0];
    const src=`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&showinfo=0&controls=0&loop=1`
    
  return (
    <div>
        <iframe className='w-full aspect-video' src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  ></iframe>
    </div>
  )
}

export default BackgroundVideo