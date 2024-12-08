import React from 'react'
import Image from 'next/image'

const Product2 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#FFFFFF]">
                <div className="container px-5 py-24 mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900">Top Picks For You</h2>
                        <p className="text-gray-500 pt-4">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
                    </div>

                    <div className="flex flex-wrap -m-4">

                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-64 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-center object-cover"
                                    width={300}
                                    height={400}
                                    src={require("../../../public/4.jpg")}
                                />
                            </a>
                            <div className="mt-4 text-center">

                                <h2 className="text-gray-900 title-font text-lg font-medium">Trenton modular sofa_3</h2>
                                <p className="mt-1  text-[#000000] text-xl font-medium pt-4">Rs. 25,000.00</p>
                            </div>
                        </div>


                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-64 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-center object-cover"
                                    width={400}
                                    height={500}
                                    src={require("../../../public/5.jpg")}
                                />
                            </a>
                            <div className="mt-4 text-center">

                                <h2 className="text-gray-900 title-font text-lg font-medium">Granite dining table with </h2>
                                <span className="text-gray-900 title-font text-lg font-medium"> dining chair</span>
                                <p className="mt-1  text-[#000000] text-xl font-medium pt-4">Rs. 25,000.00</p>
                            </div>
                        </div>


                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-64 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-center object-cover"
                                    width={300}
                                    height={400}
                                    src={require("../../../public/6.jpg")}
                                />
                            </a>
                            <div className="mt-4 text-center">

                                <h2 className="text-gray-900 title-font text-lg font-medium">Outdoor bar table and </h2>
                                <span className="text-gray-900 title-font text-lg font-medium">stool</span>
                                <p className="mt-1  text-[#000000]  text-xl font-medium pt-4">Rs. 25,000.00</p>
                            </div>
                        </div>


                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-64 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-center object-cover"
                                    width={300}
                                    height={400}
                                    src={require("../../../public/7.jpg")}
                                />
                            </a>
                            <div className="mt-4 text-center">

                                <h2 className="text-gray-900 title-font text-lg font-medium">Plain console with teak</h2>
                                <span className="text-gray-900 title-font text-lg font-medium">mirror</span>
                                <p className="mt-1 text-[#000000]  text-xl font-medium pt-4">Rs. 25,000.00</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center mt-8">
                        <button className="inline-flex pt-24 ml-48 text-[#000000] border-b-2 border-black pb-1 sm:text-base md:text-lg lg:text-xl mb-4">
                            View More
                        </button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Product2
