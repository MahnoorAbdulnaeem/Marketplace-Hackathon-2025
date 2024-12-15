



// import React from 'react'
// import Image from 'next/image'

// const Product3 = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font bg-[#FCF8F3]">
//         {/* Background spacing */}
//         <div className="container mx-auto flex px-32 py-56 md:flex-row flex-col items-center">

//           {/* Left Text Section */}
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h1 className="title-font sm:text-4xl text-5xl mb-5 font-bold text-black ">
//               50+ Beautiful rooms

//               <br className="hidden lg:inline-block" />
//               inspiration
//             </h1>



//             <p className="mb-8 leading-relaxed">
//               Our designer already made a lot of beautiful
//               prototype of rooms that inspire you
//             </p>
//             <div className="flex justify-center">
//               <button className="inline-flex text-white bg-[#B88E2F] border-0 py-3 px-9 focus:outline-none text-lg">
//                 Explore More
//               </button>
//             </div>
//           </div>


//           {/* Right Image Section */}
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
//             {/* Container for two images side by side */}
//             <div className="flex space-x-4">

//               {/* First Image with White Box Overlay and Arrow */}
//               <div className="w-[5000px] h-full relative rounded overflow-hidden">
//                 <Image
//                   src="/36.jpg"
//                   alt="Living"
//                   width={1200}  // Ensure width is the same for both
//                   height={500}  // Set height consistently
//                   style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                 />
//                 {/* White box overlay */}
//                 <div className="absolute bottom-4 left-12 bg-white p-7 rounded shadow opacity-70">
//                   <p className="text-sm text-[#616161]">01 — Bed Room</p>
//                   <h3 className="text-xl font-semibold text-[#3A3A3A] mt-1">
//                     Inner Peace
//                   </h3>
//                 </div>

//                 {/* Arrow inside the first image */}
//                 <div className="absolute bottom-2 left-[217px] bg-[#B88E2F] text-white w-8 h-8 flex items-center justify-center ">
//                   →
//                 </div>
//               </div>

//               <div className="w-[3900px] h-full relative rounded overflow-hidden">
//                 <Image
//                   src="/37.jpg"
//                   alt="Living"
//                   width={1600}  // Adjusted the width
//                   height={600}  // Adjusted the height
//                   style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                 />


//                 {/* Round Arrow outside the second image */}
//                 <div className="absolute bottom-2 right-2 top-36 bg-white text-[#B88E2F] w-10 h-10 flex items-center justify-center rounded-full">
//                   &gt;
//                 </div>
//               </div>

//             </div>



//             <div className="absolute bottom-7 left-96 transform -translate-x-1/2 flex justify-center items-center">
//               <Image
//                 src="/41.jpg"  // Use your logo image here
//                 alt="Logo"
//                 width={200}  // Adjust the size of the logo as needed
//                 height={200}
//                 style={{ objectFit: 'contain' }}
//               />
//             </div>


//           </div>
//         </div>
//       </section >
//     </div >
//   )
// }

// export default Product3



//demo



import React from 'react'
import Image from 'next/image'

const Product3 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#FCF8F3]">
        {/* Background spacing */}
        <div className="container mx-auto flex px-32 py-56 md:flex-row flex-col items-center">

          {/* Left Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-5 font-bold text-black ">
              50+ Beautiful rooms

              <br className="hidden lg:inline-block" />
              inspiration
            </h1>

            <p className="mb-8 leading-relaxed">
              Our designer already made a lot of beautiful
              prototype of rooms that inspire you
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#B88E2F] border-0 py-3 px-9 focus:outline-none text-lg">
                Explore More
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            {/* Container for two images side by side */}
            <div className="flex space-x-4">

              {/* First Image with White Box Overlay and Arrow */}
              <div className="w-[1000px] h-[460px] relative rounded overflow-hidden">
                <Image
                  src="/36.jpg"
                  alt="Living"
                  width={1600}  // Increased width for both images
                  height={500}  // Set height consistently
                  style={{ objectFit: 'fill', width: '100%', height: '100%' }}
                />
                {/* White box overlay */}
                <div className="absolute bottom-4 left-12 bg-white p-7 rounded shadow opacity-70">
                  <p className="text-sm text-[#616161]">01 — Bed Room</p>
                  <h3 className="text-xl font-semibold text-[#3A3A3A] mt-1">
                    Inner Peace
                  </h3>
                </div>

                {/* Arrow inside the first image */}
                <div className="absolute bottom-2 left-[217px] bg-[#B88E2F] text-white w-8 h-8 flex items-center justify-center ">
                  →
                </div>
              </div>

              {/* Second Image */}
              <div className="w-[900px] h-full relative rounded overflow-hidden">
                <Image
                  src="/37.jpg"
                  alt="Living"
                  width={1600}  // Same increased width for consistency
                  height={600}  // Adjusted height to match
                  style={{ objectFit: 'fill', width: '100%', height: '100%' }}
                />
                {/* Round Arrow outside the second image */}
                <div className="absolute bottom-2 right-2 top-36 bg-white text-[#B88E2F] w-10 h-10 flex items-center justify-center rounded-full">
                  &gt;
                </div>
              </div>

            </div>

            {/* Logo Image */}
            <div className="absolute bottom-20 left-[360px]  transform -translate-x-1/2 flex justify-center items-center">
              <Image
                src="/41.jpg"  // Use your logo image here
                alt="Logo"
                width={200}  // Adjust the size of the logo as needed
                height={200}
                style={{ objectFit: 'contain' }}
              />
            </div>

          </div>
        </div>
      </section >
    </div >
  )
}

export default Product3



