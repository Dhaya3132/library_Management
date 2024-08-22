import React from 'react';
import Categories from '../../Components/Categories';
import Booksdata from '../../Components/Booksdata';
import Searchfield from '../../Components/Searchfield';

const Books = () => {

  return (
    <div className='p-10'>
      <section>
        <Searchfield />
        <Categories />
        <Booksdata title={'All Books'} />
      </section>
    </div>
  )
}

export default Books