import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import useResponsive from "../Hook/useResponsive";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../Footer/Footer";

interface PageProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageProps> = ({ children }) => {
  return (
    <section>
      <NavBar />
      {children}
      <Footer/>
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
                  <p className={`${router.asPath == item.url && "text-pink-700 underline underline-offset-4 decoration-4"}`}>
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
