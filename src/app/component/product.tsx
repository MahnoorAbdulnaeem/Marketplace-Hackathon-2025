

import Image from "next/image";

const ProductSection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#FAF4F4]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">

                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg overflow-hidden mb-6">
                                <Image
                                    alt="Side table"
                                    className=" object-center w-full h-[350px] md:h-[400px] lg:h-[450px]"
                                    src={require('../../../public/2.jpg')}
                                />
                            </div>
                            <h2 className="title-font text-3xl font-medium text-gray-900  mb-3 -mt-16 -ml-44">
                                Side Table
                            </h2>

                            <button className="inline-flex -ml-48 text-[#000000] border-b-2 border-black pb-1 sm:text-base md:text-lg lg:text-xl mb-4">
                                View More
                            </button>

                        </div>


                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg overflow-hidden mb-6">
                                <Image
                                    alt="Side table"
                                    className="object-cover object-center w-full h-[350px] md:h-[400px] lg:h-[450px]"
                                    src={require('../../../public/3.jpg')}
                                />
                            </div>
                            <h2 className="title-font text-3xl font-medium text-gray-900  mb-3 -mt-16 -ml-44">
                                Side Table
                            </h2>

                            <button className="inline-flex -ml-48 text-[#000000] border-b-2 border-black pb-1 sm:text-base md:text-lg lg:text-xl mb-4">
                                View More
                            </button>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductSection;
