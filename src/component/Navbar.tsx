import React from "react";
import { useState, useEffect } from "react";

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
        stickyClass ? "bg-GrayBg backdrop-blur-md shadow-md" : ""
      }`}
    >
      <main className="container mx-auto max-w-6xl w-full py-6 px-4">
        <section className="flex flex-row items-center text-center justify-between">
         
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
