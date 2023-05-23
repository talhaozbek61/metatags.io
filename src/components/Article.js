import Image from "../assets/meta-tags.png"
import Image_Title from "../assets/title-tag.png"
const Article = ({search, title, description}) => {
    return ( 
        <div id="article">
        {/* What are Meta Tags */}
        <div className="min-[770px]:grid grid-cols-6 border-t border-gray-300 text-[#18283E]">
            <div className="col-span-2 border-r border-gray-300 article-title">
                <h1 className="text-xl min-[770px]:text-2xl font-bold min-[770px]:mx-auto !leading-[1.6]">What are Meta Tags</h1>
            </div>
            <div className="col-span-4 max-w-[700px] min-[770px]:ml-16 article-content">
                <h1 className="text-xl min-[770px]:text-2xl mb-6 !leading-[1.6]">
                    Meta tags are specific snippets of text and image content that provide a summary for a webpage. Often meta tag data shows up whenever someone shares a link on social media, in messaging, or in your business chat software 🙌.
                </h1>
                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    In addition meta tags can contain information to help search engines and other technical services scan your site to figure out what it’s all about and whether or not it’s legit!
                </p>
                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Wait, but why can’t I see meta data? Since the protocol was originally created for machines to examine, it is buried in code at the top of a website, which is exactly why this tool was created! Put any URL in the search box and our site helps you both visualize and edit the meta tag code so you can update it.
                </p>
                <div id="code" className="border border-gray-300 px-7 py-[22px] rounded">
                    <pre className="bg-[#EBF1FA] overflow-x-auto p-[0.5em]">
                        <code className="text-[#0048ab]">
                            {`<title>`}
                            <span className="text-[#00193a]">{title}</span>
                            {`</title>`}
                            <br />
                            {`<meta name="title" content="${title}">`}
                            <br />
                            {`<meta name="description" content="${description}">`}
                        </code>
                    </pre>
                    <div className="mobile-shadow-google max-[769px]:px-3 max-[769px]:py-3 rounded-md">
                        <div className="card-google">
                            <h1 className="text-[#1a0dab] min-[770px]:text-lg text-sm !leading-5 hover:underline cursor-pointer break-words">   {title} </h1>
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
            </div>
        </div>
        {/* Why Do Meta Tags Matter */}
        <div className="min-[770px]:grid grid-cols-6 text-[#18283E]">
            <div className="col-span-2 border-r border-gray-300 article-title">
                <h1 className="text-xl min-[770px]:text-2xl font-bold min-[770px]:mx-auto !leading-[1.6]">Why Do Meta Tags Matter</h1>
            </div>
            <div className="col-span-4 max-w-[700px] min-[770px]:ml-16 article-content">
                <h1 className="text-xl min-[770px]:text-2xl mb-6 !leading-[1.6]">
                    How valuable sharing on social media and ranking in Google are for your site determines how significantly you should focus on your meta tags.
                </h1>
                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Imagine walking into an abandoned store with shelves full of dust and a musty smell in the air 😕. A link to your site on Facebook or LinkedIn is often the very first interaction you have with a visitor and if it looks empty and unmaintained like a barren store, they’ll never even consider clicking the link.
                </p>
                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    As part of most digital marketing campaigns, teams often create compelling copy and striking images, which conveniently lends itself perfectly to being a part of the meta data of your webpage. Double the value, half the work!
                </p>
                <figure className="mb-5">
                    <img src={Image} alt="Meta Data" />
                    <figcaption className="text-[#A3B3CA] text-center">This image is also the meta data image!</figcaption>
                </figure>
                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Moreover generating meta data can be an important exercise in developing your concise sales pitch. Google only gives you 60 characters for your title and about 105 characters for your description—the perfect opportunity to tightly refine your value proposition.
                </p>
            </div>
        </div>
        {/* Do Meta Tags Help with SEO */}
        <div className="min-[770px]:grid grid-cols-6 text-[#18283E]">
            <div className="col-span-2 border-r border-gray-300 article-title">
                <h1 className="text-xl min-[770px]:text-2xl font-bold min-[770px]:mx-auto !leading-[1.6]">Do Meta Tags Help with SEO</h1>
            </div>

            <div className="col-span-4 max-w-[700px] min-[770px]:ml-16 article-content">
                <h1 className="text-xl min-[770px]:text-2xl mb-6 !leading-[1.6]">
                    The SEO community is definitive on this topic, the most important meta tag for ranking is your title tag. No other meta tags affect SEO rankings but...that's not to say they're unimportant!
                </h1>

                <ul className="mb-5">
                <li className="text-lg"><strong>Title</strong> - Very Important.</li>
                <li className="text-lg"><strong>Description</strong> - Less Important.</li>
                <li className="text-lg"><strong>Image</strong> - Moderately Important.</li>
                <li className="text-lg"><strong>Keyword</strong> - Negative Importance.</li>
                </ul>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Historically the "keyword" meta tag was a significant part of ranking, since early search engine robots used that value to categorize websites. But in 2009
                    <span> </span> 
                    <a href="/" className="text-[#2A81FB] underline"> Google made it official</a>
                    , the keyword meta tag is no longer a part of ranking and would potentially hurt your ranking if it is abused 😱.
                </p>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Instead modern SEO strategies focus on ranking highly in Google with high quality content and are supplemented with meta tag tweaks.
                </p>
                
                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Once you start ranking it's important that people actually click on your site which is where other parts of meta tag data plays an important role especially the meta image and meta description (read more below).
                </p>
            </div>
        </div>
        {/* Title Tag */}
        <div className="min-[770px]:grid grid-cols-6 text-[#18283E]">
            <div className="col-span-2 border-r border-gray-300 article-title">
                <h1 className="text-xl min-[770px]:text-2xl font-bold min-[770px]:mx-auto !leading-[1.6]">Title Tag</h1>
            </div>
            <div className="col-span-4 max-w-[700px] min-[770px]:ml-16 article-content">
                <h1 className="text-xl min-[770px]:text-2xl mb-6 !leading-[1.6]">
                    A title tag is the second most important factor for on-page SEO, only trailing high quality content.
                </h1>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    In technical terms it is a very simple html code tag <span className="font-mono">{`<title>Title</title>`}</span> which you place at the very top of your webpage. But its simplicity is only hiding the fact that the 50-60 characters that Google gives you will affect your website traffic in several ways.
                </p>

                <ul className="mb-5">
                <li className="text-lg"><strong>Google Search</strong> - The main link that people click on.</li>
                <li className="text-lg"><strong>Social Sites</strong> - The title people see on FB, Linkedin, etc.</li>
                <li className="text-lg"><strong>Browser Tab</strong> - Subliminal marketing that persists in a tab.</li>
                <li className="text-lg"><strong>External Links</strong> - Commonly the text other sites use to link to your site.</li>
                </ul>

                <h2 className="text-sm uppercase tracking-wide mb-2 leading-[22px] font-medium">Tips for an effective title</h2>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                Consider the trifecta: Brand, marketing, and SEO. Keep the your title around 60 characters and put the keywords you’re focusing on first. Don't go overboard with keywords, at most stick to two. Backlinko does a fantastic job describing
                <span> </span> 
                <a href="/" className="text-[#2A81FB] underline">how to develop clickable titles</a> 
                <span> </span>
                in this monster guide to on page SEO.
                </p>
                <figure className="mb-5">
                    <img src={Image_Title} alt="Meta Data" />
                    <figcaption className="text-[#A3B3CA] text-center">Places where your title tag shows up</figcaption>
                </figure>
            </div>
        </div>
        {/* Meta Description */}
        <div className="min-[770px]:grid grid-cols-6 text-[#18283E]">
            <div className="col-span-2 border-r border-gray-300 article-title">
                <h1 className="text-xl min-[770px]:text-2xl font-bold min-[770px]:mx-auto !leading-[1.6]">Meta Description</h1>
            </div>
            <div className="col-span-4 max-w-[700px] min-[770px]:ml-16 article-content">
                <h1 className="text-xl min-[770px]:text-2xl mb-6 !leading-[1.6]">
                    Meta descriptions while not useful for SEO reasons are incredibly valuable for engaging users who will click through to your site.
                </h1>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    The meta description often serves as a pitch to people who find your website on Google or social media sites. While it's not required and Google can use text from you website instead of what you specifiy in the meta data, it's better to control the description text where you can.
                </p>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Want to learn more? Moz is the authority in the SEO world and has an actionable guide to
                    <span> </span> 
                    <a href="/" className="text-[#2A81FB] underline">writing compelling descriptions</a> 
                    <span> </span>
                    .
                </p>
            </div>
        </div>
        {/* Meta Image or OG:Image */}
        <div className="min-[770px]:grid grid-cols-6 text-[#18283E]">
            <div className="col-span-2 border-r border-gray-300 article-title">
                <h1 className="text-xl min-[770px]:text-2xl font-bold min-[770px]:mx-auto !leading-[1.6]">Meta Image or OG:Image</h1>
            </div>
            <div className="col-span-4 max-w-[700px] min-[770px]:ml-16 article-content">
                <h1 className="text-xl min-[770px]:text-2xl mb-6 !leading-[1.6]">
                    With the visual nature of the web your Meta Tag Image is the most valuable graphic content you can create to encourage users to click and visit your website.
                </h1>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    Most digital marketing and SEO websites ignore the value of graphic content since it requires design skills. But with free tools like Figma and Canva, anyone can create compelling imagery to add to their meta tags.
                </p>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    On sites like Facebook, Twitter, and Linkedin, your meta image is 3x larger than your text content!
                </p>
            </div>
        </div>
        {/* Create Meta Tags for SEO and Digital Marketing */}
        <div className="min-[770px]:grid grid-cols-6 text-[#18283E] border-b border-gray-300">
            <div className="col-span-2 border-r border-gray-300 article-title">
                <h1 className="text-xl min-[770px]:text-2xl font-bold min-[770px]:mx-auto !leading-[1.6]">
                    Create Meta Tags for SEO and Digital Marketing
                </h1>
            </div>
            <div className="col-span-4 max-w-[700px] min-[770px]:ml-16 article-content">
                <h1 className="text-xl min-[770px]:text-2xl mb-6 !leading-[1.6]">
                    As meta tag data can be overwhelming and your time is limited, you should focus on two things: title tag and meta image.
                </h1>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    The primary reason for building this tool is that it’s incredible difficult to focus on the main factors that matter for meta tags. Iterating on titles and images (and descriptions) is painful!
                </p>

                <p className="text-base min-[770px]:text-xl mb-5 !leading-[1.6]">
                    MetaTags.io was created to make this process enjoyable! Quickly testing different titles and images is a fluid, seamless workflow.
                </p>
            </div>
        </div>
        </div>
     );
}
 
export default Article;