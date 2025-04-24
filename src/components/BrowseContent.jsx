import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const BrowseContent = () => {
  const {nowPlayingMovies,popularMovies,topRatedMovies,upcomingMovies} = useSelector(store=>store.movies); 
  if(!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies) return;

  return (
    <div className='-mt-5 md:-mt-64 relative z-10'>
      <MovieList title={"Now Playing"} list={nowPlayingMovies}/>
      <MovieList title={"Top Rated"} list={topRatedMovies}/>
      <MovieList title={"Popular"} list={popularMovies}/>
      <MovieList title={"Upcoming"} list={upcomingMovies}/>
    </div>
  )
}

export default BrowseContent