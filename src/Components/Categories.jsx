import { useEffect, useState } from "react";
import Tabbutton from "./Tabbutton";
import { bookData } from "../utils/mockData";
import {Link} from 'react-router-dom'

const Categories = () => {

    const [selectedTab, setSelectedTab] = useState();
    const [filterdBooks, setFilteredBooks] = useState([]);

    const handleEvent = (selectedContent) => { setSelectedTab(selectedContent) }

    useEffect(() => {
        const filterdBook = bookData.filter((book) => (book.type === selectedTab)); setFilteredBooks(filterdBook);
    }, [selectedTab])

    return (
        <div className="mt-10 bg-white flex flex-col justify-center items-center">
            <h2 className="font-semibold font-Poppins text-3xl mb-5">Catergories book</h2>
            <div className="flex gap-4 px-6 py-3 border-2 border-blue-300 shadow-md w-fit rounded-full">
                <Tabbutton onClick={() => handleEvent('Science')} isActive={selectedTab === 'Science'}>Science</Tabbutton>
                <Tabbutton onClick={() => handleEvent('fiction')} isActive={selectedTab === 'Fiction'}>Fiction</Tabbutton>
                <Tabbutton onClick={() => handleEvent('Non-Fiction')} isActive={selectedTab === 'Non-Fiction'}>Non-Fiction</Tabbutton>
                <Tabbutton onClick={() => handleEvent('fantacy')} isActive={selectedTab === 'Fantacy'}>Fantacy</Tabbutton>
                <Tabbutton onClick={() => handleEvent('crime')} isActive={selectedTab === 'Crime'}>Crime</Tabbutton>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-5">
                {filterdBooks.map((book) => (
                    <div className="p-2 border-2 border-blue-100 rounded-lg w-64" key={book.id}>
                        <img src={book.img} alt="book_image" className="w-full h-40 rounded-md" />
                        <h3 className="font-semibold text-base font-Poppins mt-2">{book.title}</h3>
                        <div className="flex gap-2 items-center mt-2 font-Poppins">
                            <p className="bg-blue-50 border-2 border-blue-200 p-1 font-light text-Azure text-xs rounded-md font-Poppins">Author</p>
                            <p className="text-Gray-500 font-medium text-sm font-Poppins">{book.author}</p>
                        </div>
                        <p className="font-Poppins text-sm font-light mt-1">{book.description.length >= 60 ? book.description.substring(0, 50) + '...' : book.description}</p>
                        <Link to={`/books/${book.id}`}><button className='px-2 py-1 bg-blue-50 text-black font-Poppins border-2 border-blue-200 text-xs mt-1 rounded-lg float-right'>View details</button></Link>
                    </div>
                ))}
            </div>
        </div>)
}
export default Categories;