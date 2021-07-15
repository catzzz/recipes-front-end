import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
const ContactPage = () => {
  return (
    <Layout>
     
        <div className="w-full max-w-md h-screen mx-auto">
          <form action="" className="bg-white rounded px-8 pt-6 pb-8 mb-4 mt-20 ">
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                id="name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                rows="4"
                cols="50"
                className="bg-gray-100 p-1 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
              ></textarea>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="bg-gray-500 text-white fonte-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-full hover:bg-gray-100 hover:text-gray-500 hover:border-gray-500  border-transparent border-2 hover:shadow-sm">
                Submit
              </button>

              <Link href="/">
                <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-red-600">
                  Cancel
                </a>
              </Link>
            </div>
          </form>
        </div>


    </Layout>
  );
};

export default ContactPage;
