import React from "react";
import { Button } from "./ui/Button";
import { arrowRight, Vault1, Vault3 } from "../assets";

const CTA: React.FC = () => {
  return (
    <main className="bg-VaultBg items-center justify-center flex flex-col py-20">
        {/* 1st image */}
      <div className="hidden xl:flex absolute right-46 mb-85 rotate-6">
        <img src={Vault3} alt="" className="w-[222px] h-[280px] rounded-[10px]"/>
      </div>
        {/* main CTA */}
      <section className="xl:w-[1093px] md:w-[1093px] w-full h-[499px] bg-Black xl:rounded-[40px] md:rounded-[40px]">
        <main className="bg-[url(./assets/Vector.png)] bg-center bg-cover bg-origin-padding max-w-[691px] h-[500px] xl:ml-50 md:ml-50">
          <div className="flex flex-col items-center justify-center gap-5 text-center h-full">
            <h2 className="font-saonara font-[400px] xl:text-[64px] md:text-[64px] text-[48px] leading-[100%] tracking-[0px] text-white">
              Be the first to know
            </h2>
            <p className="xl:w-[839px] md:w-[830px] w-[400px] font-satoshiR text-[20px] leading-[100%] tracking-[0px] text-white">
              Stay connected with Elegance in Bloom from fresh arrivals and
              insider perks to skincare secrets that help your beauty blossom
              every day.
            </p>
            <Button className="h-11 rounded-[40px] w-[250px] bg-white hover:bg-white flex flex-row gap-5 px-3">
              <span className="text-Black font-saonara font-[400px] text-[20px] leading-[100%] tracking-0">
                Explore collections
              </span>
              <div className="bg-Black w-9 h-9 rounded-[40px] p-2.5 flex hover:bg-none">
                <img src={arrowRight} alt="arrow" />
              </div>
            </Button>
          </div>
        </main>
      </section>
      {/* 2nd image */}
      <div className="hidden xl:flex absolute left-46 mt-85 -rotate-6">
        <img src={Vault1} alt="" className="w-[206px] h-[244px] rounded-[10px]"/>
      </div>
    </main>
  );
};

export default CTA;
