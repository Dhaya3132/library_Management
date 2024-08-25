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
    <div className='p-2'>
      <section>
        <Categories />
        <Searchfield handleText={handleSearchTxt}/>
        <Booksdata title={'All Books'} inputValue={inputValue} />
      </section>
    </div>
  )
}

export default Books