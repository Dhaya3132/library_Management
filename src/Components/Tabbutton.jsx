const Tabbutton = ({children,onClick,isActive}) => {
    return (
        <button onClick={onClick} className={`hover:bg-Azure hover:text-white  ${isActive ? 'bg-Azure text-white' : 'bg-WhiteSmoke text-black'} px-6 py-2 rounded-full`}>{children}</button>
    )
}
export default Tabbutton;