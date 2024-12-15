import React from 'react'
import Navbar from '../component/navbar'
import Hero5 from '../component/hero5'
import Footer4 from '../component/footer4'
import Footer3 from '../component/footer3'

const Page = () => {
    return (
        <div>
            <Navbar />
            <Hero5 />
            <div className="container mx-auto px-4 py-10">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Billing Details - Left Section */}
                    <div className='ml-28'>
                        <h2 className="text-4xl font-semibold mb-6">Billing details</h2>

                        {/* Billing Form */}
                        <form className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex flex-col w-[200px]">
                                    <label className="text-[#000000] font-medium">First Name</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="border p-4 rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col w-[200px]">
                                    <label className="text-[#000000] font-medium">Last Name</label>
                                    <input
                                        type="text"

                                        className="border p-4 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[420px]">
                                <label className="text-[#000000] font-medium">
                                    Company Name (Optional)
                                </label>
                                <input
                                    type="text"

                                    className="border p-4 rounded-lg text-sm"
                                />
                            </div>



                            <div className="flex flex-col">
                                <label className="text-[#000000] font-medium">
                                    Country / Region
                                </label>
                                <select className="border p-4 w-[420px] rounded-lg">
                                    <option>Canada</option>
                                    <option>Pakistan</option>
                                    <option>India</option>
                                    <option>China</option>

                                </select>
                            </div>

                            <div className="flex flex-col w-[420px]">
                                <label className="text-[#000000]  font-medium">Street Address</label>
                                <input
                                    type="text"

                                    className="border p-4 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col w-[420px]">
                                <label className="text-[#000000]  font-medium">Town / City</label>
                                <input
                                    type="text"

                                    className="border p-4 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col w-[]">

                                <label className="text-[#000000] font-medium">
                                    Province
                                </label>
                                <select className="border p-4 w-[420px] rounded-lg">
                                    <option>Punjab</option>
                                    <option>Sindh</option>
                                    <option>Khyber Pakhtunkhwa (KP)</option>
                                    <option>Balochistan</option>

                                </select>
                            </div>

                            <div className="flex flex-col w-[420px]">
                                <label className="text-[#000000]   font-medium">ZIP code</label>
                                <input
                                    type="text"

                                    className="border p-4 rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col w-[420px]">
                                <label className="text-[#000000]   font-medium">Phone</label>
                                <input
                                    type="text"

                                    className="border p-4 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col w-[420px]">
                                <label className="text-[#000000]   font-medium">Email address</label>
                                <input
                                    type="text"

                                    className="border p-4 rounded-lg"
                                />
                            </div>
                               
                            <div className="flex flex-col w-[420px]">
                                <label className="text-[#000000]   font-medium"></label>
                                <input
                                    type="text"
                                      placeholder='Additional information'
                                    className="border p-4 rounded-lg"
                                />
                            </div>



                        </form>
                    </div>

                    {/* Order Summary - Right Section */}
                    <div className='mt-20'>
                        {/* Product and Subtotal Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Product</h2>
                            <span className="text-2xl !text-black font-bold">Subtotal</span>
                        </div>


                        {/* Product Row */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4">
                                <span className="text-[#9F9F9F]">
                                    Asgaard Sofa
                                    <span className="text-[#000000]"> x 1</span>
                                </span>
                                <span className="text-gray-900 font-medium">Rs. 250,000.00</span>
                            </div>


                            {/* Subtotal Row */}
                            <div className="flex justify-between items-center">
                                <span className="text-[#000000]">Subtotal</span>
                                <span className="text-gray-900 font-medium">Rs. 250,000.00</span>
                            </div>

                            {/* Total Row */}
                            <div className="flex justify-between items-center pt-4">
                                <span className="text-lg font-bold">Total</span>
                                <span className="text-[#B88E2F] font-bold text-2xl">Rs. 250,000.00</span>
                            </div>
                        </div>

                        {/* Payment Method Section */}
                        <div className="mt-6 border-t pt-6">
                            {/* Direct Bank Transfer */}
                            <label className="flex items-center space-x-2 mb-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    defaultChecked
                                    className="h-5 w-5 appearance-none border-2 border-[#9F9F9F] rounded-full checked:bg-black checked:border-black"
                                />
                                <span className="text-lg font-medium text-[#9F9F9F]">Direct Bank Transfer</span>
                            </label>
                            <p className="text-[#9F9F9F] text-xl text-justify mb-4">
                                Make your payment directly into our bank account. Please use your Order ID
                                as the payment reference. Your order will not be shipped until the funds
                                have cleared in our account.
                            </p>

                            {/* Second Option */}
                            <label className="flex items-center space-x-2 mb-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="h-5 w-5 appearance-none border-2 border-[#9F9F9F] rounded-full checked:bg-black checked:border-black"
                                />
                                <span className="text-lg font-medium text-[#9F9F9F]">Direct Bank Transfer</span>
                            </label>

                            {/* Cash On Delivery */}
                            <label className="flex items-center space-x-2 mb-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="h-5 w-5 appearance-none border-2 border-[#9F9F9F] rounded-full checked:bg-black checked:border-black"
                                />
                                <span className="text-lg font-medium text-[#9F9F9F]">Cash On Delivery</span>
                            </label>
                        </div>

                        {/* Personal Data Paragraph */}
                        <p className="text-xl text-[#000000] leading-relaxed  text-justify mt-6">
                            Your personal data will be used to support your experience throughout this
                            website, to manage access to your account, and for other purposes described in
                            our{" "}
                            <span className="font-bold">privacy policy</span>.
                        </p>

                        {/* Place Order Button */}
                        <button className="w-72 mt-6 py-4 ml-40  text-black border border-black font-normal rounded-lg ">
                            Place order
                        </button>
                    </div>






                </div>
            </div>


            <Footer3 />
        </div>
    )
}

export default Page
