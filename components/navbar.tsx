import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="test w-full bg-white dark:bg-black">
      <ul className="flex justify-center gap-6 p-4">
        <Link href="/">
          <li className="cursor-pointer m-4">Home</li>
        </Link>
        <Link href="/about">
          <li className="cursor-pointer m-4">About</li>
        </Link>
        <Link href="/blogs">
          <li className="cursor-pointer m-4"> Blogs</li>
        </Link>
        <Link href="/contact">
          <li className="cursor-pointer m-4">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
