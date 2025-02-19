import React from 'react'
import { Link } from "react-router-dom";
import Homepage from '../routes/Homepage';

const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
            {/* links */}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                {/* <Link to="/" className=""><Homepage /></Link>
                <Link to="" className="">Politics</Link>
                <Link to="" className="">Development</Link>
                <Link to="" className="">Databases</Link> */}
            </div>
        </div >
    )
}

export default MainCategories;
