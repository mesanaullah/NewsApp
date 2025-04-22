import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (

    <div className='mt-8 flex flex-col lg:flex-row gap-8' >
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {/* <img src="img_1.jpg" alt="" className="rounded-sm object-cover " w="895" /> */}
        {posts[0].img && <Image
          src={posts[0].img}
          className="rounded-sm object-cover"
          w="895"
        />}
        {/* details */}
        <div className="flex items-center gap-4">
          {/* <h1 className="font-semibold lg:text-lg">01.</h1> */}
          {/* <Link className=" lg:text-lg"></Link> */}
          {/* <span className="text-gray-500 ">2 day</span> */}

          {/* title */}
          <Link to={posts[0].slug} className="text-xl lg:text-3xl font-semibold lg:font-bold">
            {posts[0].title}
          </Link>
        </div>

      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className='font-semibold lg:text-lg border-b border-[rgb(230,232,234)]'>Latest News</h1>
        {/* second */}
        {posts[1] && <div className="lg:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
          {/* <img src="Water.jpg" alt="" className="rounded-sm object-cover w-1/3 "
            w="298" /> */}
          {posts[1].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[1].img}
              className="rounded-sm object-cover w-full h-full aspect-video"
              w="298"
            />
          </div>}

          {/* details and title */}
          <div className="w-2/3">
            {/* title */}
            <Link
              to={posts[1].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >{posts[1].title}</Link>

            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">01</h1>
              <Link className="text-blue-800">{posts[1].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[1].createdAt)}</span>
            </div>
          </div>
        </div>}

        {/* third */}

        {posts[3] && <div className="lg:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
          {/* <img src="img_04.jpg" alt="" className="rounded-sm object-cover w-1/3"
            w="298" /> */}
          {posts[3].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[3].img}
              className="rounded-sm object-cover w-full h-full"
              w="298"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3 ">
            {/* title */}
            <Link
              to={posts[1].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >{posts[3].title}</Link>
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mt-4">
              <h1 className="font-semibold">02</h1>
              <Link className="text-blue-800">{posts[3].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[3].createdAt)}</span>
            </div>
          </div>
        </div>}
        {/* fourth */}
        {posts[3] && <div className="g:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
          {/* <img src="img_03.jpg" alt="" className="rounded-sm object-cover w-1/3"
            w="298" /> */}
          {posts[3].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[3].img}
              className="rounded-sm object-cover w-full h-full"
              w="298"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3">
            {/* title */}
            <Link
              to={posts[3].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >{posts[3].title}</Link>
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mt-4">
              <h1 className="font-semibold">03</h1>
              <Link className="text-blue-800">{posts[3].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[3].createdAt)}</span>
            </div>
          </div>
        </div>}

      </div>
    </div>



    // <div className='mt-8 flex flex-col lg:flex-row gap-8' >
    //   {/* First */}
    //   <div className="w-full lg:w-1/2 flex flex-col gap-4">
    //     {/* image */}
    //     <img src="img_1.jpg" alt="" className="rounded-sm object-cover " w ="895" />

    //     {/* details */}
    //     <div className="flex items-center gap-4">
    //       {/* <h1 className="font-semibold lg:text-lg">01.</h1> */}
    //       {/* <Link className=" lg:text-lg"></Link> */}
    //       {/* <span className="text-gray-500 ">2 day</span> */}

    //       {/* title */}
    //       <Link to="/" className="text-xl lg:text-3xl font-semibold lg:font-bold">
    //       Did DeepSeek copy ChatGPT to make new AI chatbot?
    //       </Link>
    //     </div>

    //   </div>

    //   {/* Others */}
    //   <div className="w-full lg:w-1/2 flex flex-col gap-4">
    //     <h1 className='font-semibold lg:text-lg border-b border-[rgb(230,232,234)]'>Latest News</h1>
    //     {/* second */}
    //     <div className="lg:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
    //       <img src="Water.jpg" alt="" className="rounded-sm object-cover w-1/3 "
    //         w="298" />
    //       {/* details and title */}
    //       <div className="w-2/3">
    //         {/* title */}
    //         <Link
    //           to="/"
    //           className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
    //         >Union Budget 2025: How it can secure India's water future</Link>
    //         {/* details */}
    //         <div className="flex items-center text-sm lg:text-base mt-4">
    //           <h1 className="font-semibold"></h1>
    //           <Link className="text-blue-800"></Link>
    //           <span className="text-gray-500 text-sm">1 day ago</span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* third */}

    //     <div className="lg:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
    //       <img src="img_04.jpg" alt="" className="rounded-sm object-cover w-1/3"
    //         w="298" />
    //       {/* details and title */}
    //       <div className="w-2/3">
    //         {/* title */}
    //         <Link
    //           to="/"
    //           className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
    //         >Virat Kohli's first Ranji Trophy innings in 13 years lasted all of 15 balls.</Link>
    //         {/* details */}
    //         <div className="flex items-center text-sm lg:text-base mt-4">
    //           <h1 className="font-semibold"></h1>
    //           <Link className="text-blue-800"></Link>
    //           <span className="text-gray-500 text-sm">2 day ago</span>
    //         </div>
    //       </div>
    //     </div>
    //     {/* fourth */}
    //     <div className="g:h-1/3 flex justify-between gap-4 py-2 border-b border-[rgb(230,232,234)]">
    //       <img src="img_03.jpg" alt="" className="rounded-sm object-cover w-1/3"
    //         w="298" />
    //       {/* details and title */}
    //       <div className="w-2/3">
    //         {/* title */}
    //         <Link
    //           to="/"
    //           className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
    //         >Sitharaman will present the budget for FY 2025-26 tomorrow, on Feb 1, 2025, at 11 am.</Link>
    //         {/* details */}
    //         <div className="flex items-center text-sm lg:text-base mt-4">
    //           <h1 className="font-semibold"></h1>
    //           <Link className="text-blue-800"></Link>
    //           <span className="text-gray-500 text-sm">1 day ago</span>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

export default FeaturedPosts
