import Channels from "./Channels";
import MetaData from "./MetaData";
import Preview from "./Preview";

const Hero = ({search, setSearch, title, setTitle, description, setDescription}) => {
    return ( 
        <div className="min-[770px]:grid grid-flow-col auto-cols-max">
            <div className="hidden min-[1200px]:block border-r border-b border-gray-300 min-[1360px]:w-[260px] w-60">
                <Channels/>
            </div>
            <div className="border-r border-b border-gray-300 min-[770px]:w-[400px] w-full">
                <MetaData title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
            </div>
            <div className="min-[770px]:w-[688px] w-full border-b">
                <Preview title={title} description={description} search={search} />
            </div>
        </div>
     );
}
 
export default Hero;