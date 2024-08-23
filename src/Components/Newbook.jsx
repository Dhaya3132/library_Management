import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const Newbook = () => {
    const newBooks = useSelector(state => state.book);
    return (
        <>
            {newBooks.length > 0 &&
                <div className='font-Poppins p-10 mt-5'>
                    <h2 className='font-semibold text-2xl'>Newly added books</h2>
                    <div className='flex flex-wrap gap-4 mt-5'>
                        {
                            newBooks.map((book) => (
                                <BookCard book={book} key={book.id} />
                            ))
                        }
                    </div>
                </div>
            }
        </>

    )
}

export default Newbook