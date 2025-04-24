import React, { useEffect } from 'react'
import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailerVideo } from '../utils/movieSlice';

const useVideoData = () => {
    const dispatch = useDispatch();
    const bannerMovie = useSelector(store=>store.movies?.nowPlayingMovies);
    const trailerMovie = useSelector(store=>store.movies.movieTrailerVideo);
    if(!bannerMovie) return;
    const {id} = bannerMovie[0];

    const fetchVideoData = async (id)=>{
        const bannerVideoData = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        const videoDataJson = await bannerVideoData.json();
        dispatch(addMovieTrailerVideo(videoDataJson));   
    }
    useEffect(()=>{
       
            !trailerMovie && fetchVideoData(id)
        
        
    },[]);
}

export default useVideoData