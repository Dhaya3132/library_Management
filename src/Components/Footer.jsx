import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-Azure flex flex-col p-10'>
        <h2 className='font-Oswald text-white text-6xl'>eBook</h2>
        <ul className='flex mt-5 text-white text-xl gap-4'>
            <Link to="/browsebook"><li>Browe book</li></Link>
            <Link to="/addbooks"><li>Add book</li></Link>
            <Link to="/"><li>Home</li></Link>
        </ul>
    </div>
  )
}

export default Footer