"use client";

import Navbar from '../component/navbar'
import React, { useState } from "react";
import Foooter2 from '../component/foooter2'
import Image from 'next/image'
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart, } from 'react-icons/fa';

import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import { FiX } from "react-icons/fi"; // Cut Icon
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"



type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number };

const page = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const product = {
    id: 1,
    name: "Asgaard Sofa",
    price: 250000,
    image: "/85.jpg",
  };

  // Increment Quantity
  const incrementQuantity = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Decrement Quantity
  const decrementQuantity = () => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };



  return (
    <div>
      <Navbar />



      <section className="text-gray-600 body-font">
        <section className="text-gray-600 body-font overflow-hidden">



          {/* Filter and Sorting Section */}
          <div className="bg-[#F9F1E7] py-4">
            <div className="container mx-auto flex justify-between items-center">
              {/* New Section with Logo, Text, Icon, and Line */}
              <div className="flex items-center space-x-3"> {/* Reduced space-x to make them closer */}


                <div className="flex items-center space-x-4 text-gray-500 text-lg">
                  {/* Home */}
                  <span className="text-lg font-normal text-[#9F9F9F]">Home</span>

                  {/* Arrow Icon */}
                  <span className="text-[#9F9F9F]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>

                  {/* Shop */}
                  <span className="text-lg font-normal text-[#9F9F9F]">Shop</span>

                  {/* Arrow Icon */}
                  <span className="text-[#9F9F9F]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>

                  {/* Vertical Line */}
                  <div className="h-10 w-px  bg-[#9F9F9F] "></div>

                  {/* Current Page */}
                  <span className="text-lg font-medium text-black px-5">Asgaard Sofa</span>
                </div>
              </div>









            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
              {/* Left Side - Vertical Image Gallery */}
              <div className="flex flex-col space-y-4 lg:w-1/5 w-full items-center justify-center -ml-11 -mr-14  -mt-80">
                <img
                  alt="ecommerce"
                  className="w-24 h-24 object-cover object-center border rounded-lg bg-[#F9F1E7]"
                  src="/86.jpg"
                />
                <img
                  alt="ecommerce"
                  className="w-24 h-24 object-cover object-center border rounded-lg bg-[#F9F1E7]"
                  src="/87.jpg"
                />
                <img
                  alt="ecommerce"
                  className="w-24 h-24 object-cover object-center border rounded-lg bg-[#F9F1E7]"
                  src="/88.jpg"
                />
                <img
                  alt="ecommerce"
                  className="w-24 h-24 object-cover object-center border rounded-lg bg-[#F9F1E7]"
                  src="/89.jpg"
                />
              </div>

              {/* Main Picture and Product Details */}
              <div className="lg:w-4/5 w-full lg:flex lg:ml-10">
                {/* Main Image */}
                <div className="lg:w-[50%] w-full h-[600px] flex justify-center items-center pt-9">
                  <img
                    alt="ecommerce"
                    className="w-auto h-full object-contain rounded bg-[#F9F1E7]"
                    src="/85.jpg"
                  />
                </div>





                {/* Product Info */}
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    Asgaard sofa
                  </h1>
                  <p className="text-[#9F9F9F] text-xl font-md">Rs. 250,000.00</p>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          fill="currentColor"
                          className="w-5 h-8 text-[#FFC700]"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      <svg
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-8 text-[#FFC700]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </span>
                    <div className="h-7 w-px ml-8 bg-[#9F9F9F]"></div>
                    <span className="text-lg font-medium text-[#9F9F9F] px-5">
                      5 Customer Review
                    </span>
                  </div>
                  <p className="text-justify leading-relaxed mb-4">
                    Setting the bar as one of the loudest speakers in its class, the
                    Kilburn is a compact, stout-hearted hero with a well-balanced audio
                    which boasts a clear midrange and extended highs for a sound.
                  </p>
                  <div className="flex items-center pb-5  border-gray-100 mb-5">
                    <div className="flex flex-col space-y-6">
                      {/* Size Options */}
                      <div>
                        <span className="block mb-2 text-sm font-medium">Size</span>
                        <div className="flex space-x-2">

                          <button className="w-9 h-8 px-3 py-1 border rounded-md text-sm bg-[#B88E2F] text-white">
                            L
                          </button>
                          <button className="w-9 h-8 flex items-center justify-center border rounded-md text-sm bg-[#F9F1E7] text-black">
                            XL
                          </button>
                          <button className="w-9 h-8 flex items-center justify-center border rounded-md text-sm bg-[#F9F1E7] text-black">
                            XS
                          </button>
                        </div>
                      </div>

                      {/* Color Options */}
                      <div>
                        <span className="block mb-2 text-sm font-medium">Color</span>
                        <div className="flex space-x-2">
                          <button className="border-2 border-gray-300 bg-[#816DFA] rounded-full w-6 h-6 focus:outline-none"></button>
                          <button className="border-2 border-gray-300 bg-[#000000] rounded-full w-6 h-6 focus:outline-none"></button>
                          <button className="border-2 border-gray-300 bg-[#B88E2F] rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-center space-x-4">
                    {/* Quantity Buttons */}
                    <div className="flex items-center space-x-4">
                      {/* Static Quantity Buttons */}
                      {/* Quantity Buttons */}
                      <div className="flex items-center border rounded-lg px-3 py-2">
                        <button
                          onClick={decrementQuantity}
                          className="text-xl px-3 py-2 text-gray-700"
                        >
                          -
                        </button>
                        <span className="mx-3 text-lg">
                          {cart.find((item) => item.id === product.id)?.quantity || 0}
                        </span>
                        <button
                          onClick={incrementQuantity}
                          className="text-xl px-3 py-2 text-gray-700"
                        >
                          +
                        </button>
                      </div>

                      {/* Add to Cart Button */}
                      <Sheet>
                        <SheetTrigger asChild>
                          <button className="flex items-center justify-center whitespace-nowrap text-black border border-[#000000] px-10 py-4 rounded-lg">
                            Add to Cart
                          </button>
                        </SheetTrigger>

                        {/* Shopping Cart Sidebar */}
                        <SheetContent className="flex flex-col justify-between">
                          {/* Header with Lock Icon */}
                          <div className="flex justify-between items-center border-b-[1px] pb-2">
                            <h2 className="text-2xl font-bold">Shopping Cart</h2>
                            <SheetClose asChild>

                            </SheetClose>
                          </div>

                          {/* Cart Items */}
                          <div className="mt-6 space-y-4 flex-grow">
                            {cart.length === 0 ? (
                              <p className="text-center text-gray-500">No items in the cart.</p>
                            ) : (
                              cart.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between border-b pb-4"
                                >
                                  {/* Product Image */}
                                  <Image
                                    src="/85.jpg"
                                    alt="sofa"
                                    width={96} // Ensure it's in pixels for better control
                                    height={96}
                                    className="w-24 h-24 object-contain border rounded-lg bg-[#F9F1E7]"
                                  />
                                  {/* Product Details */}
                                  <div className="flex flex-col">
                                    <span className="font-semibold text-lg">{item.name}</span>
                                    <span className="text-[#B88E2F]">
                                      Rs. {item.price.toLocaleString()}
                                    </span>
                                    <span>Qty: {item.quantity}</span>
                                  </div>

                                  {/* Remove Icon */}
                                  <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-500 hover:text-red-600"
                                  >
                                    <FiX size={20} />
                                  </button>
                                </div>
                              ))
                            )}
                          </div>

                          {/* Subtotal */}
                          <div className="flex justify-between text-lg font-medium mt-4">
                            <span>Subtotal</span>
                            <span className="text-[#B88E2F]">
                              Rs.{" "}
                              {cart
                                .reduce((total, item) => total + item.price * item.quantity, 0)
                                .toLocaleString()}
                            </span>
                          </div>

                          {/* Line below Subtotal */}
                          <div className="border-t w-full mb-8"></div>

                          {/* Action Buttons */}
                          <div className="flex space-x-5">
                            <button className="w-1/3 border py-2 rounded-full text-[#000000] border-[#000000]">
                              Cart
                            </button>
                            <button className="w-1/3 text-[#000000] border border-[#000000] py-2 rounded-full">
                              Checkout
                            </button>
                         
                            <button className="w-1/3 border py-2 rounded-full border-[#000000] text-[#000000]">
                              Comparison
                            </button>
                           
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                    {/* Compare Button */}
                    <Link href="/Comparison">
                    <button className="flex items-center justify-center whitespace-nowrap text-black border border-[#000000] px-10 py-4 rounded-lg">
                      + Compare
                    </button>
                    </Link>

                  </div>
                  <div className="w-[480px] border-t-2 border-[#D9D9D9] pt-20 mt-12 ml-0"></div>
                  <div className="space-y-7">
                    <p className="text-sm flex items-center">
                      <span className="w-32 font-medium text-right">SKU</span>
                      <span className="mx-6">:</span>
                      <span>SS001</span>
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="w-32 font-medium text-right ml-6">Category</span>
                      <span className="mx-6">:</span>
                      <span>Sofas</span>
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="w-32 font-medium text-right">Tags</span>
                      <span className="mx-6">:</span>
                      <span>Sofa, Chair, Home, Shop</span>
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="w-32 font-medium text-right ">Share</span>
                      <span className="mx-6">:</span>
                      <span className="flex items-center space-x-6">
                        <a href="#" className="text-black">
                          <FaFacebook className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-black">
                          <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-black">
                          <AiFillTwitterCircle className="w-9 h-9" />
                        </a>
                      </span>
                    </p>
                  </div>





                </div>
              </div>
            </div>
          </div>


        </section>




        <div className="w-full border-t-2 border-[#D9D9D9] pt-10 -py-[500px]"></div>


        <section className="text-gray-600 body-font">


          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">



              <div className="container mx-auto py-10 px-4">
                {/* Tabs/Text above the paragraph */}
                <div className="flex justify-center space-x-10 border-gray-300 pb-2">
                  <span className="text-xl font-medium text-[#000000] cursor-pointer hover:text-black">
                    Description
                  </span>
                  <span className="text-lg font-medium text-[#9F9F9F] cursor-pointer hover:text-black">
                    Additional Information
                  </span>
                  <span className="text-lg font-medium text-[#9F9F9F] cursor-pointer hover:text-black">
                    Reviews [5]
                  </span>
                </div>
                {/* Paragraph */}
                <div className="container mx-auto py-10">
                  {/* First Paragraph */}
                  <p className="text-justify text-[#9F9F9F] mt-6 leading-relaxed max-w-4xl mx-auto">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                    sound of Marshall, unplugs the chords, and takes the show on the road.
                  </p>

                  {/* Second Paragraph */}
                  <p className="text-justify text-[#9F9F9F] mt-6 leading-relaxed max-w-4xl mx-auto line-clamp-4">
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                  </p>
                </div>




              </div>










              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-[360px] w-[590px] overflow-hidden ml-5 bg-[#F9F1E7]">
                  <Image
                    width={590}
                    height={360}
                    alt="content"
                    className="object-contain object-center h-full w-full rounded-lg"
                    src="/82.jpg"
                  />
                </div>



              </div>

              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-[360px] w-[590px] overflow-hidden bg-gray-100">
                  <Image
                    width={400}
                    height={300}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/83.jpg"
                  />
                </div>
              </div>


            </div>
          </div>
        </section>





        <div className="w-full border-t-2 border-[#D9D9D9] pt-10 -py-[500px]"></div>

        <h3 className="text-3xl font-medium text-center mt-10  relative">
          Related Products
        </h3>

        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
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
                  <button className="bg-white text-[#B88E2F] px-10 py-3 mb-8">Add to Cart</button>
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
            <button className="bg-white border mt-10  font-semibold border-[#B88E2F] ml-[500px]  text-[#B88E2F] px-24 py-3 mb-28 hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
              Show More
            </button>


          </div>

        </div>
      </section>
      <Foooter2 />
    </div>
  )
}

export default page



