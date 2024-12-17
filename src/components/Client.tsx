import Image from 'next/image';
import React from 'react'

function client() {
  return (
    <div>
      <div>
        <i className="font-semibold text-orange-500 flex justify-center">
          Cheif
        </i>
        <h1 className="text-2xl font-semibold text-white flex justify-center ">
          <span className="text-orange-500">Me</span>et Our Chef
        </h1>
      </div>
      <div className="flex justify-center space-x-3 gap-4 py-4 ">
        <Image src={"/Chef card.png"} alt={"home"} height={391} width={312} />
        <Image src={"/Chef Card 1.png"} alt={"home"} height={391} width={312} />
        <Image
          src={"/Chef Card 1 (1).png"}
          alt={"home"}
          height={391}
          width={312}
        />
        <Image src={"/Card 4.png"} alt={"home"} height={391} width={312} />
        <br></br>
      </div>
      <div className=" flex justify-center items-center">
        <button className="mt-4 py-2 text-white bg-black border-2 border-orange-500 rounded hover:bg-orange-500 hover:text-black transition">
          See More
        </button>
      </div>
    </div>
  );
}

export default client