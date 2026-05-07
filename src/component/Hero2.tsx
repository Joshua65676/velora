import React from "react";
import { HeroList } from "../constants";
import { Button } from "./ui/Button";
import { Frame1, Frame2 } from "../assets";

interface Hero2Props {
  activeBg: string;
  setActiveBg: (bg: string) => void;
}

const Hero2: React.FC<Hero2Props> = ({ activeBg, setActiveBg }) => {
  return (
    <main>
      <section className="flex xl:flex-row md:flex-row flex-col-reverse gap-10 xl:justify-center xl:items-center">
        <ul className="flex flex-row flex-wrap gap-5 justify-between xl:justify-normal items-center">
          {HeroList.map(({ id, name, style, bg }) => {
            const isActive = activeBg === bg;
            return (
              <li key={id}>
                <Button
                  onClick={() => setActiveBg(bg)}
                  style={{ width: `${style}px` }}
                  className={`rounded-[40px] h-[47px] border-white inset-shadow-md backdrop-blur-10xs transition-all duration-300 cursor-pointer
                    ${isActive ? "bg-white" : "bg-white/10"}`}
                >
                  <span
                    className={`font-satoshiR font-[400px] text-[20px] leading-[100%] tracking-[0%] transition-colors duration-300
                      ${isActive ? "text-Black" : "text-Black"}`}
                  >
                    {name}
                  </span>
                </Button>
              </li>
            );
          })}
        </ul>

        <div className="flex xl:flex-row xl:flex-nowrap flex-wrap items-center gap-5 justify-between xl:mr-10">
          <div className="flex flex-col gap-2 w-[161px] h-[140px] bg-white/10 rounded-[20px] py-5 px-3">
            <h3 className="text-[16px] leading-[100%] tracking-[0%] text-Black font-saonara font-[400px] w-[118px]">
              Radiance Bloom Serum
            </h3>
            <p className="font-satoshiR w-[147px] text-[10px] leading-[100%] tracking-[0%] text-PBlack">
              A lightweight serum with rose extract, hyaluronic acid, and
              vitamin C to leave the skin glowing like it's in full bloom.
            </p>
            <span className="text-[16px] leading-[100%] tracking-[0%] text-Black font-saonara font-[400px] w-[118px]">
              $130
            </span>
          </div>
          <img src={Frame2} alt="" />
          <img src={Frame1} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Hero2;