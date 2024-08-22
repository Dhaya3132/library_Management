import React from 'react';
import { useParams } from 'react-router-dom';
import { bookData } from '../../utils/mockData';
import Booksdata from '../../Components/Booksdata';
import { Link } from 'react-router-dom';
import left_icon from '../../assets/left_icon.svg';

const BookDetail = () => {
  const { id } = useParams();
  const book_data = bookData.find(book => book.id === parseInt(id));
  return (
    <section className='p-5'>
      <Link to='/browsebook'>
        <button className='px-3 py-1 border-2 border-blue-200 bg-blue-50 shadow-md rounded-full'>
          <img src={left_icon} alt="" className='w-7 h-7' />
        </button>
      </Link>
      <div className='flex md:flex-row flex-col justify-center gap-10 p-5 mt-10'>
        <img src={book_data.img} alt="book_img" className='h-80 w-96 rounded-lg' />
        <div>
          <h2 className='font-semibold font-Poppins text-4xl mb-2'>Title : {book_data.title}</h2>
          <p className='font-base font-Poppins text-xl mb-2'>Description : {book_data.description}</p>
          <h4 className='text-lg font-semibold font-Poppins mb-2'><span className='px-2 py-1 bg-blue-50 border-2 border-blue-200 text-black font-medium text-base rounded-md font-Poppins'>Author</span> : {book_data.author}</h4>
        </div>
      </div>
      <Booksdata title={'See other books'} />
    </section>

  )
}

export default BookDetail;