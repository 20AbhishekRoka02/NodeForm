import Image from "next/image";
// import Navbar from "./components/Navbar";
// import Head from "./components/Head"
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import CategoryGrid from "./components/CategoryGrid";
import MorePerspectives from "./components/MorePerspectives";
import PreFooter from "./components/PreFooter";
export default function Home() {
  return (
    <>
  <main>
    <Header/>
    <AboutSection/>
    <CategoryGrid/>
    <MorePerspectives/>
    <hr className="relative top-44 mx-10 border-[#d6bfb0]" />
    <PreFooter/>
  </main>
    </>
  );
}
