import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from "./BookCard";
import { useParams } from 'react-router-dom';

const BookPage = () => {
  const { catergory } = useParams();
  const bookDatas = useSelector(state => state.book);
  const filterBook = bookDatas.filter((book) => book.type.toLowerCase() === catergory);
  return (
    <div className='p-10'>
      <h2 className='font-medium text-3xl'>Book on {catergory}</h2>
      <div className='mt-6 flex flex-wrap gap-5 items-center'>
        {
          filterBook.map((book) => (
            <BookCard book={book} key={book.id} />
          ))
        }
      </div>
    </div>
  )
}

export default BookPage