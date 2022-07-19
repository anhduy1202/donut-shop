import Image from "next/image";
import React from "react";
import { Heading1, SubHeading } from "../Heading/Heading";

const Banner: React.FC = () => {
  return (
    <section className="mx-[-16px] mt-[-32px] flex items-center flex-col bg-gradient-to-b from-pink-500 to-[#fbd6e5] via-[#f9a4c7]">
      <div className="w-[300px] h-[200px] relative">
        <Image
          src="/banner.png"
          alt="donut banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Heading1 content="Donuts" />
      <SubHeading content="best in town" />
      <Image
        src="/wave.png"
        alt="wave"
        width={430}
        height={80}
        objectFit="cover"
      />
    </section>
  );
};

export default Banner;
