
import React from 'react'
import Image from 'next/image'

const Product3 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#FFF9E5]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">


          <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center  w-full h-full"
              alt="Asgaard Sofa"
              src={require('../../../public/8.jpg')}
              width={1800}
              height={1200}
            />
          </div>


          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center items-end text-right">

            <p className="text-[#000000] text-lg mb-2 font-sans uppercase tracking-wide">
              New Arrivals
            </p>


            <h1 className="title-font sm:text-4xl text-3xl font-bold text-gray-900 mb-6">
              Asgaard sofa
            </h1>


            <div className="">
              <button className="w-full md:w-auto inline-flex mt-5 text-black bg-[#FFF9E5] border-2 border-[#000000] py-3 px-14 focus:outline-none hover:text-black rounded-none shadow-md transition-all duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product3

