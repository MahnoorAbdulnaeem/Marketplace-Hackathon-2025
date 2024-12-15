import React from 'react'
import Navbar from '../component/navbar'
import Hero6 from '../component/hero6'
import Footer4 from '../component/footer4'

const page = () => {
    return (
        <div>
            <Navbar />
            <Hero6 />
            <div className="max-w-screen-xl mx-auto p-4">
                {/* Top Section */}
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                    {/* Go to Product Section */}
                    <div className="flex flex-col ml-20">
                        <h2 className="text-lg font-semibold text-justify -mt-24">
                            Go to Product
                            <br></br>page for more <br></br>Products
                        </h2>
                        <button className="text-[#727272] underline underline-offset-8 text-sm mt-1 -ml-10">
                            View More
                        </button>
                    </div>


                    {/* Product 1 */}
                    <div className="flex flex-col items-center mx-4 mt-10 ml-20">
                        <div className="bg-[#F9F1E7] p-2 rounded-lg w-56 h-36 flex justify-center items-center">
                            <img
                                src="/85.jpg"
                                alt="Asgaard Sofa"
                                className="h-36 w-44 object-contain"
                            />
                        </div>
                        {/* Details */}
                        <h3 className="text-xl font-semibold text-center text-[#000000] mt-4 -ml-20">Asgaard Sofa</h3>
                        <p className="text-lg text-[#000000] text-center mt-1 -ml-20">Rs. 250,000.00</p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                            {/* Stars */}
                            <p className="text-xl text-[#000000] -mt-4 ml-9">4.7</p>
                            <div className="flex mb-4 ">

                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>

                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-[#9F9F9F]">
                                        204 Reviews
                                    </a>

                                </span>
                            </div>

                        </div>
                    </div>


                    {/* Product 2 */}
                    {/* Product 1 */}
                    <div className="flex flex-col items-center mx-4 mt-10 -ml-20">
                        <div className="bg-[#F9F1E7] p-2 rounded-lg w-56 h-36 flex justify-center items-center">
                            <img
                                src="/91.jpg"
                                alt="Asgaard Sofa"
                                className="h-40 w-52 object-contain -mt-12"
                            />
                        </div>
                        {/* Details */}
                        <h3 className="text-xl font-semibold text-center text-[#000000] mt-4 -ml-16">Outdoor Sofa Set</h3>
                        <p className="text-lg text-[#000000] text-center mt-1 -ml-20">Rs. 224,000.00</p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                            {/* Stars */}
                            <p className="text-xl text-[#000000] -mt-4 ml-9">4.2</p>
                            <div className="flex mb-4 ">

                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5 text-[#FFC700]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>

                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-[#9F9F9F]">
                                        145 Reviews
                                    </a>

                                </span>
                            </div>

                        </div>
                    </div>



                    {/* Add Product Button */}
                    <div className="flex flex-col items-center -mt-40">
                        {/* Heading */}
                        <h2 className="text-2xl font-bold text-[#000000] mb-4">Add A Product</h2>

                        {/* Button */}
                        <button className="bg-[#C19137] text-white px-6 py-3 rounded-md text-lg font-semibold flex items-center gap-2 hover:bg-[#a87f2e] transition duration-300">
                            Choose a Product
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Column 1 */}
                    <div className="p-6 border-r">
                        <h4 className="font-semibold text-lg mb-4">General</h4>
                        <p className="text-sm text-gray-600 mb-2">Sales Package: 1 sectional sofa</p>
                        <p className="text-sm text-gray-600 mb-2">Model Number: TFCLBIGRBL6SRHS</p>
                        <p className="text-sm text-gray-600 mb-2">Secondary Material: Solid Wood</p>
                        <p className="text-sm text-gray-600 mb-2">Configuration: L-shaped</p>
                        <p className="text-sm text-gray-600 mb-2">Upholstery Material: Fabric + Cotton</p>
                    </div>

                    {/* Column 2 */}
                    <div className="p-6 border-r ">
                        <h4 className="font-semibold text-lg mb-4">Product</h4>
                        <p className="text-sm text-gray-600 mb-2">Filling Material: Foam</p>
                        <p className="text-sm text-gray-600 mb-2">Finish Type: Matte</p>
                        <p className="text-sm text-gray-600 mb-2">Adjustable Headrest: Yes</p>
                        <p className="text-sm text-gray-600 mb-2">Maximum Load Capacity: 300 KG</p>
                        <p className="text-sm text-gray-600 mb-2">Origin of Manufacture: India</p>
                    </div>

                    {/* Column 3 */}
                    <div className="p-6">
                        <h4 className="font-semibold text-lg mb-4">Dimensions</h4>
                        <p className="text-sm text-gray-600 mb-2">Width: 265.32 cm</p>
                        <p className="text-sm text-gray-600 mb-2">Height: 76 cm</p>
                        <p className="text-sm text-gray-600 mb-2">Depth: 167.76 cm</p>
                        <p className="text-sm text-gray-600 mb-2">Weight: 45 KG</p>
                        <p className="text-sm text-gray-600 mb-2">Seat Height: 41.52 cm</p>
                        <p className="text-sm text-gray-600 mb-2">Leg Height: 5.46 cm</p>
                    </div>

                    {/* Warranty Row */}
                    <div className="col-span-3 p-6 border-t">
                        <h4 className="font-semibold text-lg mb-4">Warranty</h4>
                        <p className="text-sm text-gray-600">
                            Warranty Period: 1 Year | Warranty Type: Manufacturing Defects Only
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                            Warranty Coverage: Covers structural and material defects.
                        </p>

                        {/* Add to Cart Button */}
                        <div className="flex justify-end">
                            <button className="bg-[#C19137] text-white px-11 py-4  text-sm font-semibold hover:bg-[#a87f2e] transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>


            </div>


            <Footer4 />
        </div>
    )
}

export default page
