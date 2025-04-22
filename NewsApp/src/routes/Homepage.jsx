import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
    const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
    );
    return res.data;
};

const Homepage = () => {

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
        <div className=' py-2 md:px-8 lg:px-16 lx:px-32 2xl:px-64 flex flex-col gap-2'>
            <div className="flex gap-2">
                <Link to="/">Home</Link>
                <span>•</span>
                <span className="text-blue-800 ">Top News</span>
            </div>
            {/* INTODUCTION */}
            <div className="flex items-center justify-between">
                {/* titles */}
                <Link to={posts[0].slug}  className="">
                    <h1 className=" text-2xl md:text-5xl lg:text-5xl font-bold">{posts[0].title}</h1>
                    <p className="mt-8 text-md md:text-xl">{posts[0].desc}</p>
                </Link>
                {/* animated button */}
                <Link to="write" className="hidden md:block relative">

                </Link>

                {/* CATEGORIES */}
                <MainCategories />

            </div>
            {/* FEATURED POSTS */}
            <FeaturedPosts />
            <div className="">
                <h1 className="my-8 text-2xl text-gray-600 border-b border-[rgb(230,232,234)]">Recent Posts</h1>
                <PostList />
            </div>
        </div>
    )
}

export default Homepage
