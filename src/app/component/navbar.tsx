
// import { FaUserCheck, FaRegHeart } from 'react-icons/fa';
// import { FiSearch } from 'react-icons/fi';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { IoMdMenu } from "react-icons/io";
// import Link from 'next/link';
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const Navbar = () => {
//   return (
//     <div>
//       <header className="text-gray-600 body-font bg-[#FBEBB5] ">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5">


//         <nav className="hidden md:flex items-center justify-center space-x-12 w-full font-medium bg-transparent">
//       {/* Home Link */}
//       <Link href="/" className="text-black">Home</Link>
      
//       {/* Shop Link with conditional white background for shop */}
//       <Link href="/Shop" className="text-black">Shop</Link>
      
//       {/* About Link */}
//       <Link href="/about" className="text-black">About</Link>
      
//       {/* Contact Link */}
//       <Link href="/contact" className="text-black">Contact</Link>
//     </nav>



//           <div className="md:hidden flex items-start justify-end w-full">
//             <Sheet>
//               <SheetTrigger>
//                 <IoMdMenu className="text-4xl text-[#000000]" />
//               </SheetTrigger>
//               <SheetContent>
//                 <SheetHeader>
//                   <h2 className="text-2xl font-bold text-[#000000] mb-6">Menu</h2>
//                   <div className="flex flex-col space-y-4">
//                     <a href="#home" className="text-lg text-[#000000]">Home</a>
//                     <a href="#shop" className="text-lg text-[#000000]">Shop</a>
//                     <a href="#about" className="text-lg text-[#000000]">About</a>
//                     <a href="#contact" className="text-lg text-[#000000]">Contact</a>
//                   </div>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>
//           </div>


//           <div className="hidden md:flex items-center space-x-9 text-2xl">
//             <FaUserCheck />
//             <FiSearch />
//             <FaRegHeart />
//             <AiOutlineShoppingCart />
//           </div>

//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;


'use client';

import { useEffect, useState } from 'react';
import { FaUserCheck, FaRegHeart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if we're on the Home page
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === "/");
    }
  }, []);

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5">
          {/* Navbar with dynamic background */}
          <nav className={`hidden md:flex items-center justify-center space-x-12 w-full font-medium ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
            <Link href="/" className="text-black">Home</Link>
            <Link href="/Shop" className="text-black">Shop</Link>
            <Link href="/about" className="text-black">About</Link>
            <Link href="/contact" className="text-black">Contact</Link>
          </nav>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden flex items-start justify-end w-full">
            <Sheet>
              <SheetTrigger>
                <IoMdMenu className="text-4xl text-[#000000]" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <h2 className="text-2xl font-bold text-[#000000] mb-6">Menu</h2>
                  <div className="flex flex-col space-y-4">
                    <a href="#home" className="text-lg text-[#000000]">Home</a>
                    <a href="#shop" className="text-lg text-[#000000]">Shop</a>
                    <a href="#about" className="text-lg text-[#000000]">About</a>
                    <a href="#contact" className="text-lg text-[#000000]">Contact</a>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Icons for Desktop */}
          <div className="hidden md:flex items-center space-x-9 text-2xl">
            <FaUserCheck />
            <FiSearch />
            <FaRegHeart />
            <AiOutlineShoppingCart />
          </div>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
