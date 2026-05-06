import React from "react";
import { Button } from "./ui/Button";
import { arrow, Frame6, Frame7, Frame8 } from "../assets";

const Collections: React.FC = () => {
  return (
    <main>
      <section className="flex flex-col gap-8">
        <h2 className="font-saonara font-[400px] text-PBlack text-[64px] leading-[100%] tracking-[0px] w-[387px] xl:w-full md:w-full">
          Our <span className="text-Black">Collections</span>
        </h2>

        <section className="flex flex-col xl:gap-5 md:gap-5 gap-8">
          {/* Petal Glow Foundation */}
          <div className="flex flex-col-reverse gap-5 md:flex-row xl:flex-row xl:items-center md:items-center justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-saonara font-[400px] text-[32px] leading-[100%] tracking-[0px] text-Black">
                Petal Glow Foundation
              </h2>
              <p className="font-satoshiR w-[500px] text-[20px] leading-[130%] tracking-[0px] text-PBlack">
                Petal Glow Foundation offers lightweight, buildable coverage
                that blends seamlessly, leaving skin soft, radiant, and
                naturally flawless all day.
              </p>
              <span className="font-saonara font-[400px] text-[32px] leading-[100%] tracking-[0px] text-Black">
                $49.83
              </span>
            </div>
            <div className="relative">
              <img
                src={Frame6}
                alt=""
                className="w-[500px] xl:w-[748px] md:w-[748px] h-[305px] rounded-[20px]"
              />
              <Button className="absolute bottom-2 left-5 h-11 hover:bg-black/30 rounded-[40px] w-[280px] gap-3 bg-Black/25 border-none flex flex-row px-3">
                <span className="text-white font-saonara font-[400px] text-[20px] leading-[100%] tracking-0">
                  Petal Glow Foundation
                </span>
                <div className="bg-white w-10 h-9 rounded-[40px] p-1.5 flex gap-2 hover:bg-none">
                  <img src={arrow} alt="arrow" />
                </div>
              </Button>
            </div>
          </div>

          {/* Lash Bloom Foundation */}
          <div className="flex flex-col gap-5 md:flex-row xl:flex-row xl:items-center md:items-center justify-between">
            <div className="relative">
              <img
                src={Frame7}
                alt=""
                className="w-[500px] xl:w-[748px] md:w-[748px] h-[305px] rounded-[20px]"
              />
              <Button className="absolute bottom-2 left-5 hover:bg-black/30 h-11 rounded-[40px] w-[280px] gap-3 bg-Black/25 border-none flex flex-row px-3">
                <span className="text-white font-saonara font-[400px] text-[20px] leading-[100%] tracking-0">
                  Lash Bloom Foundation
                </span>
                <div className="bg-white w-10 h-9 rounded-[40px] p-1.5 flex gap-2 hover:bg-none">
                  <img src={arrow} alt="arrow" />
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-saonara font-[400px] text-[32px] leading-[100%] tracking-[0px] text-Black">
                Lash Bloom Foundation
              </h2>
              <p className="font-satoshiR w-[455px] text-[20px] leading-[130%] tracking-[0px] text-PBlack">
                Lash Bloom Mascara delivers lifted, lengthened, and voluminous
                lashes with a smooth, smudge-proof finish that lasts all day
              </p>
              <span className="font-saonara font-[400px] text-[32px] leading-[100%] tracking-[0px] text-Black">
                $38.50
              </span>
            </div>
          </div>
           {/* Rose Kiss Lipstick */}
          <div className="flex flex-col-reverse gap-5 md:flex-row xl:flex-row xl:items-center md:items-center justify-between                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
            <div className="flex flex-col gap-2">
              <h2 className="font-saonara font-[400px] text-[32px] leading-[100%] tracking-[0px] text-Black">
                Rose Kiss Lipstick
              </h2>
              <p className="font-satoshiR w-[450px] text-[20px] leading-[130%] tracking-[0px] text-PBlack">
                Rose Kiss Lipstick glides on with a creamy, velvety texture that
                delivers rich, lasting color while keeping lips soft, hydrated,
                and beautifully smooth.
              </p>
              <span className="font-saonara font-[400px] text-[32px] leading-[100%] tracking-[0px] text-Black">
                $50.00
              </span>
            </div>
            <div className="relative">
              <img
                src={Frame8}
                alt=""
                className="w-[500px] xl:w-[748px] md:w-[748px] h-[305px] rounded-[20px]"
              />
              <Button className="absolute bottom-2 left-5 h-11 hover:bg-black/30 rounded-[40px] w-[230px] gap-3.5 bg-Black/25 border-none flex flex-row px-3">
                <span className="text-white font-saonara font-[400px] text-[20px] leading-[100%] tracking-0">
                  Rose Kiss Lipstick
                </span>
                <div className="bg-white w-10 h-9 rounded-[40px] p-1.5 flex gap-2 hover:bg-none">
                  <img src={arrow} alt="arrow" />
                </div>
              </Button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Collections;
