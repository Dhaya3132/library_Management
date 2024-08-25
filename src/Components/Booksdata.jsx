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
        <div className='mt-10 p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-Poppins font-medium text-3xl'>{title ? title : 'Popular Books'}</h2>
                {title ? '' : <Link to='/browsebook'><p className='text-black font-normal text-base underline underline-offset-1'>View more</p></Link>}
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-8">
                {filterData.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </div>
    )
}

export default Booksdata;
