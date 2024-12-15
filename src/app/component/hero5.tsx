import React from 'react'
import Navbar from './navbar'
import Footer4 from './footer4'

const Hero5 = () => {
  return (
    <div>
        
        {/* Hero Section with Image */}
    <div className="relative w-full h-[350px] bg-cover bg-fill" style={{ backgroundImage: "url('/50.jpg')" }}>
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b ">

            <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 sm:px-12">
                    {/* Logo above Heading */}
                    <div className="mb-5">
                        <img
                            src="/16.jpg"  // Replace with your logo path
                            alt="Logo"
                            className="w-16 h-auto mx-auto" // Adjust the size of the logo
                        />
                    </div>

                    {/* Heading Text */}
                    <h1 className="text-2xl md:text-6xl font-medium text-[#000000]">Checkout</h1>

                    {/* Subheading Text */}
                    <p className="text-xl font-semibold mt-5 text-[#000000] ">
                        <span>Home  &gt; </span>
                        <span className="text-[#000000] text-md font-normal">Checkout</span>
                    </p>

                </div>
            </div>

        </div>
    </div>
    
    </div>
  )
}

export default Hero5
