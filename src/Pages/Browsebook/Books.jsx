import React, { useState } from 'react';
import Categories from '../../Components/Categories';
import Booksdata from '../../Components/Booksdata';
import Searchfield from '../../Components/Searchfield';

const Books = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchTxt = (inputValue) => {
    setInputValue(inputValue);
  }

  return (
    <div className='p-10'>
      <section>
        <Searchfield handleText={handleSearchTxt}/>
        <Categories />
        <Booksdata title={'All Books'} inputValue={inputValue} />
      </section>
    </div>
  )
}

export default Books