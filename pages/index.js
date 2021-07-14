import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import { API_URL } from "../config/index";
export default function Home({ recipes }) {
  return (
    // content wrapper
    <div className="text-gray-600 font-body ">
      <div className="grid md:grid-cols-3">
        <Navbar />
        {/* end nav */}
        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end">
            <Link href="#">
              <a className="text-primary">Log in</a>
            </Link>
            <Link href="#">
              <a className="text-primary ml-2">Sign up</a>
            </Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text=2xl font-semibold">For Bee Chu</h3>
          </header>

          <div>
            {/* section 1 */}

            <CardList title={"Latest Posts"} recipes={recipes} />

            {/* section 2 */}

            <CardList title={"Most Popular"} recipes={recipes} />

            <div className="flex justify-center">
              <div className="bg-secondary-100 text-secondary-200">
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
