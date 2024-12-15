import React from 'react'
import Image from 'next/image'

const Footer3 = () => {
    return (
        <div>



            <footer className="text-gray-600 body-font">




                <div className="container px-5 py-24  max-w-full flex flex-wrap justify-center bg-[#FAF3EA] ">
                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex items-center justify-start ]">
                        <div className="flex items-center space-x-4 ">
                            <Image

                                src="/46.jpg"
                                alt="Image 1"
                                width={100}
                                height={700}
                                className="w-16 h-16 object-cover "
                            />
                            <div className="text-black">
                                <h3 className="text-2xl font-bold">High Quality</h3>
                                <p className="text-xl text-[#898989]">crafted from top materials</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex items-center justify-start">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/47.jpg"
                                alt="Image 2"
                                width={100}
                                height={700}
                                className="w-16 h-16 object-cover "
                            />
                            <div className="text-black">
                                <h3 className="text-2xl font-bold">Warranty Protection</h3>
                                <p className="text-xl text-[#898989]">Over 2 years</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex items-center justify-start ">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/48.jpg"
                                alt="Image 3"
                                width={100}
                                height={700}
                                className="w-16 h-16 object-cover "
                            />
                            <div className="text-black">
                                <h3 className="text-2xl font-bold">Free Shipping</h3>
                                <p className="text-xl text-[#898989]">Order over 150 $</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex items-center justify-start">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/49.jpg"
                                alt="Image 4"
                                width={100}
                                height={700}
                                className="w-16 h-16 object-cover "
                            />
                            <div className="text-black">
                                <h3 className="text-2xl font-bold">24 / 7 Support</h3>
                                <p className="text-xl text-[#898989]">Dedicated support</p>
                            </div>
                        </div>
                    </div>
                </div>













                <div className="container px-5 py-24 mx-auto flex flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col">




                    {/* Address Section */}
                    <div className="w-full sm:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mt-16">
                        <h1 className="text-black text-xl -mt-16 font-semibold">
                            Funiro.
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            400 University Drive Suite 200 Coral
                        </p>
                        <span className="block text-sm text-gray-500">Gables,</span>
                        <span className="block text-sm text-gray-500">FL 33134 USA</span>
                    </div>

                    {/* Footer Links Sections */}
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        {/* Column 1 */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-600 hover:text-gray-800 tracking-widest text-sm mb-3">
                                Links
                            </h2>
                            <nav className="list-none mb-10 space-y-8">
                                <li>
                                    <a className="text-gray-900">Home</a>
                                </li>
                                <li>
                                    <a className="text-gray-900">Shop</a>
                                </li>
                                <li>
                                    <a className="text-gray-900">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-900">Contact</a>
                                </li>
                            </nav>
                        </div>

                        {/* Column 2 */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-600 hover:text-gray-800 tracking-widest text-sm mb-3">
                                Help
                            </h2>
                            <nav className="list-none mb-10 space-y-9">
                                <li>
                                    <a className="text-gray-900 ">Payment Options</a>
                                </li>
                                <li>
                                    <a className="text-gray-900">Returns</a>
                                </li>
                                <li>
                                    <a className="text-gray-900">Privacy Policies</a>
                                </li>
                            </nav>
                        </div>

                        {/* Column 3 */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4">
                            <h2 className="title-font font-medium text-gray-600 hover:text-gray-800 tracking-widest text-sm mb-3 -mt-1">
                                Newsletter
                            </h2>
                            <div className="flex flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-auto mb-4 flex items-center space-x-2">
                                    <input
                                        type="email"
                                        id="footer-email"
                                        name="footer-email"
                                        className="bg-transparent border-b-2 border-black focus:ring-0 text-base outline-none text-gray-700 py-1 px-3 w-70"
                                        placeholder="Enter Your Email Address"
                                    />
                                    <button className="flex-shrink-0 inline-flex text-black py-1 px-5 border-b-2 border-black ">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t-2 border-[#D9D9D9] pt-10"></div>

                {/* Footer Bottom Section with Text and Line */}
                <div>
                    <div className="text-xl text-black font-sans mb-2 text-left ml-10">
                        2023 furino. All rights reserved
                    </div>
                </div>



            </footer>




        </div>
    )
}

export default Footer3
