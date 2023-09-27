import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="container m-6 max-w-3xl">
      <div className="justify-between flex flex-center text-xl text-white">
        <div className="flex space-x-4 px-2 items-center">
          <Link href='#'>Home</Link>
          <Link href='#' className="hover:bg-green-100 hover:border-white hover:text-white rounded">Blog</Link>
          <Link href='#' className="hover:bg-green-100 hover:border-white hover:text-white rounded">Donate</Link>
        </div>
        <button className="rounded-full px-4 py-1 bg-buttons-light">Tips</button>
      </div>
    </nav>
  );
};

export default NavBar;
