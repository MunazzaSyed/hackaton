import React from "react";
import Image from "next/image";

function Group() {
  return (
    <div className="flex justify-center  gap-6 space-x-4">
      <div className="flex flex-col items-center text-white">
        <Image src={"/Group (2).png"} alt={"home"} height={120} width={120} />
              <p>Professional Cheif</p>
              <p>420</p>
      </div>
      <div className="flex flex-col items-center text-white">
        <Image src={"/Group (3).png"} alt={"home"} height={120} width={120} />
              <p>Item of food</p>
              <p>320</p>
      </div>
      <div className="flex flex-col items-center text-white">
        <Image src={"/Group (4).png"} alt={"home"} height={120} width={120} />
              <p>Years of Experienced</p>
              <p>30+</p>
      </div>
      <div className="flex flex-col items-center text-white">
        <Image src={"/Group (1).png"} alt={"home"} height={120} width={120} />
              <p>Happy costumers</p>
              <p>220</p>
      </div>
    </div>
  );
}

export default Group;
