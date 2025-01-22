


import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; 

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          alt="Rocket"
          src={require('../../../public/21.jpg')} 
          layout="fill" 
          objectFit="cover" 
          className="z-0"
        />
      </div>

      {/* Content Box */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center px-5 py-24 ml-80">
        <div className="bg-[#FFF3E3] p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 rounded-lg shadow-lg max-w-2xl mx-auto">
          {/* Small Description Text */}
          <p className="text-lg sm:text-xl -ml-[450px] text-gray-700 mb-4 ">
            New Arrival
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B88E2F] mb-4 ">
            <span className="block -ml-64">Discover Our</span>
            <span className="block -ml-56">New Collection</span>
          </h1>

          {/* Secondary Heading */}
          <h2 className="text-lg sm:text-xl  text-justify md:text-2xl font-medium text-gray-900 mb-6 -ml-8 leading-tight line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </h2>

          {/* Button wrapped in Link for Navigation */}
          <Link  href="/Cart">
            <button className="inline-flex justify-center text-white items-center py-5 px-14 border-2 border-[#B88E2F] -ml-96 text-xs sm:text-sm md:text-base font-medium bg-[#B88E2F] hover:bg-[#b89a2f] transition ease-in-out">
              BUY Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
