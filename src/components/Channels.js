const Channels = () => {
    const debuggers = [
        {
            id   : 1,
            name : "Facebook"   
        },
        {
            id   : 2,
            name : "Twitter"   
        },
        {
            id   : 3,
            name : "Linkedin"   
        },
        {
            id   : 4,
            name : "Structured Data"   
        }
    ]
    return ( 
        <div className="px-6 py-3 mt-[22px]" id="channels">
            <h1 className="text-[11px] font-bold tracking-[0.1em] uppercase">Channels</h1>
            <ul className="list-none mt-[2.6em] px-[9px]">
               <li>
                <a href="/" id="google">
                    <span className="active">
                        <div className="absolute -left-[0.7rem] -top-2 w-11 h-11 bg-blue-500 rounded-full -z-10"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-[23px] h-6 inline fill-current">
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                    </svg>
                    </span>
                    <span className="inline-block fill-current text-lg tracking-[0.02em] ml-6 translate-y-[2px] !text-black">
                        Google
                    </span>
                </a>
               </li>
               <li>
                <a href="/" id="facebook">
                    <span className="active">
                        <div className="absolute -left-[0.7rem] -top-2 w-11 h-11 bg-blue-500 rounded-full -z-10"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-[23px] h-6 inline fill-current">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                    </span>
                    <span className="inline-block fill-current text-lg tracking-[0.02em] ml-6 translate-y-[2px] !text-black">
                        Facebook
                    </span>
                </a>
               </li>
               <li>
                <a href="/" id="twitter">
                    <span className="active">
                        <div className="absolute -left-[0.7rem] -top-2 w-11 h-11 bg-blue-500 rounded-full -z-10"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[23px] h-6 inline fill-current">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                    </span>
                    <span className="inline-block fill-current text-lg tracking-[0.02em] ml-6 translate-y-[2px] !text-black">
                        Twitter
                    </span>
                </a>
               </li>
               <li>
                <a href="/" id="linkedin">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[23px] h-6 inline fill-current">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                    </svg>
                    </span>
                    <span className="inline-block fill-current text-lg tracking-[0.02em] ml-6 translate-y-[2px]">
                        Linkedin
                    </span>
                </a>
               </li>
               <li>
                <a href="/" id="pinterest">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-[23px] h-6 inline fill-current">
                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
                    </svg>
                    </span>
                    <span className="inline-block fill-current text-lg tracking-[0.02em] ml-6 translate-y-[2px]">
                        Pinterest
                    </span>
                </a>
               </li>
               <li>
                <a href="/" id="slack">
                    <span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[23px] h-6 inline">
                        <path d="M22.672 15.218l-2.431.809.84 2.515c.33 1.018-.21 2.126-1.23 2.456-.21.06-.45.12-.661.09-.78-.03-1.531-.54-1.801-1.318l-.84-2.515-5.014 1.676.84 2.516c.33 1.018-.21 2.126-1.23 2.455-.21.06-.45.12-.661.09-.78-.03-1.531-.539-1.801-1.318l-.84-2.515-2.433.809c-.21.06-.45.12-.66.09-.78-.03-1.531-.54-1.801-1.318-.33-1.018.21-2.126 1.23-2.455l2.432-.809-1.62-4.821-2.433.809c-.21.06-.45.12-.66.09-.78-.03-1.531-.54-1.801-1.318-.33-1.018.21-2.126 1.23-2.456l2.432-.808-.84-2.515c-.33-1.019.21-2.126 1.23-2.456 1.021-.33 2.132.21 2.462 1.228l.84 2.515 5.014-1.677-.84-2.515c-.33-1.018.21-2.126 1.23-2.455 1.021-.33 2.132.21 2.462 1.227l.84 2.516 2.433-.809c1.02-.33 2.131.21 2.461 1.228.33 1.018-.21 2.126-1.23 2.455l-2.432.809 1.62 4.82 2.433-.808c1.02-.33 2.131.21 2.461 1.228.33 1.018-.21 2.126-1.23 2.455zm-13.89-4.905l1.616 4.827 5.01-1.678-1.617-4.827-5.01 1.678z" fill="currentColor" fillRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    <span className="inline-block fill-current text-lg tracking-[0.02em] ml-6 translate-y-[2px]">
                        Slack
                    </span>
                </a>
               </li>
            </ul>
            <h2 className="mt-[75px] text-[11px] font-bold tracking-[0.1em] uppercase text-[#18283E]">Official Debuggers</h2>
            <ul className="list-none second-list mt-[1.7em]">
                {debuggers.map((d) => (
                    <li key={d.id}>
                        <a href="/"> {d.name} </a>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Channels;