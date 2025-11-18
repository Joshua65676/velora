import React from "react";
import { LogoImg } from "../assets";

const Logo: React.FC = () => {
  return (
    <main className="flex flex-row text-center items-center">
      <img src={LogoImg} alt="LOGO" />
      <span className="font-saonara font-[400px] text-[32px] leading-[100%] tracking-0 text-Black">Velora</span>
    </main>
  );
};

export default Logo;
