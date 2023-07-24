"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../ui/Button';
import Logo from "public/assets/images/logo.svg";
import Hamburger from "public/assets/images/icon-hamburger.svg";


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-36">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image 
                src={Logo}
                width={150}
                height={250}
                alt="Picture of the author"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={Hamburger}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1  items-center md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-base text-dark-blue py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-silver md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className="text-base text-dark-blue py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-silver md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Product
                  </Link>
                </li>
                <li className="text-base text-dark-blue py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-silver md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="text-base text-dark-blue py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-silver  border-purple-900  md:hover:text-silver md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Careers
                  </Link>
                </li>
                <li className="text-base text-dark-blue py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-silver  border-purple-900  md:hover:text-silver md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className='hidden flex items-center  py-3 md:py-5 sm:block '>
                <Button></Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;