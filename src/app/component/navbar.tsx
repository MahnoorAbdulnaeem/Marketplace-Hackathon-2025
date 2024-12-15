





// "use client";
// import { FaRegHeart } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { IoMdMenu } from "react-icons/io";
// import Link from "next/link";
// import Image from "next/image";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // For navigation in Next.js

// const Navbar = () => {
//   const [isSearchActive, setIsSearchActive] = useState(false); // State to toggle search bar
//   const [searchQuery, setSearchQuery] = useState(""); // State to track search input
//   const router = useRouter(); // For programmatic navigation

//   // Handle Search Bar Toggle
//   const handleSearchToggle = () => {
//     setIsSearchActive(true); // Show search bar
//   };

//   const closeSearchBar = () => {
//     setIsSearchActive(false); // Restore icons
//     setSearchQuery(""); // Clear search input
//   };

//   const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && searchQuery.trim() !== "") {
//       const query = searchQuery.trim().toLowerCase(); // Normalize input
  
//       // Define allowed routes as a constant
//       const routes: Record<string, string> = {
//         home: "/",
//         shop: "/Shop",
//         blog: "/Blog",
//         contact: "/Contact",
//         cart : "/Cart",
//         product : "/Product",
//         check : '/Check',
//         comparison : "/Comparison"
//       };
  
//       // Check if the query matches one of the keys in the routes
//       if (query in routes) {
//         router.push(routes[query as keyof typeof routes]); // Navigate to the appropriate page
//       } else {
//         alert("Page not found!"); // Handle invalid inputs
//       }
  
//       closeSearchBar(); // Close search bar after navigation
//     }
//   };
  

//   return (
//     <div>
//       <header className="text-gray-600 body-font bg-[#FFFFFF]">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-2">
//             <Link href="/">
//               {/* First Logo */}
//               <Image
//                 src="/16.jpg"
//                 width={60}
//                 height={80}
//                 alt="Logo"
//                 className="w-auto h-auto"
//               />
//             </Link>

//             <Link href="/">
//               {/* Second Logo */}
//               <Image
//                 src="/17.jpg"
//                 width={200}
//                 height={700}
//                 alt="Logo"
//               />
//             </Link>
//           </div>

//           {/* Navbar Links for Desktop */}
//           <nav className="hidden md:flex items-center justify-center space-x-16 w-full font-medium text-lg bg-transparent">
//             <Link href="/" className="text-black hover:text-[#B88E2F]">
//               Home
//             </Link>
//             <Link href="/Shop" className="text-black hover:text-[#B88E2F]">
//               Shop
//             </Link>
//             <Link href="/Blog" className="text-black hover:text-[#B88E2F]">
//               Blog
//             </Link>
//             <Link href="/Contact" className="text-black hover:text-[#B88E2F]">
//               Contact
//             </Link>
//           </nav>

//           {/* Icons Section */}
//           <div className="hidden md:flex items-center space-x-12 text-3xl">
//             {!isSearchActive ? (
//               <>
//                 <Image
//                   src="/19.jpg"
//                   width={30}
//                   height={30}
//                   alt="Logo"
//                   className="w-9 h-9"
//                 />
//                 <FiSearch
//                   className="w-10 h-15 cursor-pointer"
//                   onClick={handleSearchToggle} // Show search bar on click
//                 />
//                 <FaRegHeart className="w-10 h-15" />
//                 <AiOutlineShoppingCart className="w-10 h-15" />
//               </>
//             ) : (
//               <div className="w-full relative">
//                 <input
//                   type="text"
//                   placeholder="Search "
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)} // Track input value
//                   onKeyDown={handleSearchSubmit} // Handle Enter key press
//                   className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#B88E2F]"
//                   autoFocus
//                 />
//                 <button
//                   className="absolute right-2 top-2 text-gray-600 hover:text-black"
//                   onClick={closeSearchBar} // Restore icons on click
//                 >
//                   ✕
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;





