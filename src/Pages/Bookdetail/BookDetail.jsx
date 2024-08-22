import React from 'react';
import { useParams } from 'react-router-dom';
import { bookData } from '../../utils/mockData';
import Booksdata from '../../Components/Booksdata';
const BookDetail = () => {
  const { id } = useParams();
  const book_data = bookData.find(book => book.id === parseInt(id));
  return (
    <>
      <div className='flex md:flex-row flex-col justify-center gap-10 p-10'>
        <img src={book_data.img} alt="book_img" className='h-80 w-96 rounded-lg' />
        <div>
          <h2 className='font-semibold font-Poppins text-3xl mb-2'>Title : {book_data.title}</h2>
          <p className='font-base font-Poppins text-xl mb-2'>Description : {book_data.description}</p>
          <h4 className='text-lg font-semibold font-Poppins mb-2'><span className='bg-Gray px-1 py-1 text-Azure font-light text-base rounded-md'>Author</span> : {book_data.author}</h4>
        </div>
      </div>
      <Booksdata title={'See other books'} />
    </>

  )
}

export default BookDetail;