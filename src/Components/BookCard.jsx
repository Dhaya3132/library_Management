import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="p-2 border-2 border-blue-100 rounded-lg w-64 shadow-sm hover:scale-105 cursor-pointer" key={book.id} >
      { book.isNew && <p className='bg-green-50 mb-1 text-black text-xs px-2 py-1 font-Poppins font-light w-fit rounded-md border-2 border-green-300'>newly added</p>}
      <img src={book.img} alt="book_image" className="w-full h-40 rounded-md" />
      <h3 className="font-semibold text-base font-Poppins mt-2">{book.title}</h3>
      <div className="flex gap-2 items-center mt-2 font-Poppins">
        <p className="bg-blue-50 border-2 border-blue-200 font-Poppins p-1 font-light text-Azure text-xs rounded-md ">Author</p>
        <p className="text-Gray-500 font-medium text-sm font-Poppins">{book.author}</p>
      </div>
      <p className="font-Poppins text-sm font-light mt-1">{book.description.length >= 40 ? book.description.substring(0, 50) + '...' : book.description}</p>
      <p className='font-Poppins text-sm font-medium mt-1 text-orange-500'>Ratings {book.rating}+</p>
      <Link to={`/books/${book.id}`}><button className='font-Poppins px-2 py-1 bg-blue-50 text-black border-2 border-blue-300 text-xs mt-1 rounded-lg float-right'>View details</button></Link>
    </div>
  )
}

export default BookCard;