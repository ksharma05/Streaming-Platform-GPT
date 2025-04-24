import React from 'react'

import MovieCard from './MovieCard';

const MovieList = ({title, list}) => {

     
      
  return (
    <div className='w-11/12  mx-auto mb-8 last:mb-0' >
        <h1 className='text-white text-3xl'>{title}</h1>
        <div className='flex flex-nowrap overflow-x-scroll scroll-smooth mt-8' >
            <div className='flex   '>
                {list.map(movie=><MovieCard key={movie.id} movieTitle={movie.original_title} moviePoster={movie.poster_path}/>)}
            </div>
        </div>
    </div>

  )
}

export default MovieList