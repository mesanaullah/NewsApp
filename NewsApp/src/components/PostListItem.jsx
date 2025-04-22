import React from 'react'
import { Link } from "react-router-dom";
import { IKImage } from 'imagekitio-react';
import Image from './Image';
import { format } from "timeago.js";

// { post }
const PostListItem = ({ post }) => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-10">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3">
                {/* <img src="R_p1.jpg" alt="404" className="rounded-sm object-cover" w="735" /> */}
                {post.img && (
                    // <Image src="/KKR_Vs_GT_NHhOFpNss.jpg" className="rounded-sm object-cover w-full h-full" w="735" />
                    <Image src={post.img} className="rounded-sm object-cover w-full h-full" w="735" />
                )}

            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={`/${post.slug}`} className="text-4xl font-semibold">
                    {post.title}
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    {/* <Link className="text-blue-800" to={`/posts?author=${post.user.username}`}>{post.user.username}</Link> */}
                    <Link className="text-blue-800" to={`/posts?author=${post.user?.username}`}>{post.user?.username}</Link>
                    <span>on</span>
                    <Link className="text-blue-800">{post.category}</Link>
                    <span>{format(post.createdAt)}</span>
                </div>
                {/* desc  */}
                <p>{post.desc}</p>
                <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">
                    Read More
                </Link>
            </div>

        </div>

        // <div className="flex flex-col xl:flex-row gap-8 mb-10">
        //     {/* image */}
        //     <div className="md:hidden xl:block xl:w-1/3">
        //         {/* <img src="R_p1.jpg" alt="404" className="rounded-sm object-cover" w="735" /> */}
        //         <Image src="R_p1.jpg" className="rounded-sm object-cover w-full h-full" w="735" />

        //     </div>

        //     {/* Details */}
        //     <div className="flex flex-col gap-4 xl:w-2/3">
        //         <Link to="/" className="text-4xl font-semibold">
        //             Big tax break for middle class
        //         </Link>
        //         <div className="flex items-center gap-2 text-gray-400 text-sm">
        //             <span>Written by</span>
        //             <Link className="text-blue-800" to="/">Sanaullah</Link>
        //             <span>on</span>
        //             <Link className="text-blue-800">Business</Link>
        //             <span>1 day ago</span>
        //         </div>
        //         {/* desc  */}
        //         <p>The finance minister has raised the limit of income tax rebate from Rs 7 lakh to Rs 12 lakh which essentially means that if an individual has an income of up to Rs 12 lakh, she will have zero tax liability.</p>
        //         <Link to='/' className="underline text-blue-800 text-sm">
        //             Read More
        //         </Link>
        //     </div>

        // </div>



    )
}

export default PostListItem
