import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CardList from "../components/CardList";
import Layout from "@/components/Layout";
import { API_URL } from "../config/index";

import Topbar from "@/components/Topbar";
export default function Home({ recipes }) {
  return (
    // content wrapper
    <Layout>
      <Topbar />

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
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/recipes`);
  const recipes = await res.json();
  return {
    props: { recipes },
  };
}
