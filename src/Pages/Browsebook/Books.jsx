import React from 'react';
import Categories from '../../Components/Categories';
import Booksdata from '../../Components/Booksdata';

const Books = () => {
  return (
    <div className='p-10'>
      <h2 className='font-semibold font-Poppins text-3xl text-Azure'>Browse books</h2>
      <Categories />
      <section>
         <Booksdata title={'All Books'} />
      </section>
    </div>
  )
}

export default Books