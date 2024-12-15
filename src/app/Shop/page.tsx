// pages/shop/page.tsx
'use client';

import React from 'react';
import Navbar from '../component/navbar';

import Footer3 from '../component/footer3';
import Hero1 from '../component/hero1';
import Image from 'next/image';
import { FaShare, FaRegHeart, FaRegClone } from 'react-icons/fa';
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Hero1 />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Product Box 1 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/60.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -30%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Syltherine</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 3.500.000</p>
                  </div>
                </div>
              </div>
            </div>



            {/* Product Box 2 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/61.jpg"
                    alt="product"
                  />
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Leviosa</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <p className="text-[#3A3A3A] text-xl font-semibold mb-3">Rp 2.500.000</p>
                </div>
              </div>
            </div>

            {/* Product Box 3 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/62.jpg"
                    alt="product"
                  />
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -50%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Lolito</h1>
                  <p className="leading-relaxed mb-3">Luxury big sofa</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 14.000.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/63.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#2EC1AC] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    New
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Respira</h1>
                  <p className="leading-relaxed mb-3">Outdoor bar table and stool</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 500.000</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/60.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -30%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Syltherine</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 3.500.000</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Product Box 2 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/61.jpg"
                    alt="product"
                  />
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Leviosa</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <p className="text-[#3A3A3A] text-xl font-semibold mb-3">Rp 2.500.000</p>
                </div>
              </div>
            </div>

            {/* Product Box 3 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/62.jpg"
                    alt="product"
                  />
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -50%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Lolito</h1>
                  <p className="leading-relaxed mb-3">Luxury big sofa</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 14.000.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/63.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#2EC1AC] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    New
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Respira</h1>
                  <p className="leading-relaxed mb-3">Outdoor bar table and stool</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 500.000</p>

                  </div>
                </div>
              </div>
            </div>
            {/* 1 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/60.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -30%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Syltherine</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 3.500.000</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/61.jpg"
                    alt="product"
                  />
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Leviosa</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <p className="text-[#3A3A3A] text-xl font-semibold mb-3">Rp 2.500.000</p>
                </div>
              </div>
            </div>
            {/* Product Box 3 */}
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/62.jpg"
                    alt="product"
                  />
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -50%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Lolito</h1>
                  <p className="leading-relaxed mb-3">Luxury big sofa</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 14.000.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/63.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#2EC1AC] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    New
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Respira</h1>
                  <p className="leading-relaxed mb-3">Outdoor bar table and stool</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 500.000</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/60.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -30%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Syltherine</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 3.500.000</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/61.jpg"
                    alt="product"
                  />
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Leviosa</h1>
                  <p className="leading-relaxed mb-3">Stylish cafe chair</p>
                  <p className="text-[#3A3A3A] text-xl font-semibold mb-3">Rp 2.500.000</p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    src="/62.jpg"
                    alt="product"
                  />
                  <div className="absolute top-6 right-2 bg-[#E97171] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    -50%
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Lolito</h1>
                  <p className="leading-relaxed mb-3">Luxury big sofa</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 2.500.000</p>
                    <p className="text-[#A9A9A9] text-lg line-through">Rp 14.000.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4 group">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 overflow-hidden relative">
                <div className="relative group-hover:opacity-80 transition-opacity">
                  <Image
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                    src="/63.jpg"
                    alt="product"
                  />
                  {/* Red Circular Badge */}
                  <div className="absolute top-6 right-2 bg-[#2EC1AC] text-white text-xs rounded-full w-9 h-9 flex items-center justify-center">
                    New
                  </div>
                </div>
                {/* Hover Content */}
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <button className="bg-white text-[#B88E2F] px-10 py-3  mb-8">Add to Cart</button>
                  <div className="flex justify-center text-white space-x-4">
                    <div className="flex items-center">
                      <IoMdShare className="mr-2" /> Share
                    </div>
                    <div className="flex items-center">
                      <FaArrowRightArrowLeft className="mr-2" />Compare
                    </div>
                    <div className="flex items-center">
                      <FaRegHeart className="mr-2" /> Like
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#F4F5F7]">
                  <h1 className="title-font text-2xl font-semibold text-[#3A3A3A] mb-3">Respira</h1>
                  <p className="leading-relaxed mb-3">Outdoor bar table and stool</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#3A3A3A] text-xl font-semibold">Rp 500.000</p>

                  </div>
                </div>
              </div>
            </div>




            {/* Pagination Buttons */}
            <div className="mt-10 flex justify-center space-x-5 ml-[500px]">
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
                className="px-5 py-3 bg-[#F9F1E7] hover:bg-[#B88E2F]  text-gray-700 rounded-md"
                onClick={() => window.scrollTo(0, 0)} // Smooth scroll to the top
              >
                Next
              </button>
            </div>




            {/* Repeat for other products */}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer3 />
    </div>
    


  );
};

export default Page;

