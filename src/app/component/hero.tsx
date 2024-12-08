import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (

      <div>
      <section className="text-gray-600 body-font bg-[#FBEBB5]">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">

         
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:text-left">
         
            <h1 className="text-3xl ml-32 sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4 md:mb-8">
              Rocket Single
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              Seater
            </h2>

           
            <div className="flex flex-col justify-center items-center">
              <button className="inline-flex text-[#000000] border-b-2 border-black pb-1 text-xl sm:text-2xl md:text-3xl mb-4">
                Shop Now
              </button>
            </div>
          </div>

        
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px]">
              <Image
                alt="Rocket"
                layout="fill"
                objectFit="cover"
                src={require('../../../public/1.jpg')}
                className="rounded-md"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
        
    );
}




export default Hero
