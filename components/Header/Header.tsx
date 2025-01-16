import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex bg-black p-3 shadow-2xl">
      <Link href="/" className="text-white font-bold mr-auto">
        Logo
      </Link>
      <Link
        href="/Adddata"
        className="w-auto px-5 py-2 text-white font-sans font-bold border-[1px] border-white rounded-full">
        Add Course
      </Link>
      {/* <ul className="flex gap-9">
        <li>
          <Link href="/about" className="text-white font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white font-bold">
            About
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white font-bold">
            Blogs
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Header;
