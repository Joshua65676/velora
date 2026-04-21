import React from "react";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { MenuList } from "../constants";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);

  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    setStickyClass(windowHeight > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  ${
        stickyClass ? "bg-GrayBg backdrop-blur-md" : ""
      }`}
    >
      <main className="container mx-auto max-w-7xl w-full py-5 px-4">
        <section className="flex flex-row items-center text-center justify-between bg-PryWhite h-[62px] p-5 px-5 rounded-[40px]">
         <Logo />

         <>
           <ul className="hidden md:flex xl:flex flex-row items-center justify-between gap-5 bg-SecWhite h-[47px] w-[415px] px-6 rounded-[40px]">
            {MenuList.map(({id, name, link}) => (
              <li key={id}>
                 <Link to={link}>
                  <span className="text-Black font-satoshiM font-medium text-[20px] leading-[100%] tracking-0">{name}</span>
                 </Link>
              </li>
            ))}
           </ul>
         </>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
