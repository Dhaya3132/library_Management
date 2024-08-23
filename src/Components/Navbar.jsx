
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-white font-Poppins flex justify-between items-center p-5 border border-b-2 border-slate-200 shadow-md sticky top-0">
            <h2 className="font-Oswald font-semibold text-3xl text-Azure">eBook</h2>
            <ul className="flex items-center gap-5 text-medium font-medium cursor-pointer">
                <Link to='/'><li>Home</li></Link>
                <Link to='/browsebook'><li>Browse Book</li></Link>
                <Link to="/addbooks"><li>Add books</li></Link>
            </ul>
        </nav>
    )
}
export default Navbar;