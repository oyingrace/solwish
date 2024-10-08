'use client'

import React from 'react';
import Image from 'next/image';

const WishSection = () => {
  return (
    <div className="bg-green-100 min-h-screen p-8 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Section - House Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/path-to-house-image.jpg" // Replace with actual path
            alt="Dream house"
            width={400} // Adjust width
            height={500} // Adjust height
            className="rounded-lg"
          />
        </div>

        {/* Right Section - Text and Wish List */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            If you could fund one wish, what would it be?
          </h2>
          <p className="text-gray-600 mb-8">
            Imagine having the power to grant a single wish. What would yours be? Would it be a tangible item, a life-changing experience, or perhaps something more intangible? Share your dream family, and friends and let’s explore the possibilities together.
          </p>

          {/* Wish Items Scrollable List with Hover Animation */}
          <div className="flex overflow-x-auto space-x-4 py-4">
            <div className="flex-shrink-0 w-32 transform transition-transform duration-300 hover:scale-110">
              <Image
                src="/path-to-watch-image.jpg" // Replace with actual path
                alt="Watch"
                width={128} // Adjust width
                height={128} // Adjust height
                className="rounded-lg"
              />
            </div>
            <div className="flex-shrink-0 w-32 transform transition-transform duration-300 hover:scale-110">
              <Image
                src="/path-to-snow-globe-image.jpg" // Replace with actual path
                alt="Snow Globe"
                width={128} // Adjust width
                height={128} // Adjust height
                className="rounded-lg"
              />
            </div>
            <div className="flex-shrink-0 w-32 transform transition-transform duration-300 hover:scale-110">
              <Image
                src="/path-to-gift-box-image.jpg" // Replace with actual path
                alt="Gift Box"
                width={128} // Adjust width
                height={128} // Adjust height
                className="rounded-lg"
              />
            </div>
            <div className="flex-shrink-0 w-32 transform transition-transform duration-300 hover:scale-110">
              <Image
                src="/path-to-ornament-image.jpg" // Replace with actual path
                alt="Ornament"
                width={128} // Adjust width
                height={128} // Adjust height
                className="rounded-lg"
              />
            </div>
            <div className="flex-shrink-0 w-32 transform transition-transform duration-300 hover:scale-110">
              <Image
                src="/path-to-gift-card-image.jpg" // Replace with actual path
                alt="Gift Card"
                width={128} // Adjust width
                height={128} // Adjust height
                className="rounded-lg"
              />
            </div>
            <div className="flex-shrink-0 w-32 transform transition-transform duration-300 hover:scale-110">
              <Image
                src="/path-to-bauble-image.jpg" // Replace with actual path
                alt="Christmas Bauble"
                width={128} // Adjust width
                height={128} // Adjust height
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishSection;