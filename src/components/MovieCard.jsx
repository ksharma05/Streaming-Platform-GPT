import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({movieTitle, moviePoster}) => {
  return (
    <div className='w-48 px-2 rounded-lg shadow-md'>
        <img src={IMAGE_CDN_URL+moviePoster} alt={movieTitle} />
    </div>
  )
}

export default MovieCard