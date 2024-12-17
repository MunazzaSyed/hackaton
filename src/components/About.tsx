import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="ContentArea flex items-center justify-between px-8 py-4">
      {/* Left Content */}
      <div className="ContentLeft w-1/2 pr-4">
        <div className="text-white">
          <i className="font-extrabold">About us</i>
          <h1 className="font-extrabold text-2xl">
            <span className="text-orange-500">We</span> Create the Best Foody
            Product
          </h1>
          <div className="font-semibold space-y-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Tenetur neque perspiciatis qui soluta sapiente molestias a,
              assumenda at?
            </p>
            <p>
              Assumenda porro maxime illum eos repellat officiis magnam, labore
              delectus nesciunt non.
            </p>
          </div>
          <div className="mt-4 space-y-4">
            <div>Lacus nisi, et ac dapibus sit eu velit in consequat</div>
            <div>
              Quisque diam pellentesque bibendum non dui volupat fringilla
            </div>
            <div>Loream ipsum dolor sit amet, consectetur adipisicing elit</div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="ContentRight w-1/2 pl-4">
        <div className="flex flex-col items-center">
          {/* Top Image */}
          <div className="mb-4 py-8">
            <Image src={"/egg.png"} alt={"home"} height={300} width={460} />
          </div>
          {/* Tiled Images */}
          <div className="grid grid-cols-2 gap-4">
            <Image src={"/2nd.png"} alt={"home"} height={194} width={322} />
            <Image src={"/3.png"} alt={"home"} height={194} width={322} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
