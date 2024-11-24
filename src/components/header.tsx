"use client"
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react" 

import Image from "next/image"
import Link from "next/link"



export default function Header(){
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
      <header className="flex justify-between items-center p-4 md:py-[30px] md:px-[54] bg-white shadow-md relative z-10">
        {/* logo */}
        <div className="flex items-center gap-x-[5px]">
          <Image src={"/logo.webp"} alt="logo" width={50} height={32}></Image>
          <h1 className="font-monoserrat font-bold text-[34px] leading-10">Furniro</h1>
        </div>
        {/* links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-[75px] ">
            <li className="cursor-pointer font-bold">
              <Link href={"/"}>Home</Link>
            </li>
            <li  className="cursor-pointer font-bold">
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li  className="cursor-pointer font-bold">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        {/* card */}

        <div className="flex gap-x-[45px]">
          <Image 
          src={"/person.png"} 
          alt="person" 
          width={24} 
          height={24}
          className="hidden lg:block">

          </Image>

<Image 
          src={"/search.png"} 
          alt="search" 
          width={24} 
          height={24}
          className="hidden lg:block">

          </Image>

<Image 
          src={"/heart.png"} 
          alt="heart" 
          width={24} 
          height={24}
          className="hidden lg:block">

          </Image>

          <Link href="#"><Image 
          src={"/cart.png"} 
          alt="cart" 
          width={24} 
          height={24}
          className="hidden md:block">
            </Image>
            </Link>
            </div>

        {/* menu icon for small screen */}
         <div className="md:hidden">
        <button onClick={toggleMenu}>
        <MdOutlineMenu  className="text-2xl text-grey-700"/>
        </button>
        </div>


        {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-pink-100 text-center text-yellow-900 font-semibold z-50">
          <li className="py-2 border-b border-yellow-900">
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          
          <li className="py-2 border-b border-yellow-900">
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="py-2 border-b border-yellow-900">
            <Link href="/shop" onClick={toggleMenu}>Shop</Link>
          </li>
        </ul>
      )}
      </header>
    )
  }