import React from "react";
import { Button } from "./ui/Button";
import { arrow } from "../assets";
import Hero2 from "./Hero2";

const Hero: React.FC = () => {
  return (
    <main className="xl:w-374 md:w-370 w-full xl:m-2">
      <main className="bg-[url(./assets/HeroBg.jpg)] bg-center bg-cover bg-origin-padding bg-no-repeat container xl:mx-auto xl:max-w-370 xl:h-screen md:max-w-370 max-w-full rounded-[10px]">
        <section className="container mx-auto max-w-7xl w-full py-35 px-6 flex flex-col xl:items-center gap-47">
          <main className="flex flex-col gap-10">
            <div className="flex md:flex-row xl:flex-row flex-col xl:items-center xl:justify-between gap-5 md:gap-10">
              <h2 className="font-saonara font-[400px] text-Black xl:w-[830px] w-[400px] text-[44px] xl:text-[64px] leading-[100%] tracking-0">
                Where beauty blossoms naturally.
              </h2>
              <>
                <p className="font-satoshiI font-medium text-[20px] w-[371px] leading-[100%] tracking-[0%] text-TextBlack">
                  More than skincare, blending nature’s purest ingredients with
                  timeless beauty rituals, so every moment with your skin feels
                  like a bloom of confidence .
                </p>
              </>
            </div>

            <>
              <Button className="h-11 rounded-[40px] w-[250px] bg-Black hover:bg-Black flex flex-row gap-3.5 px-3">
                <span className="text-white font-saonara font-[400px] text-[20px] leading-[100%] tracking-0">
                  Explore collections
                </span>
                <div className="bg-white w-10 h-9 rounded-[40px] p-1.5 flex gap-2 hover:bg-none">
                  <img src={arrow} alt="arrow" />
                </div>
              </Button>
            </>
          </main>

          <>
           <Hero2 />
          </>
        </section>
      </main>
    </main>
  );
};

export default Hero;
