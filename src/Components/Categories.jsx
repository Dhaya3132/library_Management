import { useState } from "react";
import Tabbutton from "./Tabbutton";

const Categories = () => {
    const [selectedTab, setSelectedTab] = useState('Science');
    const handleEvent = (selectedContent) =>{
        setSelectedTab(selectedContent)
    }
    return (
        <div className="p-10 mt-10 bg-white">
            <h2 className="font-semibold font-Poppins mb-3 text-xl">Catergories book</h2>
            <div className="flex gap-4 p-2 border-2 border-blue-100 shadow-sm w-fit rounded-full">
                <Tabbutton onClick={()=>handleEvent('Science')} isActive={selectedTab === 'Science'}>Science</Tabbutton>
                <Tabbutton onClick={()=>handleEvent('Fiction')} isActive={selectedTab === 'Fiction'}>Fiction</Tabbutton>
                <Tabbutton onClick={()=>handleEvent('Non-Fictio')} isActive={selectedTab === 'Non-Fiction'}>Non-Fiction</Tabbutton>
                <Tabbutton onClick={()=>handleEvent('Fantacy')} isActive={selectedTab === 'Fantacy'}>Fantacy</Tabbutton>
                <Tabbutton onClick={()=>handleEvent('Crime')} isActive={selectedTab === 'Crime'}>Crime</Tabbutton>
            </div>
            <div className="mt-10">
                {selectedTab}
            </div>
        </div>
    )
}

export default Categories;