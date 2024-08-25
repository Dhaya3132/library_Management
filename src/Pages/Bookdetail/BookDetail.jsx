import React from 'react';
import { useParams } from 'react-router-dom';
import Booksdata from '../../Components/Booksdata';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import left_icon from '../../assets/left_icon.svg';

const BookDetail = () => {
  const { id } = useParams();
  const bookDatas = useSelector(state => state.book);
  const book_data = bookDatas.find(book => book.id === id);
  return (
    <section className='p-5'>
      <Link to='/browsebook'>
        <button className='px-3 py-1'>
          <img src={left_icon} alt="" className='w-7 h-7' />
        </button>
      </Link>
      <div className='flex md:flex-row flex-col justify-center gap-10 p-5 mt-5'>
        <img src={book_data.img} alt="book_img" className='h-80 w-96' />
        <div>
          <h2 className='font-semibold font-Poppins text-4xl mb-2'>Title : {book_data.title}</h2>
          <p className='font-base font-Poppins text-xl mb-2'>Description : {book_data.description}</p>
          <h4 className='text-lg font-semibold font-Poppins mb-2'><span className='px-2 py-1 bg-black text-white font-medium text-base font-Poppins'>Author</span> : {book_data.author}</h4>
          <p className='font-Poppins text-md font-medium mt-1 text-orange-500'>Ratings {book_data.rating}+</p>
        </div>
      </div>
      <Booksdata title={'See other books'} />
    </section>

  )
}

export default BookDetail;