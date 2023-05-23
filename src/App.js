import { useState } from "react";
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Section from "./components/Section";
import Article from "./components/Article";
function App() {
  const [search, setSearch] = useState("https://metatags.io")
  const [title, setTitle]             = useState("Meta Tags — Preview, Edit and Generate")
  const [description, setDescription] = useState("With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!")
  return (
    <>
    <Navbar search={search} setSearch={setSearch}  />
    <Hero search={search} setSearch={setSearch} title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
    <Section />
    <Article title={title} description={description} search={search} />
    </>
  );
}

export default App;
