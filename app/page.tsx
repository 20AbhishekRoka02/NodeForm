import Image from "next/image";
// import Navbar from "./components/Navbar";
// import Head from "./components/Head"
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import CategoryGrid from "./components/CategoryGrid";
import MorePerspectives from "./components/MorePerspectives";
export default function Home() {
  return (
    <>
  <main>
    <Header/>
    <AboutSection/>
    <CategoryGrid/>
    <MorePerspectives/>
  </main>
    </>
  );
}
