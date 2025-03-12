import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-6 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left ">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold">Latent News</h2>
          <p className="mt-2 text-gray-400 ">Providing quality content since 2025.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-400 hover:text-black"><Link to="/">Home</Link></li>
            <li className="text-gray-400 hover:text-black"><Link to="/test">World</Link></li>
            <li className="text-gray-400 hover:text-black"><Link to="/test">Politics</Link></li>
            <li className="text-gray-400 hover:text-black"><Link to="/test">Business</Link></li>
            <li className="text-gray-400 hover:text-black"><Link to="/test">Sports</Link></li>
            <li className="text-gray-400 hover:text-black"><Link to="/test">Entertainment</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <Link to="https://www.instagram.com/mesanaulla/">
              <FaInstagram className="h-6 w-6" />
            </Link>

            <Link to="https://x.com/sanaul06">
              <FaXTwitter className="h-6 w-6" />
            </Link>

            <Link to="https://facebook.com">
              <FaFacebook className="h-6 w-6" />
            </Link>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-6  pt-4">
        &copy; {new Date().getFullYear()} LatentNews. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;