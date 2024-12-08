import React from 'react'


const Footer = () => {
    return (
        <div>
    <footer className="text-gray-600 body-font">
        {/* Full-width Image with Overlay Text */}
        <div className="w-full h-[500px] relative" style={{ backgroundImage: 'url(/13.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-black ml-8 sm:ml-36">Our Instagram</h1>
                <p className="text-lg mt-2 text-black ml-8 sm:ml-36">Follow our store on Instagram</p>

                {/* Rounded button */}
                <a 
                    href="#" 
                    className="mt-6 ml-8 sm:ml-36 inline-block py-3 px-8 sm:px-14 text-lg font-medium text-black bg-[#FAF4F4] rounded-full transition-all ease-in-out shadow-lg"
                >
                    Follow Us
                </a>
            </div>
        </div>

        {/* Footer Content (Columns) */}
        <div className="container px-5 py-24 mx-auto flex flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col">
            {/* Address Section */}
            <div className="w-full sm:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mt-16">
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
                            {/* Input Field with Placeholder */}
                            <input
                                type="email"
                                id="footer-email"
                                name="footer-email"
                                className="bg-transparent border-b-2 border-black focus:ring-0 text-base outline-none text-gray-700 py-1 px-3 w-70"
                                placeholder="Enter Your Email Address"
                            />
                            {/* Subscribe Button */}
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
                2022 Meubel House. All rights reserved.
            </div>
        </div>
    </footer>
</div>

    );
}

export default Footer;

