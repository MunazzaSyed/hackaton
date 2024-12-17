import Image from 'next/image';
import React from 'react';

function Food() {
  return (
    <div className="contentArea text-white">
      <i>Food category</i>
      <h1 className="font-extrabold text-2xl">
        <span className="text-orange-500">Ch</span>oose Food Item
      </h1>
<div className="contentCENTER flex flex-row items-center">
  <div className="contentImage flex flex-row gap-4">
    <div>
      <Image src={"/spoon.png"} alt={"home"} height={328} width={300} />
    </div>
    <div>
      <Image src={"/burger.png"} alt={"home"} height={329} width={300} />
    </div>
    <div>
      <Image src={"/4.png"} alt={"home"} height={329} width={300} />
    </div>
    <div>
      <Image src={"/donut.png"} alt={"home"} height={328} width={300} />
    </div>
  </div>
</div>

    </div>
  );
}

export default Food