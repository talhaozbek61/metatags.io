import { useState } from "react";
import Hero from './components/Hero';
import Navbar from './components/Navbar'
function App() {
  const [search, setSearch] = useState("https://metatags.io")
  return (
    <>
    <Navbar search={search} setSearch={setSearch} />
    <Hero search={search} setSearch={setSearch} />
    </>
  );
}

export default App;
