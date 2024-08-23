import { useEffect, useState } from "react";
import Tabbutton from "./Tabbutton";
import { bookData } from "../utils/mockData";
import {Link} from 'react-router-dom'
import BookCard from "./BookCard";

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
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </div>)
}
export default Categories;