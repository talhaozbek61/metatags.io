import logo from "../logo.svg"
const Section = () => {
    return ( 
        <section className="p-6">
            <div className="bg-[#2A81FB] pt-[60px] px-3 pb-20  min-[770px]:px-0 min-[770px]:pt-[100px] min-[770px]:pb-[140px] text-center">
            
            <img src={logo} alt="Logo" className="text-center inline-block" />
            <h1 className="text-2xl text-white mt-[30px] mb-2">Meta Tags</h1>
            <p className="text-base min-[770px]:text-2xl opacity-60 text-white max-w-[900px] mx-auto leading-[1.6]">Meta Tags is a tool to debug and generate meta tag code for any website. With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!</p>
            </div>
        </section>
     );
}
 
export default Section;