import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      {/* Navbar Container */}
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-semibold">
          <h2>
            <span className="text-orange-500">Food</span>tuck
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:bg-orange-600 px-3 py-2 rounded-lg">
            Home
          </Link>
          <Link
            href="/menu"
            className="hover:bg-orange-600 px-3 py-2 rounded-lg"
          >
            Menu
          </Link>
          <Link
            href="/blog"
            className="hover:bg-orange-600 px-3 py-2 rounded-lg"
          >
            Blog
          </Link>
          <Link
            href="/pages"
            className="hover:bg-orange-600 px-3 py-2 rounded-lg"
          >
            Pages
          </Link>
          <Link
            href="/about"
            className="hover:bg-orange-600 px-3 py-2 rounded-lg"
          >
            About
          </Link>
          <Link
            href="/shop"
            className="hover:bg-orange-600 px-3 py-2 rounded-lg"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="hover:bg-orange-600 px-3 py-2 rounded-lg"
          >
            Contact
          </Link>
        </div>

        {/* Button and Search Bar */}
        <div className="flex items-center gap-4">
          <Link href="/search">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-orange-600 hover:bg-orange-700">
              <FaSearch />
            </button>
          </Link>
          <input
            type="text"
            className="px-3 py-2 border bg-black rounded-full text-white hover:border-yellow-600 focus:outline-orange-600"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
