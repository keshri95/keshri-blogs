import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/69101383?v=4"
            width={50}
            height={50}
            alt="ashish"
          />
        </Link>
        <h1>Ashish Keshri</h1>
      </div>

      <div className="flex space-x-2">
        <Link
          href="https://github.com/keshri95"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/ashish-keshri-b1a250188/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          LinkdeIn
        </Link>
      </div>
    </header>
  );
};

export default Header;
