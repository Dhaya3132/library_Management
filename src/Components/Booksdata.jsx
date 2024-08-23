import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const Booksdata = ({ title, inputValue }) => {

    const bookData = useSelector(state => state.book);
    
    const searchedValue = inputValue ? inputValue.toLowerCase() : '';

    const filterData = bookData.filter((book) => (
        (book.title && book.title.toLowerCase().includes(searchedValue)) || 
        (book.author && book.author.toLowerCase().includes(searchedValue))
    ));
    
    return (
        <div className='p-10'>
            <div className='flex justify-between'>
                <h2 className='font-Poppins font-semibold text-3xl'>{title ? title : 'Popular Books'}</h2>
                {title ? '' : <Link to='/browsebook'><p className='bg-blue-50 text-black rounded-md px-3 py-1 border-2 border-blue-300'>View more</p></Link>}
            </div>
            <div className="flex flex-wrap justify-center p-5 gap-5 mt-5">
                {filterData.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </div>
    )
}

export default Booksdata;
