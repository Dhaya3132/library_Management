import { useEffect, useState } from "react";
import Tabbutton from "./Tabbutton";
import { bookData } from "../utils/mockData";
const Categories = () => {
    
    const [selectedTab, setSelectedTab] = useState();
    const [filterdBooks, setFilteredBooks] = useState([]);
    const handleEvent = (selectedContent) => { setSelectedTab(selectedContent) }
    useEffect(() => {
        const filterdBook = bookData.filter((book) => (book.type === selectedTab)); setFilteredBooks(filterdBook);
    }, [selectedTab])

    return (
        <div className="mt-10 bg-white">
            <h2 className="font-semibold font-Poppins mb-3 text-xl">Catergories book</h2>
            <div className="flex gap-4 p-2 border-2 border-blue-100 shadow-sm w-fit rounded-full">
                <Tabbutton onClick={() => handleEvent('Science')} isActive={selectedTab === 'Science'}>Science</Tabbutton>
                <Tabbutton onClick={() => handleEvent('fiction')} isActive={selectedTab === 'Fiction'}>Fiction</Tabbutton>
                <Tabbutton onClick={() => handleEvent('Non-Fiction')} isActive={selectedTab === 'Non-Fiction'}>Non-Fiction</Tabbutton>
                <Tabbutton onClick={() => handleEvent('fantacy')} isActive={selectedTab === 'Fantacy'}>Fantacy</Tabbutton>
                <Tabbutton onClick={() => handleEvent('crime')} isActive={selectedTab === 'Crime'}>Crime</Tabbutton>
            </div>
            <div className="mt-7 flex gap-5">
                {filterdBooks.map((book) => (
                    <div className="p-2 border-2 border-blue-200 rounded-md w-64">
                        <img src={book.img} alt="book_image" className="w-full h-40 rounded-md" />
                        <h3 className="font-semibold text-base font-Poppins mt-2">{book.title}</h3>
                        <div className="flex gap-2 items-center mt-2 font-Poppins">
                            <p className="bg-Gray p-1 font-light text-Azure text-xs rounded-md ">Author</p>
                            <p className="text-Gray-500 font-light text-sm">{book.author}</p>
                        </div>
                        <p className="font-Poppins text-sm font-light mt-1">{book.description.length >= 60 ? book.description.substring(0, 20) + '...' : book.description}</p>
                    </div>
                ))}
            </div>
        </div>)}
export default Categories;