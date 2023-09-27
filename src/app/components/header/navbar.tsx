import React from "react";
import Link from "next/link";
import navLink from "@/app/data/navlinks";

const NavBar = () => {
  return (
    <nav className="container mx-auto m-6 max-w-3xl ">
      <div className="justify-between hidden md:flex flex-center text-xl text-white">
        <div className=" flex space-x-4 px-2 items-center">
          {navLink.map((item) => {
            return <Link href={item.link} className="hover:text-hover-color ">{item.name}</Link>
          })}
        </div>
        <button className="rounded-full px-4 py-1 bg-button-before text-custom-background hover:bg-hover-color">Tips</button>
      </div>
    </nav>
  );
};

export default NavBar;
