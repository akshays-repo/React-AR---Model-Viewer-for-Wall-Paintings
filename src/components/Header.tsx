'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const Navitem = ["explore", "resources", "creators"];


const Header = () => {
const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="px-3 relative xl:px-0 sm:px-3 py-3 flex max-w-[1180px] items-center justify-between w-full">
    <div className="cursor-pointer">
    <Link href={'/'}>
      <img src='/arlogo.webp' width={'100px'} height={'100px'} style={{
        mixBlendMode :'multiply'
      }}/>
      </Link>

    </div>
    <div className="hidden sm:text-lg text-2xl text-[#2D4263] font-normal md:flex md:flex-row items-center sm:gap-2.5 md:gap-[60px]">
      {/* {Navitem.map((navitem, index) => {
        return (
          <a key={index} href="#_">
            <div>{navitem}</div>
          </a>
        );
      })} */}
    </div>
    <div
      className="md:hidden cursor-pointer"
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
          fill="#2D4263"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
          fill="#2D4263"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
          fill="#2D4263"
        />
      </svg>
    </div>
    <div
      className={`
      " transition-all ease-in-out"
        ${isNavOpen
          ? "md:hidden flex flex-col h-screen w-full left-0 top-0 absolute rounded-lg z-30 bg-[#2D4263]"
          : "md:hidden flex flex-col h-screen w-full top-0 left-full  absolute  rounded-lg z-30 bg-[#2D4263]"
        } 
     `}
    >
      <div
        className="flex pt-5 items-center justify-end text-xl font-bold px-6 w-full"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <img
          src={"/assets/nft/closed.svg"}
          alt="Close"
          className="h-7 cursor-pointer"
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center h-screen  gap-[30px] sm:gap-[50px]  md:hidden sm:text-lg text-xl  font-normal md:flex-row md:gap-[60px]">
        {Navitem.map((navitem, index) => {
          return (
            <a key={index} href="#_">
              <div>{navitem}</div>
            </a>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Header