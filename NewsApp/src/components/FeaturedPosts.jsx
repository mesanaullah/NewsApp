import React from 'react'
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8' >
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <img src="img_1.jpg" alt="" className="rounded-sm object-cover " w ="895" />

        {/* details */}
        <div className="flex items-center gap-4">
          {/* <h1 className="font-semibold lg:text-lg">01.</h1> */}
          {/* <Link className=" lg:text-lg"></Link> */}
          {/* <span className="text-gray-500 ">2 day</span> */}

          {/* title */}
          <Link to="/" className="text-xl lg:text-3xl font-semibold lg:font-bold">
          Did DeepSeek copy ChatGPT to make new AI chatbot?
          </Link>
        </div>

      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className='font-semibold lg:text-lg border-b border-[rgb(230,232,234)]'>Latest News</h1>
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
          <img src="Water.jpg" alt="" className="rounded-sm object-cover w-1/3 "
            w="298" />
          {/* details and title */}
          <div className="w-2/3">
            {/* title */}
            <Link
              to="/"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >Union Budget 2025: How it can secure India's water future</Link>
            {/* details */}
            <div className="flex items-center text-sm lg:text-base mt-4">
              <h1 className="font-semibold"></h1>
              <Link className="text-blue-800"></Link>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </div>
          </div>
        </div>

        {/* third */}

        <div className="lg:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
          <img src="img_04.jpg" alt="" className="rounded-sm object-cover w-1/3"
            w="298" />
          {/* details and title */}
          <div className="w-2/3">
            {/* title */}
            <Link
              to="/"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >Virat Kohli's first Ranji Trophy innings in 13 years lasted all of 15 balls.</Link>
            {/* details */}
            <div className="flex items-center text-sm lg:text-base mt-4">
              <h1 className="font-semibold"></h1>
              <Link className="text-blue-800"></Link>
              <span className="text-gray-500 text-sm">2 day ago</span>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className="g:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
          <img src="img_03.jpg" alt="" className="rounded-sm object-cover w-1/3"
            w="298" />
          {/* details and title */}
          <div className="w-2/3">
            {/* title */}
            <Link
              to="/"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >Sitharaman will present the budget for FY 2025-26 tomorrow, on Feb 1, 2025, at 11 am.</Link>
            {/* details */}
            <div className="flex items-center text-sm lg:text-base mt-4">
              <h1 className="font-semibold"></h1>
              <Link className="text-blue-800"></Link>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedPosts
