import React, { useState } from 'react';

const Searchfield = ({handleText}) => {
  const handleSearch = (inputValue) => {handleText(inputValue)}
  return (
      <div className='flex items-center justify-center gap-4 mt-3'>
        <input type="text" placeholder='Search by Book name or Author' className='pl-2 pr-7 w-1/2 h-12 outline-none  rounded-full border-2 border-blue-300 shadow-lg' onChange={(e)=> handleSearch(e.target.value)} />
      </div>
  )
}

export default Searchfield