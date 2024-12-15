// import React from 'react'
// import Navbar from '../component/navbar'
// import Hero4 from '../component/hero4'
// import Footer4 from '../component/footer4'
// import Image from 'next/image'
// const page = () => {
//     return (
//         <div>
//             <Navbar />
//             <Hero4 />


//             <div className="max-w-7xl mx-auto px-4 py-10">
//                 {/* Pink Box Section (Aligned in a single line) */}
//                 <div className="bg-[#F9F1E7] p-4  mb-6">
//                     <div className="flex justify-between space-x-6">
//                         <div className="flex-1 text-center">
//                             <h4 className="font-semibold text-lg text-[#000000]">Product</h4>

//                         </div>
//                         <div className="flex-1 text-center">
//                             <h4 className="font-semibold text-lg text-[#000000]">Price</h4>

//                         </div>
//                         <div className="flex-1 text-center">
//                             <h4 className="font-semibold text-lg text-[#000000]">Quantity</h4>

//                         </div>
//                         <div className="flex-1 text-center">
//                             <h4 className="font-semibold text-lg text-[#000000]">Subtotal</h4>

//                         </div>
//                     </div>
//                 </div>

//                 {/* Cart Details Section */}
//                 <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-6">
//                     <div className="flex-1 bg-white p-6 py-20">

//                         {/* Product Item */}
//                         <div className="flex items-center justify-between mb-6">
//                             {/* Product Image and Details */}
//                             <div className="flex items-center space-x-2">
//                                 <Image
//                                     src="/77.jpg"
//                                     alt="Asgaard sofa"
//                                     width={90}
//                                     height={64}
//                                     className="object-cover rounded-md"
//                                 />
//                                 <div className="space-x-2">
//                                     <p className="font-medium text-lg ml-8 text-[#9F9F9F]">Asgaard sofa</p>

//                                 </div>
//                             </div>

//                             <p className="text-md text-gray-500 space-x-2">Rs. 250,000.00</p>
//                             <input
//                                 type="number"
//                                 value="1"
//                                 className="w-11 h-10 text-center border border-gray-300 rounded-md"
//                                 min="1"
//                                 max="3"
//                                 step="1"
//                             />


//                             <span className="text-md text-[#000000]">Rs. 250,000.00</span>
//                             <div className="cursor-pointer">
//                                 <Image
//                                     src="/79.jpg" // Replace with the correct image path for your trash bin logo
//                                     alt="Delete Item"
//                                     width={24}
//                                     height={24}
//                                 />
//                             </div>
//                         </div>
//                     </div>


//                     {/* Cart Totals Section */}
//                     <div className="bg-[#F9F1E7] p-16 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
//     <h3 className="text-4xl font-semibold mb-8 text-center ">Cart Totals</h3>
//     <div className="flex justify-between mb-8">
//         <span className="font-medium text-gray-700">Subtotal</span>
//         <span className="font-semibold text-gray-900">Rs. 250,000.00</span>
//     </div>
//     <div className="flex justify-between mb-10">
//         <span className="font-medium text-gray-700 ">Total</span>
//         <span className="font-semibold text-[#B88E2F] ml-10">Rs. 250,000.00</span>
//     </div>
//     <button className="w-56 py-4 border-2 border-[#000000] text-[#000000] font-normal text-xl ml-10 rounded-2xl bg-transparent ">
//     Check Out
// </button>

// </div>




//                 </div>
//             </div>


//             <Footer4 />
//         </div>
//     )
// }

// export default page




'use client'

import React, { useState } from 'react'
import Navbar from '../component/navbar'
import Hero4 from '../component/hero4'
import Footer4 from '../component/footer4'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    const [quantity, setQuantity] = useState(1);  // Manage quantity state
    const [message, setMessage] = useState("");  // Manage message state

    // Increment quantity
    const handleIncrement = () => {
        if (quantity < 100) {
            setQuantity(quantity + 1);
            setMessage("Added 1 more");
        }
    };

    // Decrement quantity
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setMessage("Removed 1");
        }
    };

    return (
        <div>
            <Navbar />
            <Hero4 />

            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Product Box */}
                <div className="bg-[#F9F1E7] p-4 mb-6">
                    <div className="flex justify-between space-x-6">
                        <div className="flex-1 text-center"><h4 className="font-semibold text-lg">Product</h4></div>
                        <div className="flex-1 text-center"><h4 className="font-semibold text-lg">Price</h4></div>
                        <div className="flex-1 text-center"><h4 className="font-semibold text-lg">Quantity</h4></div>
                        <div className="flex-1 text-center"><h4 className="font-semibold text-lg">Subtotal</h4></div>
                    </div>
                </div>

                {/* Cart Details */}
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-6">
                    <div className="flex-1 bg-white p-6 py-36">
                        {/* Product Item */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <Image src="/77.jpg" alt="Asgaard sofa" width={90} height={64} className="object-cover rounded-md" />
                                <p className="font-medium text-lg ml-8">Asgaard sofa</p>
                            </div>

                            <p className="text-md text-gray-500">Rs. 250,000.00</p>

                            {/* Quantity Input */}
                            <div className="flex items-center space-x-4">
                                <button onClick={handleDecrement}>-</button>
                                <input type="number" value={quantity} readOnly className="w-11 h-10 text-center border" />
                                <button onClick={handleIncrement}>+</button>
                            </div>

                            <span className="text-md">Rs. {250000 * quantity}.00</span>
                            <div className="cursor-pointer">
                                <Image src="/79.jpg" alt="Delete Item" width={24} height={24} />
                            </div>
                        </div>

                        {/* Message */}
                        <p className="text-center text-gray-500">{message}</p>
                    </div>

                    {/* Cart Totals */}
                    <div className="bg-[#F9F1E7] p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
                        <h3 className="text-4xl font-semibold mb-6 text-center">Cart Totals</h3>
                        <div className="flex justify-between mb-6">
                            <span>Subtotal</span>
                            <span>Rs. {250000 * quantity}.00</span>
                        </div>
                        <div className="flex justify-between mb-8 ">
                            <span>Total</span>
                            <span className='text-[#B88E2F]'>Rs. {250000 * quantity}.00</span>
                        </div>
                        <Link href="/Check">
                        <button className="w-56 ml-16 py-4 border-2 border-black text-black font-bold rounded-2xl">
                            Check Out
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer4 />
        </div>
    );
}

export default page;
