// import React from 'react'

// const Hero1 = () => {
//   return (
//     <div>
//        <div className="relative w-full h-[500px] bg-contain bg-center" style={{ backgroundImage: "url('/50.jpg')" }}>
//       {/* Gradient Overlay */}
//       <div className="absolute  w-full h-full ">
//         <div className="flex justify-center items-center h-full">
//           <div className="text-center text-white px-6 sm:px-12">
//             {/* Heading Text */}
//             <h1 className="text-4xl md:text-6xl font-bold">Shop</h1>
//             {/* Subheading Text */}
//             <p className="text-xl mt-4">Home &gt; Shop</p>
//           </div>
//         </div>
//       </div>


// </div>

// {/* Colored section below hero */}
// <div className="bg-[#FAF3EA] py-12">
//   <div className="container mx-auto text-center">
//     <p className="text-lg text-gray-700">Discover our amazing collection of furniture.</p>
//   </div>
// </div>



//     </div>
//   )
// }

// export default Hero1
// import React from 'react'
// import Image from 'next/image'
// const Hero1 = () => {
//     return (
//         <div>
//             {/* Hero Section with Image */}
//             <div className="relative w-full h-[350px] bg-cover bg-fill" style={{ backgroundImage: "url('/50.jpg')" }}>
//                 {/* Gradient Overlay */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b ">


//                     <div className="flex justify-center items-center h-full">
//                         <div className="text-center text-white px-6 sm:px-12">
//                             {/* Heading Text */}
//                             <h1 className="text-2xl md:text-6xl font-medium text-[#000000]">Shop</h1>
//                             {/* Subheading Text */}
//                             <p className="text-xl font-semibold mt-5 text-[#000000] ">
//                                 <span>Home  &gt; </span>
//                                 <span className="text-[#000000] text-md font-normal">Shop</span>
//                             </p>


//                         </div>
//                     </div>



//                 </div>
//             </div>
//             <div className="bg-[#F9F1E7] py-8">
//                 <div className="container mx-auto text-center">
//                     <p className="text-lg text-gray-700">Discover our amazing collection of furniture.</p>
//                 </div>
//             </div>
//             {/* Filter and Sorting Section */}

//         </div>
//     )
// }

// export default Hero1



// import React from 'react';
// import Image from 'next/image';

// const Hero1 = () => {
//     return (
//         <div>
//             {/* Hero Section with Image */}
//             <div className="relative w-full h-[350px] bg-cover bg-fill" style={{ backgroundImage: "url('/50.jpg')" }}>
//                 {/* Gradient Overlay */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b ">

//                     <div className="flex justify-center items-center h-full">
//                         <div className="text-center text-white px-6 sm:px-12">
//                             {/* Heading Text */}
//                             <h1 className="text-2xl md:text-6xl font-medium text-[#000000]">Shop</h1>
//                             {/* Subheading Text */}
//                             <p className="text-xl font-semibold mt-5 text-[#000000] ">
//                                 <span>Home  &gt; </span>
//                                 <span className="text-[#000000] text-md font-normal">Shop</span>
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Subheading Section */}

//             {/* Filter and Sorting Section */}
//             <div className="bg-[#F9F1E7] py-4">
//                 <div className="container mx-auto flex justify-between items-center">
//                     {/* Filter Section */}
//                     <div className="flex items-center space-x-4">
//                         <label htmlFor="filter" className="text-sm text-gray-700">Filter</label>
//                         <div className="relative">
//                             <select
//                                 id="filter"
//                                 className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
//                             >
//                                 <option>Category 1</option>
//                                 <option>Category 2</option>
//                                 <option>Category 3</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Showing Section */}
//                     <div className="flex items-center space-x-4">
//                         <span className="text-sm text-gray-700">Showing 1-16 of 32 results</span>
//                     </div>

//                     {/* Sorting Section */}
//                     <div className="flex items-center space-x-4">
//                         <span className="text-sm text-gray-700">Show</span>
//                         <div className="relative">
//                             <select
//                                 id="show"
//                                 className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
//                             >
//                                 <option>16</option>
//                                 <option>32</option>
//                                 <option>48</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Sort by Section */}
//                     <div className="flex items-center space-x-4">
//                         <span className="text-sm text-gray-700">Sort by</span>
//                         <div className="relative">
//                             <select
//                                 id="sort"
//                                 className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
//                             >
//                                 <option>Default</option>
//                                 <option>Price</option>
//                                 <option>Popularity</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Product Cards */}
//             <div className="container mx-auto py-6">
//                 {/* You can add your products here */}
//             </div>
//         </div>
//     );
// };

// export default Hero1;



