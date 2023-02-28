import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10">
      <div>
        <h1 className="text-7xl">Keshri Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcom to{" "}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            Every Developers
          </span>
          Amazing Blogs
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quos.
      </p>
    </div>
  );
};

export default Banner;
