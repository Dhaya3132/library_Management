import React from 'react';
import { bookData } from '../utils/mockData';
import { Link } from 'react-router-dom';

const Booksdata = ({ title, inputValue }) => {
    
    const searchedValue = inputValue ? inputValue.toLowerCase() : '';

    const filterData = bookData.filter((book) => (
        (book.title && book.title.toLowerCase().includes(searchedValue)) || 
        (book.author && book.author.toLowerCase().includes(searchedValue))
    ));
    
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-3xl'>{title ? title : 'Popular Books'}</h2>
                {title ? '' : <Link to='/browsebook'><p className='bg-WhiteSmoke text-Azure rounded-md px-3 py-1'>View details</p></Link>}
            </div>
            <div className="flex flex-wrap justify-center p-5 gap-5 mt-5">
                {filterData.map((book) => (
                    <div className="p-2 border-2 border-blue-200 rounded-md w-64 shadow-sm hover:scale-105 cursor-pointer" key={book.id}>
                        <img src={book.img} alt="book_image" className="w-full h-40 rounded-md" />
                        <h3 className="font-semibold text-base font-Poppins mt-2">{book.title}</h3>
                        <div className="flex gap-2 items-center mt-2 font-Poppins">
                            <p className="bg-Gray p-1 font-light text-Azure text-xs rounded-md ">Author</p>
                            <p className="text-Gray-500 font-light text-sm">{book.author}</p>
                        </div>
                        <p className="font-Poppins text-sm font-light mt-1">{book.description.length >= 40 ? book.description.substring(0, 50) + '...' : book.description}</p>
                        <p className='font-Poppins text-sm font-medium mt-1 text-orange-500'>Ratings {book.rating}+</p>
                        <Link to={`/books/${book.id}`}><button className='px-2 py-1 bg-Gray text-Azure text-xs mt-1 rounded-lg float-right'>View details</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Booksdata;
