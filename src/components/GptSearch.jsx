import React from 'react';
import GptSuggestions from './GptSuggestions';
import SearchForm from './SearchForm';



const GptSearch = () => {
  

  return (
    <div className='h-screen w-screen rounded-md  backdrop-filter
  flex flex-col items-center '>
        <SearchForm />
        <GptSuggestions />
    </div>
  )
}

export default GptSearch
