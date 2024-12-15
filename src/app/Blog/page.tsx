

"use client";
import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Import search icon
import Hero3 from '../component/hero3';
import Foooter2 from '../component/foooter2';
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Footer3 from '../component/footer3';
import Navbar from '../component/navbar';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero3 />

      {/* Blog Section */}
      <div className="bg-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto px-9 mt-16 flex flex-col lg:flex-row-reverse">
          {/* Right Side - Search Box and Categories */}
          <div className="lg:w-1/4 space-y-6 ml-36">
            {/* Search Box with Search Icon */}
            <div className="relative">
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-4 pr-10 py-6 border border-[#9F9F9F] rounded-lg"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#000000] w-5 h-5" />
            </div>

            {/* Categories Section */}
            <div className="space-y-9">
              <h2 className="text-xl font-medium text-[#000000] ">Categories</h2>
              <div className="space-y-9">
                <div className="flex justify-between text-sm text-[#9F9F9F]">
                  <span>Crafts</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between text-sm text-[#9F9F9F]">
                  <span>Design</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between text-sm text-[#9F9F9F]">
                  <span>Handmade</span>
                  <span>7</span>
                </div>
                <div className="flex justify-between text-sm text-[#9F9F9F]">
                  <span>Interior</span>
                  <span>1</span>
                </div>
                <div className="flex justify-between text-sm text-[#9F9F9F]">
                  <span>Wood</span>
                  <span>6</span>
                </div>
              </div>
            </div>




            {/* New Section Below Categories */}
            <div className="mt-10 space-y-8  py-32">
              <h2 className="text-2xl font-semibold text-[#000000]">Recent Posts</h2>

              {/* Post 1 */}
              <div className="flex items-center space-x-4">
                <Image
                  width={130}
                  height={90}
                  src="/72.jpg" // Replace with actual image URL
                  alt="Blog Image"
                  className="rounded-lg"
                />
                <div className='space-y-2'>
                  <h3 className="text-sm font-bold text-[#000000]">Going all-in with</h3>
                  <h3 className="text-sm font-bold text-[#000000]"> millennial design</h3>

                  <p className="text-xs text-[#9F9F9F] ">03 Aug 2022</p>
                </div>
              </div>

              {/* Post 2 */}
              <div className="flex items-center space-x-4">
                <Image
                  width={130}
                  height={90}
                  src="/73.jpg" // Replace with actual image URL
                  alt="Blog Image"
                  className="rounded-lg"
                />
                <div className='space-y-2 '>
                  <h3 className="text-sm font-bold text-[#000000] ">
                    Exploring new way
                    of decorating
                  </h3>

                  <p className="text-xs text-[#9F9F9F]">03 Aug 2022</p>
                </div>
              </div>

              {/* Post 3 */}
              <div className="flex items-center space-x-4">
                <Image
                  width={130}
                  height={90}
                  src="/74.jpg" // Replace with actual image URL
                  alt="Blog Image"
                  className="rounded-lg"
                />
                <div className='space-y-2'>
                  <h3 className="text-sm font-bold text-[#000000]">Handmade pieces that took time to make</h3>
                  <p className="text-xs text-[#9F9F9F]">03 Aug 2022</p>
                </div>
              </div>

              {/* Post 4 */}
              <div className="flex items-center space-x-4">
                <Image
                  width={130}
                  height={90}
                  src="/75.jpg" // Replace with actual image URL
                  alt="Blog Image"
                  className="rounded-lg"
                />
                <div className='space-y-2'>
                  <h3 className="text-sm font-bold text-[#000000]">Modern home in Milan</h3>
                  <p className="text-xs text-[#9F9F9F]">03 Aug 2022</p>
                </div>
              </div>

              {/* Post 5 */}
              <div className="flex items-center space-x-4">
                <Image
                  width={130}
                  height={90}
                  src="/76.jpg" // Replace with actual image URL
                  alt="Blog Image"
                  className="rounded-lg"
                />
                <div className='space-y-2'>
                  <h3 className="text-sm font-bold text-[#000000]">Colorful office redesign</h3>
                  <p className="text-xs text-[#9F9F9F]">03 Aug 2022</p>
                </div>
              </div>
            </div>















          </div>










          {/* Left Side - Blog Content */}
          <div className="lg:w-3/4 space-y-4 "> {/* Adjusted space-y-8 to space-y-4 */}
            {/* First Blog Post */}
            <div className="relative mb-4"> {/* Reduced margin */}
              <Image
                width={800}
                height={500}
                src="/69.jpg" // Replace with actual image URL
                alt="Blog Image"
                className="w-[200] h-[500px] object-contain rounded-lg"
              />
            </div>

            {/* Icon Section */}
            <div className="flex space-x-9 mb-4"> {/* Reduced margin */}
              <div className="flex items-center space-x-2">
                <FaUser className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">Admin</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">14 Oct 2022</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaTag className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">Wood</p>
              </div>
            </div>

            {/* Blog Heading */}
            <div className="text-4xl font-bold text-gray-800 mb-4"> {/* Reduced margin */}
              Going all-in with millennial design
            </div>

            {/* Blog Content */}
            <div className="mb-4 text-lg text-[#9F9F9F]"> {/* Reduced margin */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis et erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
            </div>

            {/* Show More Button */}
            <button className="text-[#000000] text-lg font-normal mb-1 -ml-2">
              Read more
            </button>

            {/* Line Under the Button */}
            <div className="border-t border-[#000000] mt-2 w-[70px] mx-auto py-20 -ml-1"></div>

            {/* Second Blog Post */}
            <div className="relative mb-4 "> {/* Reduced margin */}
              <Image
                width={800}
                height={500}
                src="/70.jpg" // Replace with actual image URL
                alt="Blog Image"
                className="w-[200] h-[500px] object-contain rounded-lg"
              />
            </div>

            {/* Icon Section */}
            <div className="flex space-x-9 mb-4"> {/* Reduced margin */}
              <div className="flex items-center space-x-2">
                <FaUser className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">Admin</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">15 Oct 2022</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaTag className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">Design</p>
              </div>
            </div>

            {/* Blog Heading */}
            <div className="text-4xl font-bold text-gray-800 mb-4"> {/* Reduced margin */}
              Exploring new ways of decorating
            </div>

            {/* Blog Content */}
            <div className="mb-4 text-lg text-[#9F9F9F]"> {/* Reduced margin */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
            </div>

            {/* Show More Button */}
            <button className="text-[#000000] text-lg font-normal mb-1 -ml-2">
              Read more
            </button>

            {/* Line Under the Button */}
            <div className="border-t border-[#000000] mt-2 w-[70px] mx-auto py-20 -ml-1"></div>

            {/* Third Blog Post */}
            <div className="relative mb-4"> {/* Reduced margin */}
              <Image
                width={800}
                height={500}
                src="/71.jpg" // Replace with actual image URL
                alt="Blog Image"
                className="w-[200] h-[500px] object-contain rounded-lg"
              />
            </div>

            {/* Icon Section */}
            <div className="flex space-x-9 mb-4"> {/* Reduced margin */}
              <div className="flex items-center space-x-2">
                <FaUser className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">Admin</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">16 Oct 2022</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaTag className="text-[#9F9F9F]" />
                <p className="text-sm text-[#9F9F9F]">Handmade</p>
              </div>
            </div>

            {/* Blog Heading */}
            <div className="text-4xl font-bold text-gray-800 mb-4"> {/* Reduced margin */}
              How to make the perfect DIY
            </div>

            {/* Blog Content */}
            <div className="mb-4 text-lg text-[#9F9F9F]"> {/* Reduced margin */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
            </div>

            {/* Show More Button */}
            <button className="text-[#000000] text-lg font-normal mb-1 -ml-2">
              Read more
            </button>

            {/* Line Under the Button */}
            <div className="border-t border-[#000000] mt-2 w-[70px] mx-auto py-20 -ml-1"></div>
          </div>
        </div>


        <div className="mt-10 flex justify-center space-x-5 -ml-8">
          <button
            className="px-5 py-3 bg-[#B88E2F] text-white rounded-md"
            onClick={() => window.scrollTo(0, 0)} // Smooth scroll to the top
          >
            1
          </button>
          <button
            className="px-5 py-3 bg-[#F9F1E7] hover:bg-[#B88E2F] text-gray-700 rounded-md"
            onClick={() => window.scrollTo(0, 0)} // Smooth scroll to the top
          >
            2
          </button>
          <button
            className="px-5 py-3 bg-[#F9F1E7] text-gray-700  hover:bg-[#B88E2F] rounded-md"
            onClick={() => window.scrollTo(0, 0)} // Smooth scroll to the top
          >
            3
          </button>
          <button
            className="px-5 py-3 bg-[#F9F1E7] hover:bg-[#B88E2F] text-gray-700 rounded-md"
            onClick={() => window.scrollTo(0, 0)} // Smooth scroll to the top
          >
            Next
          </button>
        </div>




      </div>

      {/* Footer */}
      <Footer3 />
    </div>
  );
};

export default Page;



//demo
