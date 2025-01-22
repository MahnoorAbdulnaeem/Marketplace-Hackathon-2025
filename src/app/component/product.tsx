

import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading and Subheading centered */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-semibold text-black">
            Browse The Range
          </h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div
          className="bg-white max-w-5xl mx-auto p-6" // Sirf size fix aur center align, no border, no shadow
        >
          <div className="flex flex-wrap -mx-4">

            {/* Image 1 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="rounded-lg h-[390px] overflow-hidden">
                <Image
                  width={200}
                  height={300}
                  alt="Dining"
                  className="object-cover object-center h-full w-full"
                  src="/33.jpg"
                />
              </div>
              <h2 className="text-xl font-semibold text-black mt-5 text-center">
                Dining
              </h2>
            </div>

            {/* Image 2 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="rounded-lg h-[390px] overflow-hidden">
                <Image
                  width={200}
                  height={300}
                  alt="Living"
                  className="object-cover object-center h-full w-full"
                  src="/34.jpg"
                />
              </div>
              <h2 className="text-xl font-semibold text-black mt-5 text-center">
                Living
              </h2>
            </div>

            {/* Image 3 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="rounded-lg h-[390px]  overflow-hidden">
                <Image
                  width={300}
                  height={800}
                  alt="Bedroom"
                  className="object-cover object-center h-full w-full"
                  src="/35.jpg"
                />
              </div>
              <h2 className="text-xl font-semibold text-black mt-5 text-center">
                Bedroom
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product


