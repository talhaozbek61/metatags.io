import favicon from "../assets/favicon.png"
const Preview = ({title, setTitle, description, setDescription, search}) => {
    return ( 
        <div className="min-[770px]:px-10 px-5 py-6 min-[770px]:py-2 mt-[22px] min-[770px]:mt-[18px]" id="Preview">
            <div className="flex items-center justify-between mx-auto">
            <h1 className="text-[11px] font-bold tracking-[0.1em] uppercase flex-inital">PREVIEW</h1>
            <button className="text-blue-500 border border-gray-300 flex-inital px-3 text-[11px] font-bold tracking-[0.1em] h-8 rounded uppercase hover:border-blue-500">
                <svg width="20" height="15" viewBox="0 0 20 15" className="inline mr-[6px] -translate-y-[1px]" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#2A81FB" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5.744 2.857L1 7.732l4.696 4.953M14.304 2.857L19 7.81l-4.696 4.952M11.957 1L8 14"></path>
                    </g>
                </svg>
                Generate Meta Tags
            </button>
            </div>
            {/* Google */}
            <div id="google" className="active">
            <div className="mt-[23px] flex text-sm text-[#A3B3CA] tracking-[0.015em] items-center max-[770px]:mb-[13px]">
                <h1 className="mr-3">Google</h1>
                <span className="w-full h-[1px] bg-slate-200"></span>
            </div>
            <div className="mobile-shadow-google max-[769px]:px-3 max-[769px]:py-3 rounded-md">
            <div className="card-google">
                <h1 className="text-[#1a0dab] min-[770px]:text-lg text-sm !leading-5 hover:underline cursor-pointer break-words"> {title} </h1>
            </div>
            <div className="card-google-url text-[#006621] flex items-center">
                <h1 className="text-sm mr-2"> {search}/</h1>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-2 h-3 fill-current">
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                </span>
            </div>
            <span className="w-full h-[1px] bg-slate-200 block mt-1 mb-1 min-[770px]:hidden"></span>
            <p className="text-[#545454] text-[13px] google-description break-words"> {description} </p>
            </div>
            </div>
            {/* Facebook */}
            <div id="facebook" className="active">
            <div className="mt-[23px] flex text-sm text-[#A3B3CA] tracking-[0.015em] items-center">
                <h1 className="mr-3">Facebook</h1>
                <span className="w-full h-[1px] bg-slate-200"></span>
            </div>
            <div className="card-facebook mt-[13px] min-[770px]:w-[500px] cursor-pointer">
                <div className="card-facebook-image min-[770px]:h-[261px] min-[770px]:w-[500px] h-[180px] border border-gray-300"></div>
                <div className="border-x border-b border-gray-300 px-3 py-[10px] bg-[#f2f3f5] text-[#606770] text-[12px] leading-3">
                    <span>{search.slice(8).toUpperCase()}</span>
                    <p className="text-base mt-1 text-[#1d2129] font-semibold leading-[22px] break-words"> {title} </p>
                    <p className="overflow-hidden text-sm whitespace-nowrap overflow-ellipsis leading-6"> {description} </p>
                </div>
            </div>
            </div>
            {/* Twitter */}
            <div id="twitter" className="active">
            <div className="mt-[23px] flex text-sm text-[#A3B3CA] tracking-[0.015em] items-center">
                <h1 className="mr-3">Twitter</h1>
                <span className="w-full h-[1px] bg-slate-200"></span>
            </div>
            <div className="card-twitter mt-[13px] min-[770px]:w-[504px] max-[669px]:flex max-[669px]:justify-between cursor-pointer group">
                <div className="w-10 h-10 bg-[#EBF1FA] rounded-full shrink-0 mr-1 min-[770px]:hidden"></div>
                <div className="w-full">
                <div className="card-twitter-image min-[770px]:h-[252px] min-[770px]:w-[504px] h-[150px] w-full border border-gray-200 rounded-t-lg group-hover:border-gray-300 duration-300"></div>
                <div className="border-x border-b border-gray-200 px-[14px] py-2 text-[#606770] text-[12px] leading-3 rounded-b-lg group-hover:border-gray-300 duration-300">
                    <p className="text-sm mt-1 text-[#1d2129] min-[770px]:font-bold leading-[1.3em] break-words"> {title} </p>
                    <p className="text-sm leading-[18px] mt-1 mb-1 text-black hidden min-[770px]:block break-words"> {description} </p>
                    <span className="text-sm text-[#8899A6]">{search.slice(8)}</span>
                </div>
                </div>
            </div>
            </div>
            {/* Linkedin */}
            <div id="linkedin" className="hidden">
            <div className="mt-[23px] flex text-sm text-[#A3B3CA] tracking-[0.015em] items-center">
                <h1 className="mr-3">Linkedin</h1>
                <span className="w-full h-[1px] bg-slate-200"></span>
            </div>
            <div className="card-linkedin mt-[13px] min-[770px]:w-[552px] cursor-pointer">
                <div className="card-linkedin-image min-[770px]:h-[288px] min-[770px]:w-[552px] h-[288px] border border-gray-300"></div>
                <div className="border-x border-b border-gray-300 px-4 py-1 bg-[#f2f3f5] text-[#606770] text-[12px] leading-3">
                    <p className="text-sm mt-1 text-[#1d2129] font-semibold leading-5 break-words"> {title} </p>
                    <span className="leading-5 break-words">{search.slice(8)}</span>
                </div>
            </div>
            </div>
            {/* Pinterest */}
            <div id="pinterest" className="hidden">
            <div className="mt-[23px] flex text-sm text-[#A3B3CA] tracking-[0.015em] items-center">
                <h1 className="mr-3">Pinterest</h1>
                <span className="w-full h-[1px] bg-slate-200"></span>
            </div>
            <div className="card-pinterest mt-[13px] min-[770px]:w-[236px] cursor-zoom-in max-w-[236px]">
                <div className="card-pinterest-image min-[770px]:h-[123px] min-[770px]:w-[236px] w-[236px] h-[123px] rounded-lg"></div>
                <div className="px-2 text-[12px] leading-3 flex break-words">
                    <p className="text-sm mt-1 text-[#1d2129] font-bold leading-[17px] -tracking-[0.4px] w-full"> {title} </p>
                    <span className="text-[#8e8e8e] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current w-[15px] h-[15px]">
                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                        </svg>
                    </span>
                </div>
            </div>
            </div>
            {/* Slack */}
            <div id="slack" className="hidden">
            <div className="mt-[23px] flex text-sm text-[#A3B3CA] tracking-[0.015em] items-center">
                <h1 className="mr-3">Slack</h1>
                <span className="w-full h-[1px] bg-slate-200"></span>
            </div>
            <div className="card-slack mt-[13px] flex break-words max-w-[520px]">
                <div className="w-1 bg-[#e8e8e8] rounded-lg"></div>
                <div className="px-[13px] py-1 text-[12px] leading-3 break-words w-full">
                    <img src={favicon} alt="Favicon" className="h-4 inline mr-[9px]" />
                    <h1 className="inline-block text-[#717274] text-[15px] translate-y-[2px]">Meta Tags</h1>
                    <p className="text-blue-600 font-bold text-[15px] leading-6 tracking-tighter"> {title} </p>
                    <span className="!text-[#2c2d30] leading-[22px] text-[15px] tracking-tight"> {description} </span>
                    <div className="card-slack-image max-w-[360px] h-[189px] border border-gray-300 rounded mt-1"></div>
                </div>
            </div>
            </div>

            <div className="h-[60px]"></div>
        </div>
     );
}
 
export default Preview;