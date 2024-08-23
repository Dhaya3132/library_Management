import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../utils/bookSlice';
import { nanoid } from 'nanoid';


const AddBooks = () => {
  const [error, setError] = useState('');
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    image: null,
    description: '',
  })
  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setBookData({
      ...bookData,
      [name]: files ? files[0] : value,
    })
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, image, description } = bookData;

    if(!title || !author || !image || !description){
      setError('Please ensure all the field are entered');
      return;
    }
    console.log(bookData)

    const newBooks = {
      id:nanoid(),
      title: bookData.title,
      img: bookData.image,
      author: bookData.author,
      description: bookData.description,
      img: URL.createObjectURL(bookData.image)
    }
    console.log(newBooks);

    dispatch(addBook(newBooks));
    navigate('/browsebook');
  }

  return (
    <form className='w-1/2 font-Poppins p-12 mx-auto' onSubmit={handleSubmit}>
      <h2 className='font-semibold text-2xl mb-4 text-center'>Add new Book</h2>
      <div className='mb-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Title</label>
        <input type="text" name='title' value={bookData.title} onChange={handleChange} placeholder='Enter a Title of Book' className='w-full h-12 pl-2 pr-5 border-2 border-blue-100 outline-none rounded-md' />
      </div>
      <div className='mb-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Author</label>
        <input type="text" name='author' value={bookData.author} onChange={handleChange} placeholder='Enter a Author' className='w-full h-12 pl-2 pr-5 border-2 border-blue-100 outline-none rounded-md' />
      </div>
      <div className='mb-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Description</label>
        <textarea type="text" name='description' value={bookData.description} onChange={handleChange} placeholder='Enter a description' className='w-full h-12 pl-2 pr-5 border-2 border-blue-100 outline-none rounded-md' rows='5'></textarea>
      </div>
      <div className='mb-4 flex gap-4'>
        <label className='font-medium text-lg text-gray-600 mb-2'>Upload a Image</label>
        <input type="file" name='image' accept='image/*' onChange={handleChange} placeholder='Choose a Image' className='outline-none' />
      </div>
      {error && <p className='font-medium text-red-500 text-base mb-4'>{error}</p>}
      <button type='submit' className='px-6 py-2 bg-blue-50 border-2 border-blue-100 text-black font-semibold rounded-md'>Add book</button>
    </form>
  )
}

export default AddBooks