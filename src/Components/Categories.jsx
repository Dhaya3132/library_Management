import Tabbutton from "./Tabbutton";

const Categories = () => {
    return (
        <div className="md:mt-10 mt-2 bg-white flex flex-col justify-center items-center">
            <h2 className="font-medium font-Poppins text-3xl mb-5">Catergories book</h2>
            <div className="flex flex-wrap gap-4 px-6 py-3 w-fit rounded-md">
                <Tabbutton to='/books/science'>Science</Tabbutton>
                <Tabbutton to='/books/fiction'>Fiction</Tabbutton>
                <Tabbutton to='/books/non_fiction'>Non-Fiction</Tabbutton>
                <Tabbutton to='/books/fantacy'>Fantacy</Tabbutton>
                <Tabbutton to='/books/crime'>Crime</Tabbutton>
            </div>
        </div>)
}
export default Categories;