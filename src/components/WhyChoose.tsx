import React from "react";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // Hamburger icon
import { FaCookie } from "react-icons/fa"; // Cookie icon
import { FaWineGlassAlt } from "react-icons/fa"; // Wine Glass icon

function WhyChoose() {
  return (
    <div className="text-white py-12 px-4 bg-black">
      <div className="flex gap-8 items-start justify-between">
        {/* Left: Images Section */}
        <div className="grid grid-cols-3 gap-4 w-1/2">
          <Image src={"/yummy.png"} alt="yummy" height={356} width={362} />
          <Image src={"/burger2.png"} alt="burger2" height={231} width={281} />
          <Image src={"/burger.png"} alt="burger" height={226} width={221} />
          <Image src={"/nuggets.png"} alt="nuggets" height={306} width={244} />
          <Image src={"/sauce.png"} alt="sauce" height={168} width={161} />
          <Image src={"/orange.png"} alt="orange" height={166} width={161} />
        </div>

        {/* Right: Text Section */}
        <div className="w-1/2 text-right">
          <i className="text-orange-400">Why Choose Us</i>
          <h1 className="font-extrabold text-4xl mt-4 leading-snug">
            <span className="text-orange-500">Ex</span>traordinary taste <br />
            And Experienced
          </h1>
          <p className="py-6 font-medium text-lg italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ea corporis fuga placeat, maxime aperiam quisquam quas vero non modi
            molestias nesciunt nemo similique iste quibusdam veniam praesentium
            sit commodi?
          </p>

          {/* Icon Boxes for Hamburger, Cookie, and Wine */}
          <div className="flex gap-8 mt-8">
            <div className="flex flex-col items-center bg-orange-500 text-white p-6 rounded-lg shadow-lg w-1/3">
              <FaHamburger className="text-5xl mb-4" />
              <p className="text-lg font-semibold">Hamburger</p>
            </div>
            <div className="flex flex-col items-center bg-orange-500 text-white p-6 rounded-lg shadow-lg w-1/3">
              <FaCookie className="text-5xl mb-4" />
              <p className="text-lg font-semibold">Cookie</p>
            </div>
            <div className="flex flex-col items-center bg-orange-500 text-white p-6 rounded-lg shadow-lg w-1/3">
              <FaWineGlassAlt className="text-5xl mb-4" />
              <p className="text-lg font-semibold">Wine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
