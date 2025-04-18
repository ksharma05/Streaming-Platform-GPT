import React from 'react'
import MovieList from './MovieList'


const BrowseContent = () => {

  return (
    <div className='-mt-64 relative z-20'>
      <MovieList title={"Now Playing"} list={"nowPlayingMovies"}/>
      <MovieList title={"Top Rated"} list={"topRatedMovies"}/>
      <MovieList title={"Popular"} list={"popularMovies"}/>
      <MovieList title={"Upcoming"} list={"upcomingMovies"}/>
    </div>
  )
}

export default BrowseContent