import React from 'react'
import { Link } from "react-router-dom";
import { IKImage } from 'imagekitio-react';
import Image from './Image';


const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-10">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3">
                {/* <img src="R_p1.jpg" alt="404" className="rounded-sm object-cover" w="735" /> */}
                <Image src="R_p1.jpg" className="rounded-sm object-cover w-full h-full" w="735" />

            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/" className="text-4xl font-semibold">
                Big tax break for middle class
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800" to="/">Sanaullah</Link>
                    <span>on</span>
                    <Link className="text-blue-800">Business</Link>
                    <span>1 day ago</span>
                </div>
                {/* desc  */}
                <p>The finance minister has raised the limit of income tax rebate from Rs 7 lakh to Rs 12 lakh which essentially means that if an individual has an income of up to Rs 12 lakh, she will have zero tax liability.</p>
                <Link to='/' className="underline text-blue-800 text-sm">
                    Read More
                </Link>
            </div>

        </div>
    )
}

export default PostListItem
