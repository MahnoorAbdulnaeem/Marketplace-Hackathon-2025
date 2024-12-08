import React from 'react'
import Image from 'next/image'
import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
const Product4 = () => {
    return (

        <div>
            <section className="text-gray-600 body-font bg-[#FFFFFF]">
                <div className="container px-5 py-24 mx-auto">


                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900">Our Blogs</h2>
                        <p className="text-gray-500 pt-4">Find a bright idea to suit your taste with our great selection</p>
                    </div>


                    <div className="flex flex-wrap -m-4">


                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4">
                            <a className="block relative w-full h-[400px] rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full"
                                    src={require("../../../public/9.jpg")}
                                    width={600}
                                    height={400}
                                />
                            </a>
                            <div className="mt-4 text-center">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Going all-in with millennial design</h2>
                                <button className="inline-flex pt-4 ml-0 text-[#000000] border-b-2 border-black pb-1 sm:text-base md:text-lg lg:text-xl mb-4">
                                    Read More
                                </button>
                                <p className="mt-1 text-[#000000] text-xl font-medium pt-4 flex items-center justify-center ml-20 sm:justify-start">
                                    <GoClock className="mr-2 text-lg" /> 5 min
                                    <CiCalendar className="mx-2 text-lg" /> 12th Oct 2022
                                </p>
                            </div>
                        </div>


                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4">
                            <a className="block relative w-full h-[400px] rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full"
                                    src={require("../../../public/10.jpg")}
                                    width={600}
                                    height={400}
                                />
                            </a>
                            <div className="mt-4 text-center">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Going all-in with millennial design</h2>
                                <button className="inline-flex pt-4 ml-0 text-[#000000] border-b-2 border-black pb-1 sm:text-base md:text-lg lg:text-xl mb-4">
                                    Read More
                                </button>
                                <p className="mt-1 text-[#000000] text-xl font-medium pt-4 flex items-center justify-center ml-20 sm:justify-start">
                                    <GoClock className="mr-2 text-lg" /> 5 min
                                    <CiCalendar className="mx-2 text-lg" /> 12th Oct 2022
                                </p>
                            </div>
                        </div>


                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4">
                            <a className="block relative w-full h-[400px] rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full"
                                    src={require("../../../public/11.jpg")}
                                    width={600}
                                    height={400}
                                />
                            </a>
                            <div className="mt-4 text-center">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Going all-in with millennial design</h2>
                                <button className="inline-flex pt-4 ml-0 text-[#000000] border-b-2 border-black pb-1 sm:text-base md:text-lg lg:text-xl mb-4">
                                    Read More
                                </button>
                                <p className="mt-1 text-[#000000] text-xl font-medium pt-4 flex items-center justify-center ml-20 sm:justify-start">
                                    <GoClock className="mr-2 text-lg" /> 5 min
                                    <CiCalendar className="mx-2 text-lg" /> 12th Oct 2022
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-center mt-8">
                        <button className="inline-flex pt-24 ml-0 text-[#000000] border-b-2 border-black pb-1 sm:text-base md:text-lg lg:text-xl mb-4">
                            View All Post
                        </button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Product4
