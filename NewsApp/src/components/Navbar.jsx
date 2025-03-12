import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FiLogIn } from "react-icons/fi";
import { Menu, X, ChevronDown } from "lucide-react";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between border-b border-[rgb(230,232,234)]">
            {/* // <div className=" w-full h-16 md:h-20 flex items-center justify-between shadow-sm"> */}
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 text-2xl md:text-3xl font-bold">
                <img src="LATENT.jpg" className='w-8 h-8' alt="BBC" />
                <span className="hide-between-765-980 text-responsive-1024-1025">LATENT NEWS</span>
            </Link>

            {/* MOBILE BUTTON */}

            <div className="md:hidden" >
                <div className="cursor-pointer text-4xl"
                    onClick={() => setOpen((prev) => !prev)}
                >{open ? "X" : "☰"}</div>

            </div>

            {/* MOBILE LINK LIST */}

            <div className >
                <div className={`bg-white top-16 p-4 m-0 w-full flex flex-col items-center justify-center gap-6 font-medium text-lg absolute transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"
                    }`} >
                    <Link to="/" className=''><IoHomeSharp className='mt-0.5' /> Home</Link>
                    <Link to="/">World</Link>
                    <Link to="/">Politics</Link>
                    <Link to="/test">Business</Link>
                    <Link to="/">Sports</Link>
                    <Link to="/">Entertainment</Link>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-[#4361ee]">
                            LogIn</button>
                    </Link>
                </div>
            </div>

            {/* DESTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium" >
                <Link to="/" className='md:flex gap-1'><IoHomeSharp className='mt-0.5' /> Home</Link>
                {/* <Link to="/test">World</Link> */}
                <li className="relative list-none">
                    <button
                        className="flex items-center  hover:text-blue-600"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        World <ChevronDown className="ml-1" size={18} />
                    </button>
                    <ul className={`absolute top-16 bg-white rounded shadow-lg w-40 transition-all ${isDropdownOpen ? "block" : "hidden"}`}>
                        <li><Link to="/test" className="block px-4 py-2 hover:text-blue-600">India</Link></li>
                        <li><Link to="/test" className="block px-4 py-2 hover:text-blue-600">US</Link></li>
                        <li><Link to="/test" className="block px-4 py-2 hover:text-blue-600">UK</Link></li>
                        <li><Link to="/test" className="block px-4 py-2 hover:text-blue-600">China</Link></li>
                        <li><Link to="/test" className="block px-4 py-2 hover:text-blue-600">UAE</Link></li>
                    </ul>
                </li>
                <Link to="/test">Politics</Link>
                <Link to="/test">Business</Link>
                <Link to="/test">Sports</Link>
                <Link to="/test">Entertainment</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className=" md:flex py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-[#4361ee] gap-2"><FiLogIn className='mt-1' />LogIn</button>
                    </Link>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

        </div>
    )

}

export default Navbar;