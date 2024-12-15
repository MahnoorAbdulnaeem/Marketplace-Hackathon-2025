import React from 'react'
import Image from 'next/image';


const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="text-center mb-8">
                    <div className="text-black pt-11">
                        <p>Share your setup with</p>
                    </div>

                    <h2 className="text-black text-4xl font-semibold">#FuniroFurniture</h2>
                </div>


                <div className="relative" style={{
                    marginTop: '100px',
                    width: '1200px',    // Figma se total width
                    height: '600px'     // Figma se total height
                }}>

                    {/* Image 1 */}
                    <div className="absolute" style={{
                        top: '0px',
                        left: '0px',
                        width: '100px',
                        height: '500px'
                    }}>
                        <Image
                            src="/23.jpg"
                            alt="Image 1"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '10px' }}
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="absolute" style={{
                        top: '0px',
                        left: '120px',
                        width: '400px',
                        height: '250px'
                    }}>
                        <Image
                            src="/24.jpg"
                            alt="Image 2"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>
                    

                    {/* Image 3 */}
                    <div className="absolute" style={{
                        top: '270px',
                        left: '120px',
                        width: '250px',
                        height: '200px'
                    }}>
                        <Image
                            src="/30.jpg"
                            alt="Image 3"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="absolute" style={{
                        top: '0px',
                        left: '540px',
                        width: '300px',
                        height: '400px'
                    }}>
                        <Image
                            src="/26.jpg"
                            alt="Image 4"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>

                    {/* Image 5 */}
                    <div className="absolute" style={{
                        top: '270px',
                        left: '390px',
                        width: '140px',
                        height: '200px'
                    }}>
                        <Image
                            src="/29.jpg"
                            alt="Image 5"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>
                    {/* Image 6 */}
                    <div className="absolute" style={{
                        top: '0px',
                        left: '850px',
                        width: '250px',
                        height: '300px'
                    }}>
                        <Image
                            src="/27.jpg"
                            alt="Image 6"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>

                    {/* Image 7 */}
                    <div className="absolute" style={{
                        top: '310px',     // Pehle 220px thi, ab 300px tak layein taake niche ho jaye
                        left: '860px',
                        width: '210px',
                        height: '200px'
                    }}>
                        <Image
                            src="/31.jpg"
                            alt="Image 7"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>

                    {/* Image 8 */}
                    <div className="absolute" style={{
                        top: '0px',
                        left: '1120px',
                        width: '250px',
                        height: '320px'
                    }}>
                        <Image
                            src="/28.jpg"
                            alt="Image 8"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>

                    {/* Image 9 */}
                    <div className="absolute" style={{
                        top: '340px',     // Pehle 220px thi, ab 300px kiya
                        left: '1090px',
                        width: '200px',
                        height: '200px'
                    }}>
                        <Image
                            src="/32.jpg"
                            alt="Image 9"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>


                </div>



                {/* Footer Content (Columns) */}
                <div className="w-full border-t-2 border-[#D9D9D9] pt-10"></div>

                <div className="container px-5 py-24 mx-auto flex flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col">
                    {/* Address Section */}
                    <div className="w-full sm:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mt-16">
                        <h1 className='text-black text-xl -mt-16 font-semibold'>
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
                        2023 furino. All rights reverved
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;

