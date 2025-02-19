import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FiLogIn } from "react-icons/fi";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="sticky top-0 w-full h-16 md:h-20 flex items-center justify-between border-b border-[rgb(230,232,234)]">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <img src="LATENT.jpg" className='w-8 h-8' alt="BBC" />
                <span>LATENT NEWS</span>
            </Link>

            {/* MOBILE BUTTON */}

            <div className="md:hidden" >
                <div className="cursor-pointer text-4xl"
                    onClick={() => setOpen((prev) => !prev)}
                >{open ? "X" : "☰"}</div>

            </div>

            {/* MOBILE LINK LIST */}

            <div className >
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"
                    }`} >
                    <Link to="/" className=''><IoHomeSharp className='mt-0.5' /> Home</Link>
                    <Link to="/">World</Link>
                    <Link to="/">Politics</Link>
                    <Link to="/test">Business</Link>
                    <Link to="/">Sports</Link>
                    <Link to="/">Entertainment</Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-[#4361ee]">
                            <FiLogIn />LogIn</button>
                    </Link>
                </div>
            </div>

            {/* DESTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium" >
                <Link to="/" className='md:flex gap-1'><IoHomeSharp className='mt-0.5' /> Home</Link>
                <Link to="/test">World</Link>
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