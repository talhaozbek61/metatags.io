import MetaTagsImage from "../assets/meta-tags.png"
const MetaData = ({title, setTitle, description, setDescription}) => {
        return ( 
            <div className="min-[770px]:px-6 px-5 py-3 mt-[22px]" id="metaData">
                <h1 className="text-[11px] font-bold tracking-[0.1em] uppercase">MetaData</h1>
                <div className="flex items-center justify-between mt-[30px] mb-[6px] tracking-[0.015em] font-medium">
                    <h2 className="inline-block flex-initial text-[#A3B3CA] text-sm">Image</h2>
                    <h3 className="inline-block flex-inital text-[#A3B3CA] text-[11px] mt-[3px]">Recommend 1200×628</h3>
                </div>
                <label htmlFor="fileInput" className="relative group">
                    <div className="rounded-lg border border-gray-200 group-hover:border-blue-500 duration-200">
                    <img src={MetaTagsImage} alt="meta tag" className="min-[1025px]:h-[198px] h-[140px] w-full opacity-50 rounded-lg" />
                    </div>
                    <div className="absolute-1">
                        <div className="rounded-full w-14 h-14 bg-blue-100 flex items-center justify-center group-hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
                                <g fill="none" fillRule="evenodd" stroke="#2A81FB" strokeWidth="4" transform="translate(2 3)">
                                    <polyline points="0 9 9 0 18 9"></polyline>
                                    <path d="M9,0 L9,21"></path>
                                 </g>
                            </svg> 
                        </div>
                    </div>
                    <div className="absolute-2">
                    Drag & Drop or Click
                    </div>
                </label>
                <input type="file" className="hidden" id="fileInput" />
                
                {/* Title */}
                <div className="flex items-center justify-between mt-4 mb-[6px] tracking-[0.015em] font-medium">
                    <h2 className="inline-block flex-initial text-[#A3B3CA] text-sm">Title</h2>
                    <h3 className="inline-block flex-inital text-[#A3B3CA] text-[11px] mt-[3px]">{title.length}</h3>
                </div>
                <textarea name="title" id="title" rows="2" className="w-full bg-[#EBF1FA] resize-none focus:outline-none px-4 py-2 rounded-md tracking-[0.02em] leading-[1.4]" value={title} onChange={e => setTitle(e.target.value)}></textarea>
                
                {/* Description */}
                <div className="flex items-center justify-between mt-3 mb-[6px] tracking-[0.015em] font-medium">
                    <h2 className="inline-block flex-initial text-[#A3B3CA] text-sm">Description</h2>
                    <h3 className="inline-block flex-inital text-[#A3B3CA] text-[11px] mt-[3px]">{description.length}</h3>
                </div>
                <textarea name="title" id="title" rows="5" className="w-full bg-[#EBF1FA] resize-none focus:outline-none px-4 py-2 rounded-md tracking-[0.02em] leading-[1.4] mb-[9px]" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
         );
    }
 
export default MetaData;