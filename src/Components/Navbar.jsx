
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-white bg-opacity-65 font-Poppins flex justify-between items-center p-5 sticky top-0">
            <h2 className="font-Oswald font-base text-2xl text-black">eBook</h2>
            <ul className="flex items-center gap-5 text-medium font-base cursor-pointer">
                <Link to='/'><li>Home</li></Link>
                <Link to='/browsebook'><li>Browse Book</li></Link>
                <Link to="/addbooks"><li>Add books</li></Link>
            </ul>
        </nav>
    )
}
export default Navbar;