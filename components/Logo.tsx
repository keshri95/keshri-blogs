import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div>
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://avatars.githubusercontent.com/u/69101383?v=4"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
