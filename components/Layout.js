
import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
// import Search from "./Search";
import {useRouter} from 'next/router'
import { useState } from "react";
export default function Layout({ title, children, keywords, description }) {
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () =>{
    
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="text-gray-600 font-body ">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <div className="grid md:grid-cols-6">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
     
        <main className="px-16 py-6 bg-gray-100 md:col-span-5">{children}</main>
     
      </div>    
    </div>
  );
}

Layout.defaultProps = {
  title: "Bee's Recipes",
  keywords: "cooking, food, recipes",
  description: "Home cooking recipes",
};