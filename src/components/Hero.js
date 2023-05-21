import { useState } from "react";
import Channels from "./Channels";
import MetaData from "./MetaData";
import Preview from "./Preview";

const Hero = ({search, setSearch}) => {
    const [title, setTitle]             = useState("Meta Tags — Preview, Edit and Generate")
    const [description, setDescription] = useState("With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!")
    return ( 
        <div className="min-[770px]:grid grid-flow-col auto-cols-max">
            <div className="hidden min-[1200px]:block border-r border-b border-gray-300 min-[1360px]:w-[260px] w-60">
                <Channels/>
            </div>
            <div className="border-r border-b border-gray-300 min-[770px]:w-[400px] w-[360px]">
                <MetaData title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
            </div>
            <div className="w-[688px] border-b">
                <Preview title={title} setTitle={setTitle} description={description} setDescription={setDescription} search={search} setSearch={setSearch} />
            </div>
        </div>
     );
}
 
export default Hero;