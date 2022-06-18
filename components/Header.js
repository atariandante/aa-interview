import React from "react";

import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 w-full justify-center flex  bg-red-600  ">
      <div className="flex justify-between items-center p-2 md:ml-6 md:mr-6 relative">
        <AiFillShopping className="mr-10 h-10 w-10 text-slate-100 cursor-pointer" />
        <div className="flex ">
          <div className="mr-5 flex text-lg cursor-pointer text-slate-100">
            <ul className="flex">
              <li className=" mr-5">
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
