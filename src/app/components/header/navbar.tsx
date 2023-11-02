'use client'
import React, { useState } from "react";
import Link from "next/link";
import navLink from "@/app/data/navlinks";
import { SlMenu } from 'react-icons/sl'
import { AiOutlineClose } from 'react-icons/ai'



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState('hidden')
  const handleSwitch = () => {
    setOpen(!open);
    if (hidden == 'hidden') {
      setHidden(' ')
    } else {
      setHidden('hidden')
    }
    console.log(open)
  }
  const navIcon = () => {
    if (open) {
      return <AiOutlineClose />
    } else {
      return <SlMenu />
    }
  }


  return (
    <nav className="container mx-auto m-6 max-w-3xl ">

      <div className="justify-between  flex flex-center text-xl text-white">
        {/* Start of nav items  */}
        <div onClick={handleSwitch} className=" md:hidden">{navIcon()}</div>
        <div className=" md:flex md:visible flex-row hidden  space-x-4 px-2 items-center">
          {navLink.map((item) => {
            return (<Link key={item.name} href={item.link} >
              <div className="transition ease-in duration-500 hover:bg-button-before hover:text-custom-background px-4 ">{item.name}</div>
            </Link>
            )
          })}
        </div>
        {/* End of Nav Items */}
        <button className="rounded-full px-4 py-1 bg-button-before text-custom-background hover:bg-hover-color">Tips</button>
      </div>
      <div className={hidden}>
        <div className="flex flex-col justify-center items-center py-5 space-y-2">
          {navLink.map((item) => {
            return (
              <Link key={item.name} href={item.link} className="hover:text-hover-color ">
                <div className="transition ease-in duration-500 hover:bg-button-before hover:text-custom-background px-4 "> {item.name}</div>
              </Link>
            )
          })}
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
