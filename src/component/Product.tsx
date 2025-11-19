import React from "react";
import { Button } from "./ui/Button";
import { arrowLeft, arrowRight, Frame9 } from "../assets";

const Product: React.FC = () => {
  return (
    <main className="py-5">
      <main className="bg-[url(./assets/ProductBg.jpg)] bg-center bg-cover bg-origin-padding container mx-auto max-w-370 h-screen rounded-[10px]">
        <section className="container mx-auto max-w-7xl w-full h-screen py-10 px-6 flex flex-col items-center-safe justify-center-safe gap-10">
          <>
            <div className="w-[860px] h-[500px] rounded-[10px] bg-ShadowBG/50 flex items-center-safe justify-center-safe">
              <div className="w-[775px] h-[450px] rounded-[10px] bg-ShadowBG/50 px-6 flex items-center-safe justify-center-safe">
                <div className="flex flex-row justify-center-safe items-center-safe gap-8">
                  <img src={Frame9} alt="" />
                  <div className="flex flex-col gap-4">
                    <span className="font-satoshiR text-[20px] leading-[100%] tracking-[0px] text-white">
                      Top seller
                    </span>
                    <h6 className="font-saonara font-[400px] text-[32px] text-white leading-[100%] tracking-[0px]">
                      Dior vernis nail polish
                    </h6>
                    <span className="font-satoshiR text-[13px] leading-[100%] tracking-[0px] underline">
                      Description
                    </span>
                    <p className="font-satoshiR font-[400px] text-[20px] leading-[100%] tracking-[0px] text-white w-[353px]">
                      Dior Vernis Nail Polish offers vibrant, couture-inspired
                      color with a long-lasting gel-shine finish that
                      strengthens and beautifies nails in every stroke.
                    </p>
                    <span className="font-saonara text-[32px] leading-[100%] tracking-[0px] text-white">
                      $28
                    </span>
                    <Button className="bg-Black hover:bg-Black rounded-[10px] w-[150px] h-[47px]">
                      <span className="font-satoshiR text-[20px] leading-[100%] tracking-[0px] text-white">
                        Buy Now
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>

          <div className="flex flex-row gap-3">
            <button className="w-9 h-9 border rounded-[40px] p-2.5 flex gap-2.5 border-Black cursor-pointer">
              <img src={arrowLeft} alt="arrow" />
            </button>
            <button className="w-9 h-9 border border-Black rounded-[40px] p-2.5 flex gap-2.5 bg-Black cursor-pointer">
              <img src={arrowRight} alt="arrow" />
            </button>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Product;
