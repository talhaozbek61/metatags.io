import logo from "../logo.svg"
const Navbar = ({search, setSearch}) => {
    return ( 
        <nav className="border-b min-[770px]:h-[92px] h-16 border-[#C7D3D9] flex items-center justify-between px-6">
            <div className="flex items-center">
                <img src={logo} alt="Logo" />
                <a href="/" className="pl-4 text-lg font-bold -mt-[2px] hidden min-[641px]:inline">
                Meta Tags
                </a>
            </div>
            <div className="min-[770px]:w-[380px] h-12 w-[270px] rounded-md min-[770px]:-translate-x-[15px] max-[770px]:translate-x-1 z-10">
                <input type="text" value={search} onChange={ e => setSearch(e.target.value) } id="search" className="bg-[#EBF1FA] w-full h-full min-[770px]:px-6 px-4  rounded-md font-bold text-base tracking-[0.02em] pt-[1px] focus:outline-none opacity-90" />
            </div>
            <div className="min-[770px]:inline-flex hidden">
                <a href="/" className="mt-[2px] hover:text-[#2A81FB]">
                Font Generator
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;