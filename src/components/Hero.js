import Channels from "./Channels";
import MetaData from "./MetaData";
import Preview from "./Preview";

const Hero = () => {
    return ( 
        <div className="min-[770px]:grid grid-flow-col auto-cols-max">
            <div className="hidden min-[1200px]:block border-r border-b border-gray-300 min-[1360px]:w-[260px] w-60">
                <Channels/>
            </div>
            <div className="border-r border-b border-gray-300 min-[770px]:w-[400px] w-[360px]">
                <MetaData />
            </div>
            <div className="w-[688px] border-b">
                <Preview />
            </div>
        </div>
     );
}
 
export default Hero;