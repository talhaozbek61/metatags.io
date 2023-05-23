import logo from "../logo.svg"
const Footer = () => {
    return ( 
        <footer className="min-[770px]:grid grid-cols-6 text-[#18283E]">
            <div className="col-span-2">
                <img src={logo} alt="Logo" className="inline-flex" />
                <p className="pl-4 text-lg font-bold -mt-[2px] inline">
                Meta Tags
                </p>
                <div className="mt-4 text-base mb-10 min-[770px]:mb-20">
                    Copyright 2017 - 2023
                    <a href="/" className="inline underline opacity-80 ml-3">
                    Privacy Policy
                    </a>
                    <a href="/" className="inline underline opacity-80 ml-3">
                    Contact Us
                    </a>
                </div>
            </div>
            <div className="col-span-4 min-[770px]:px-4 min-[770px]:py-5 min-[641px]:py-4">
                <h1 className="text-[11px] font-bold tracking-[0.1em] uppercase mb-5">Links</h1>
                <a href="/">
                    SERP Tracker
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;