import Image from "next/image";
// import Navbar from "./components/Navbar";
// import Head from "./components/Head"
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import CategoryGrid from "./components/CategoryGrid";
import MorePerspectives from "./components/MorePerspectives";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
  <main>
    <Header/>
    <AboutSection/>
    <CategoryGrid/>
    <MorePerspectives/>
    <hr className="my-20 mx-10 border-[#d6bfb0]" />
    <PreFooter/>
    <div className="relative top-56">
    <Footer/>

    </div>
  </main>
    </>
  );
}
