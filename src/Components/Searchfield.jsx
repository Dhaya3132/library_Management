import React, { useState } from 'react';

const Searchfield = ({handleInput}) => {
  return (
      <div className='flex items-center justify-center gap-4 mt-3'>
        <input type="text" placeholder='Search by Book name or Author' className='pl-2 pr-7 w-80 h-12 rounded-full border-2 border-blue-100' onChange={()=> setInputValue(e.target.value)} />
        <button className='bg-Azure text-white px-6 py-2 text-lg rounded-full'>Search</button>
      </div>
  )
}

export default Searchfield