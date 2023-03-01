import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10">
      <div>
        <h1 className="text-7xl">Keshri Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to my blog
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            Every Developers
          </span>
           Amazing Blogs
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        I posts blogs about Developers commonly use in real life problems:
      </p>
    </div>
  );
};

export default Banner;
