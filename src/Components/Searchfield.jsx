import React, { useState } from 'react';

const Searchfield = ({handleText}) => {
  const handleSearch = (inputValue) => {handleText(inputValue)}
  return (
      <div className='flex items-center justify-center gap-4 mt-4'>
        <input type="text" placeholder='Search by Book name or Author' className='pl-4 pr-7 md:w-1/2 w-full h-14 outline-none border-2 border-gray-500' onChange={(e)=> handleSearch(e.target.value)} />
      </div>
  )
}

export default Searchfield