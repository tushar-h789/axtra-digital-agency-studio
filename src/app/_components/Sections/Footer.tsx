import React from "react";
import Link from "next/link";
import footerImg from "../../../../public/axtra/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/4 p-4 lg:p-8">
          <div className="mb-8 lg:mb-12">
            <Image 
              src={footerImg} 
              width={100} 
              height={100} 
              alt="Axtra"
              className="mx-auto lg:mx-0" 
            />
            <p className="mt-4 text-gray-400 text-sm text-center lg:text-left">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <div className="w-full lg:w-32 border-t lg:border-t-0 border-l-0 lg:border-l border-r-0 lg:border-r border-b border-gray-800">
          <div className="flex lg:flex-col justify-center lg:justify-start h-full">
            <Link
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Linkedin
            </Link>
            <Link 
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Instagram
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-4 lg:p-8 relative">
          <div className="flex items-center justify-center h-full py-8 lg:py-0">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-semibold text-center whitespace-nowrap">
              <span className="text-yellow-400">LET</span>
              <span className="text-orange-500">'S </span>
              <span className="text-red-500">T</span>
              <span className="text-pink-500">A</span>
              <span className="text-purple-500">L</span>
              <span className="text-violet-500">K</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bottom-0 w-full bg-gray-900 border-t border-gray-800 py-6 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          <div className="text-sm text-gray-400 text-center lg:text-left">
            © 2022 - 2025 | Alrights reserved by Wealcoder
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-8">
            <Link href="/about" className="text-gray-400 hover:text-white">
              ABOUT US
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              CONTACT
            </Link>
            <Link href="/career" className="text-gray-400 hover:text-white">
              CAREER
            </Link>
            <Link href="/faqs" className="text-gray-400 hover:text-white">
              FAQS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;