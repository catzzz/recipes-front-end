import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import { API_URL } from "../config/index";
import {useState} from 'react'
export default function Home({ recipes }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () =>{
    
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    // content wrapper
    <div className="text-gray-500 font-body ">
      <div className="grid md:grid-cols-6">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        {/* end nav */}
        <main className="px-16 py-6 bg-gray-100 md:col-span-5">
          <div className="flex justify-center md:justify-end">
            <Link href="#">
              <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-gray-100 transition ease-out duration-500">Log in</a>
            </Link>
            <Link href="#">
              <a className="btn text-primary ml-2 border-primary md:border-2 hover:text-gray-100 hover:bg-primary transition ease-out duration-500">Sign up</a>
            </Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold ">Recipes</h2>
            <h3 className="text=2xl font-semibold  ">For Bee Chu</h3>
          </header>

          <div>
            {/* section 1 */}

            <CardList title={"Latest Posts"} recipes={recipes} />

            {/* section 2 */}

            <CardList title={"Most Popular"} recipes={recipes} />

            <div className="flex justify-center mt-8">
              <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-105 hover:bg-opacity-60 transition ease-out duration-300">
                Load more
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/recipes`);
  const recipes = await res.json();
  return {
    props: { recipes },
  };
}
