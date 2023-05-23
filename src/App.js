import { useState } from "react";
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Section from "./components/Section";
function App() {
  const [search, setSearch] = useState("https://metatags.io")
  return (
    <>
    <Navbar search={search} setSearch={setSearch} />
    <Hero search={search} setSearch={setSearch} />
    <Section />
    </>
  );
}

export default App;
