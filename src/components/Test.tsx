import React from 'react'
import Image from 'next/image'

function Test() {
  return (
      <div className='py-6'>
          <div>
              <i className='text-orange-500 font-semibold flex justify-center'>testimonials</i>
              <h1 className='font-extrabold text-white flex justify-center'> What our clients saying</h1>
          </div>
          <div className='flex justify-center'>
                   <Image src={"/Testimonials.png"} alt="orange" height={556} width={600} />
          </div>
          <div className='py-11 flex justify-center'>
              <Image src={"/Restaurant .png"} alt="orange" height={1000} width={1190} />
          </div>
    </div>
  )
}

export default Test