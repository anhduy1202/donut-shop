import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FaYelp, FaFacebook } from "react-icons/fa";
import useResponsive from "../Hook/useResponsive";
import Link from "next/link";
import { useRouter } from "next/router";

interface PageProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageProps> = ({ children }) => {
  return (
    <section>
      <NavBar />
      {children}
      <Footer />
    </section>
  );
};

const NavBar: React.FC = () => {
  const [openMenu, setOpen] = useState(false);
  const [isDesktop] = useResponsive();
  const menuItems = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/menu",
      title: "Menu",
    },
    {
      url: "/about",
      title: "About",
    },
  ];
  const router = useRouter();
  return (
    <nav className="ml-auto w-[24px] h-[24px] pt-4">
      {openMenu && !isDesktop ? (
        <MdOutlineClose
          color="white"
          size={"32px"}
          className="cursor-pointer"
          onClick={() => setOpen(!openMenu)}
        />
      ) : !openMenu && !isDesktop ? (
        <HiOutlineMenu
          color="white"
          size={"32px"}
          className="cursor-pointer"
          onClick={() => setOpen(!openMenu)}
        />
      ) : (
        //Desktop nav bar here
        <></>
      )}
      {openMenu && (
        <div className="navbar">
          {menuItems.map((item, idx) => {
            return (
              <div key={idx}>
                <Link href={item.url}>
                  <p
                    className={`${
                      router.asPath == item.url &&
                      "text-pink-700 underline underline-offset-4 decoration-4"
                    }`}
                  >
                    {item.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-button-pink mx-[-16px] py-4 flex flex-col items-center">
      <div className="flex gap-9 justify-center">
        <AiFillInstagram color="white" size={28} />
        <FaYelp color="white" size={28} />
        <FaFacebook color="white" size={28} />
      </div>
      <p className="mt-4 text-white text-12 font-lemonada font-semibold">
        Copyright @2022
      </p>
    </footer>
  );
};