//
"use client";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false); // State to toggle search bar
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
  const router = useRouter();

  const handleSearchToggle = () => {
    setIsSearchActive(true); // Show search bar
  };

  const closeSearchBar = () => {
    setIsSearchActive(false); // Restore icons
    setSearchQuery(""); // Clear search input
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      const query = searchQuery.trim().toLowerCase();
      const routes: Record<string, string> = {
        home: "/",
        shop: "/Shop",
        blog: "/Blog",
        contact: "/Contact",
        cart: "/Cart",
        product: "/Product",
        check: '/Check',
        comparison: "/Comparison",
      };

      if (query in routes) {
        router.push(routes[query as keyof typeof routes]); // Navigate to the appropriate page
      } else {
        alert("Page not found!"); // Handle invalid inputs
      }

      closeSearchBar(); // Close search bar after navigation
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      <header className="text-gray-600 body-font bg-[#FFFFFF]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 justify-between w-full lg:w-auto">
            <Link href="/">
              <Image
                src="/16.jpg"
                width={60}
                height={80}
                alt="Logo"
                className="w-auto h-auto hidden sm:block" // Hide on small screens
              />
            </Link>

            <Link href="/">
              <Image
                src="/17.jpg"
                width={200}
                height={700}
                alt="Logo"
                className="hidden sm:block" // Hide on small screens
              />
            </Link>
          </div>

          {/* Navbar Links for Desktop */}
          <nav className="hidden md:flex items-center justify-center space-x-16 w-full font-medium text-lg bg-transparent">
            <Link href="/" className="text-black hover:text-[#B88E2F]">Home</Link>
            <Link href="/Shop" className="text-black hover:text-[#B88E2F]">Shop</Link>
            <Link href="/Blog" className="text-black hover:text-[#B88E2F]">Blog</Link>
            <Link href="/Contact" className="text-black hover:text-[#B88E2F]">Contact</Link>
          </nav>

          {/* Icons Section */}
          <div className="hidden md:flex items-center space-x-12 text-3xl">
            {!isSearchActive ? (
              <>
                <Image
                  src="/19.jpg"
                  width={30}
                  height={30}
                  alt="Logo"
                  className="w-9 h-9"
                />
                <FiSearch
                  className="w-10 h-15 cursor-pointer"
                  onClick={handleSearchToggle}
                />
                <FaRegHeart className="w-10 h-15" />
                <AiOutlineShoppingCart className="w-10 h-15" />
              </>
            ) : (
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#B88E2F]"
                  autoFocus
                />
                <button
                  className="absolute right-2 top-2 text-gray-600 hover:text-black"
                  onClick={closeSearchBar}
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <IoMdMenu
              className="text-3xl cursor-pointer"
              onClick={toggleSidebar} // Toggle sidebar visibility
            />
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-700 bg-opacity-50 z-50 transition-all duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="bg-white w-3/4 h-full p-6 flex flex-col items-start">
          <div className="flex justify-between items-center w-full mb-4">
            <span className="text-lg font-bold">Menu</span>
            <button
              className="text-lg text-gray-600"
              onClick={toggleSidebar} // Close the sidebar
            >
              ✕
            </button>
          </div>
          <nav className="space-y-6 mt-6 w-full">
            <Link href="/" className="block text-lg text-black hover:text-[#B88E2F]">Home</Link>
            <Link href="/Shop" className="block text-lg text-black hover:text-[#B88E2F]">Shop</Link>
            <Link href="/Blog" className="block text-lg text-black hover:text-[#B88E2F]">Blog</Link>
            <Link href="/Contact" className="block text-lg text-black hover:text-[#B88E2F]">Contact</Link>
            <Link href="/Check" className="block text-lg text-black hover:text-[#B88E2F]">Check</Link>
            <Link href="/Product" className="block text-lg text-black hover:text-[#B88E2F]">Product</Link>
            <Link href="/Cart" className="block text-lg text-black hover:text-[#B88E2F]">Cart</Link>
            <Link href="/Comparison" className="block text-lg text-black hover:text-[#B88E2F]">Comparison</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
