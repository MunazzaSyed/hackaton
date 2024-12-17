
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" container px-5 mx-auto py-14 bg-black text-white">
      {/* Support Section */}
      <div>
        <h2 className="text-2xl font-semibold">
          <span className="text-orange-500">S</span>till You Need Our Support?
        </h2>
        <p>
          <i>
            Don't wait, make a smart & logical quote here. It's pretty easy.
          </i>
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="p-2 rounded-l-lg text-black w-64"
        />
        <button className="bg-orange-500 text-white px-4 py-3 rounded-r-lg">
          Subscribe Now
        </button>
      </div>

      <hr className="border-t-2 border-orange-500 w-full mb-8" />

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* About Us */}
        <div>
          <h3 className="font-medium mb-2 text-white">About Us</h3>
          <p>
            Corporate clients and leisure travelers have been relying on our
            services for dependability.
          </p>

          <div className="flex">
            <Image src="/Watch.png" alt="watch" width={78} height={72} />
            <p className="mt-2">
              <strong>Opening Hours:</strong> <br />
              Mon-Fri: 8:00 - 6:00 <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-medium mb-2 text-white">Useful Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-medium mb-2 text-white">Help?</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-orange-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Support Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="font-medium mb-2 text-white">Recent Posts</h3>
          <ul>
            <li className="flex">
              <Image
                src="/Mask Group.png"
                alt="maskgroup"
                width={59}
                height={48}
              />
              <a href="#" className="hover:text-orange-500">
                20 Feb 2022 <br></br>
                Keep Your Business
              </a>
            </li>
            <li className="flex">
              <Image
                src="/unsplash_.png"
                alt="maskgroup"
                width={59}
                height={48}
              />
              <a href="#" className="hover:text-orange-500">
                20 Feb 2022 <br></br>
                Keep Your Business
              </a>
            </li>
            <li className="flex">
              <Image
                src="/unsplash_5.png"
                alt="maskgroup"
                width={59}
                height={48}
              />
              <a href="#" className="hover:text-orange-500">
                20 Feb 2022 <br></br>
                Keep Your Business
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons and Copyright Section */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Copyright Text */}
          <div className="text-sm text-white">
            Copyright © 2022 by Ayman. All Rights Reserved.
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer