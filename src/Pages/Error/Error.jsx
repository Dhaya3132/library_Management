import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div className='font-Poppins text-center p-10'>
        <h2 className='text-8xl font-semibold'>404</h2>
        <p className='text-5xl font-medium'>Not found</p>
        <p className='font-light text-xl'>Please check your route</p>
        <div className='mt-10'>
          <Link to='/'><button className='bg-blue-50 border-2 border-blue-200 text-black font-normal px-5 py-2 rounded-3xl'>Back to home</button></Link>
        </div>
    </div>
  )
}

export default Error