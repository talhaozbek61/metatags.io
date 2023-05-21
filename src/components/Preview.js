const Preview = () => {
    return ( 
        <div className="px-10 py-1 mt-[22px]" id="metaData">
            <div className="flex items-center justify-between mx-auto">
            <h1 className="text-[11px] font-bold tracking-[0.1em] uppercase flex-inital">PREVIEW</h1>
            <button className="text-blue-500 border border-gray-300 flex-inital px-3 text-[11px] font-bold tracking-[0.1em] h-8 rounded uppercase">
                <svg width="20" height="15" viewBox="0 0 20 15" className="inline mr-[6px] -translate-y-[1px]" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#2A81FB" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5.744 2.857L1 7.732l4.696 4.953M14.304 2.857L19 7.81l-4.696 4.952M11.957 1L8 14"></path>
                    </g>
                </svg>
                Generate Meta Tags
            </button>
            </div>
        </div>
     );
}
 
export default Preview;