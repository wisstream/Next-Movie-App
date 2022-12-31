import React, { Fragment } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div>
          <nav className="z-50 w-full px-5 py-2 flex justify-between items-center">
            <Link
              className="ml-5 hover:bg-white duration-500 text-black font-bold py-3 px-4 border border-black rounded"
              href="/"
            >
              Home
            </Link>
            <input
              className="ml-5 hover:bg-white duration-500 hover:scale-105 duration-200 text-black font-bold py-3 px-4 border border-black rounded"
              type="text"
              placeholder="Search..."
            />
          </nav>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
