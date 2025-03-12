import React from 'react'
import { Link } from "react-router-dom";
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';
import PostList from '../components/PostList';


const Homepage = () => {
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
                <Link to="/" className="">
                    <h1 className=" text-2xl md:text-5xl lg:text-5xl font-bold">No income tax for those earning up to Rs 12.75 lakh under New Tax Regime</h1>
                    <p className="mt-8 text-md md:text-xl">
                        The finance minister has raised the limit of income tax rebate from Rs 7 lakh to Rs 12 lakh which essentially means that if an individual has an income of up to Rs 12 lakh, she will have zero tax liability.</p>
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
