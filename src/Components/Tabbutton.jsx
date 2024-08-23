const Tabbutton = ({children,onClick,isActive}) => {
    return (
        <button onClick={onClick} className={`hover:bg-Azure hover:text-white font-medium font-Poppins  ${isActive ? 'bg-Azure text-white' : 'bg-gray-50 text-black'} px-6 py-2 rounded-full`}>{children}</button>
    )
}
export default Tabbutton;