import React from 'react';
import Image from 'next/image';
import { PiDotsSixBold } from "react-icons/pi";
const Hero1 = () => {
    return (
        // <div>
        //     {/* Hero Section with Image */}
        //     <div className="relative w-full h-[350px] bg-cover bg-fill" style={{ backgroundImage: "url('/50.jpg')" }}>
        //         {/* Gradient Overlay */}
        //         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b ">

        //             <div className="flex justify-center items-center h-full">
        //                 <div className="text-center text-white px-6 sm:px-12">
        //                     {/* Heading Text */}
        //                     <h1 className="text-2xl md:text-6xl font-medium text-[#000000]">Shop</h1>
        //                     {/* Subheading Text */}
        //                     <p className="text-xl font-semibold mt-5 text-[#000000] ">
        //                         <span>Home  &gt; </span>
        //                         <span className="text-[#000000] text-md font-normal">Shop</span>
        //                     </p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>

        //     {/* Subheading Section */}

        //     {/* Filter and Sorting Section */}
        //     <div className="bg-[#F9F1E7] py-4">
        //         <div className="container mx-auto flex justify-between items-center">
        //             {/* New Section with Logo, Text, Icon, and Line */}
        //             <div className="flex items-center space-x-4">
        //                 {/* Logo Image */}
        //                 <Image src="/52.jpg" alt="Logo" width={30} height={30} />

        //                 {/* Text */}
        //                 <span className="text-2xl font-semibold text-gray-700">Filter</span>

        //                 {/* Icon */}
        //                 <Image src="/58.jpg" alt="Icon" width={30} height={50} />
        //                 <Image src="/55.jpg" alt="Icon" width={30} height={50} />


        //                 {/* Small Line */}
        //                 <div className="h-12 w-px bg-[#9F9F9F]"></div>

        //             </div>

        //             {/* Showing Section */}
        //             <div className="flex items-center space-x-4">
        //                 <span className="text-sm text-gray-700">Showing 1-16 of 32 results</span>
        //             </div>

        //             {/* Sorting Section */}
        //             <div className="flex items-center space-x-4">
        //                 <span className="text-sm text-gray-700">Show</span>
        //                 <div className="relative">
        //                     <select
        //                         id="show"
        //                         className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
        //                     >
        //                         <option>16</option>
        //                         <option>32</option>
        //                         <option>48</option>
        //                     </select>
        //                 </div>
        //             </div>

        //             {/* Sort by Section */}
        //             <div className="flex items-center space-x-4">
        //                 <span className="text-sm text-gray-700">Sort by</span>
        //                 <div className="relative">
        //                     <select
        //                         id="sort"
        //                         className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
        //                     >
        //                         <option>Default</option>
        //                         <option>Price</option>
        //                         <option>Popularity</option>
        //                     </select>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Product Cards */}
        //     <div className="container mx-auto py-6">
        //         {/* You can add your products here */}
        //     </div>
        // </div>

<div>
    {/* Hero Section with Image */}
    <div className="relative w-full h-[350px] bg-cover bg-fill" style={{ backgroundImage: "url('/50.jpg')" }}>
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b">
            <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 sm:px-12">
                    {/* Heading Text */}
                    <h1 className="text-2xl md:text-6xl font-medium text-[#000000]">Shop</h1>
                    {/* Subheading Text */}
                    <p className="text-xl font-semibold mt-5 text-[#000000] ">
                        <span>Home  &gt; </span>
                        <span className="text-[#000000] text-md font-normal">Shop</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Subheading Section */}

    {/* Filter and Sorting Section */}
    <div className="bg-[#F9F1E7] py-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* New Section with Logo, Text, Icon, and Line */}
            <div className="flex items-center space-x-3"> {/* Reduced space-x to make them closer */}
                {/* Logo Image */}
                <Image src="/52.jpg" alt="Logo" width={30} height={30} />

                {/* Text */}
                <span className="text-2xl font-semibold text-gray-700">Filter</span>

                {/* Icon */}
                <Image src="/58.jpg" alt="Icon" width={30} height={50} />
                <Image src="/55.jpg" alt="Icon" width={30} height={50} />

                {/* Small Line */}
                <div className="h-12 w-px bg-[#9F9F9F]"></div>

                <div className="flex items-center space-x-4 text-lg font-normal text-[#000000] -ml-52"> {/* Reduced margin */}
                <span>Showing 1–16 of 32 results</span>
            </div>



            </div>

          

            {/* Sorting Section */}
            <div className="flex items-center space-x-4 text-2xl font-medium text-[#000000] ml-60"> {/* Reduced margin */}
                <span>Show</span>
                <div className="relative">
                    <select
                        id="show"
                        className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
                    >
                        <option>16</option>
                        <option>32</option>
                        <option>48</option>
                    </select>
                </div>
            </div>

            {/* Sort by Section */}
            <div className="flex items-center space-x-4 text-2xl font-normal text-[#000000] ml-2"> {/* Reduced margin */}
                <span>Sort by</span>
                <div className="relative">
                    <select
                        id="sort"
                        className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
                    >
                        <option>Default</option>
                        <option>Price</option>
                        <option>Popularity</option>
                    </select>
                </div>
            </div>


            
        </div>
    </div>

    {/* Product Cards */}
    <div className="container mx-auto py-6">
        {/* You can add your products here */}
    </div>
</div>




    );
};

export default Hero1;
