import React from 'react'
import Image from 'next/image'

function blog() {
    return (
      <div>
        <div>
          <p className="flex text-orange-400 max-w-screen-2xl px-96 justify-center items-center">
            <i>Blog Post</i>
          </p>

          <p className="text-white font-bold text-4xl max-w-screen-2xl px-96">
            <span className='text-orange-400'>LA</span>TEST NEWS & BLOGS
          </p>
        </div>

        <div className="flex">
          <Image
            src="/Blog Card 1 (6).png"
            alt="image.png"
            width={423}
            height={349}
          />
          <Image
            src="/Blog Card 3.png"
            alt="image.png"
            width={423}
            height={349}
          />

          <Image
            src="/Blog Card 2 (1).png"
            alt="image.png"
            width={423}
            height={349}
          />
        </div>
      </div>
    );
}

export default blog