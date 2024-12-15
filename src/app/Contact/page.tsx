

import React from 'react';
import Navbar from '../component/navbar';
import Hero2 from '../component/hero2';
import Footer4 from '../component/footer4';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'; // React Icons import

const Page = () => {
  return (
    <div >
      {/* Navbar */}
      <Navbar />
      <Hero2 />
      <div className="bg-[#FFFFFF] py-16">
      <div className="max-w-7xl mx-auto px-9 mt-16">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get In Touch With Us</h2>
          <p className="text-lg text-[#9F9F9F] mt-4">
            For More Information About Our Product & Services, Please Feel Free To Drop
          </p>
          <p className="text-[#9F9F9F]">
            Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Main Section with Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Right Side: Contact Information (Address, Phone, Working Hours) */}
          <div className="bg-white p-10 flex flex-col space-y-8 ml-32">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-800 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-[#000000]" /> {/* Address Icon */}
                Address
              </h4>
              <p className="text-[#000000]">236 5th SE Avenue, New</p>
              <p className="text-[#000000]">York NY10000, United States</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-800 flex items-center">
                <FaPhoneAlt className="mr-3 text-[#000000]" /> {/* Phone Icon */}
                Phone
              </h4>
              <p className="text-[#000000]">Mobile: (+84) 546-6789</p>
              <p className="text-[#000000]">Hotline: (+84) 456-6789</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-800 flex items-center">
                <FaClock className="mr-3 text-[#000000]" /> {/* Clock Icon */}
                Working Time
              </h4>
              <p className="text-[#000000]">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-[#000000]">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Left Side: Contact Form */}
          <div className="bg-white p-8 ">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#000000] py-4 mb-4">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Abc"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#000000] py-4">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Abc@def.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#000000] py-4">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="This is an optional"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#000000] py-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 block w-full px-4 py-8 border border-gray-300 rounded-md"
                  placeholder="Hi! I’d like to ask about"
                />
              </div>
              <button
                type="submit"
                className="w-56 py-3 bg-[#B88E2F] hover:bg-[#b89a2f] text-white rounded-md focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
</div>
      {/* Footer */}
      <Footer4 />
    </div>
  );
};

export default Page;
