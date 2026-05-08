import React, { useState } from "react";
import { Button } from "./ui/Button";
import { arrowLeft, arrowRight } from "../assets";
import { Products } from "../constants";

const Product: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === Products.length - 1 ? 0 : prev + 1));
  };

  const currentProduct = Products[currentIndex];

  return (
    <main className="py-5">
      <main className="bg-[url(./assets/ProductBg.jpg)] bg-center bg-cover bg-origin-padding bg-no-repeat container md:mx-auto md:max-w-370 max-w-full md:h-[800px] h-240 rounded-[10px]">
        <section className="container mx-auto max-w-7xl w-full h-screen py-10 px-6 flex flex-col md:items-center-safe md:justify-center-safe gap-10">
          <>
            <div className="w-full md:w-[860px] h-[500px] rounded-[10px] xl:bg-ShadowBG/50 flex xl:items-center-safe xl:justify-center-safe">
              <div className="w-[775px] h-[450px] rounded-[10px] xl:bg-ShadowBG/50 xl:px-6 flex xl:items-center-safe xl:justify-center-safe">
                <div
                  key={currentProduct.id}
                  className="flex flex-col w-[450px] md:w-full md:flex-row xl:justify-center-safe xl:items-center-safe gap-8"
                >
                  <img src={currentProduct.image} alt="" />
                  <div className="flex flex-col gap-4">
                    <span className="font-satoshiR text-[20px] leading-[100%] tracking-[0px] text-white">
                      {currentProduct.TopSeller}
                    </span>
                    <h6 className="font-saonara font-[400px] text-[32px] text-white leading-[100%] tracking-[0px]">
                      {currentProduct.Subtitle}
                    </h6>
                    <span className="font-satoshiR text-[13px] leading-[100%] tracking-[0px] underline">
                      {currentProduct.Description}
                    </span>
                    <p className="font-satoshiR font-[400px] text-[20px] leading-[100%] tracking-[0px] text-white md:w-[353px]">
                      {currentProduct.Paragraph}
                    </p>
                    <span className="font-saonara text-[32px] leading-[100%] tracking-[0px] text-white">
                      {currentProduct.Amount}
                    </span>

                    <div className="flex flex-row justify-between">
                      <Button className="bg-Black hover:bg-Black rounded-[10px] w-[150px] h-[47px]">
                        <span className="font-satoshiR text-[20px] leading-[100%] tracking-[0px] text-white">
                          {currentProduct.button}
                        </span>
                      </Button>

                      <div className="md:hidden flex flex-row gap-3">
                        <button
                          onClick={handlePrev}
                          className="w-9 h-9 border rounded-[40px] p-2.5 flex gap-2.5 border-Black cursor-pointer"
                        >
                          <img src={arrowLeft} alt="arrow" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-9 h-9 border border-Black rounded-[40px] p-2.5 flex gap-2.5 bg-Black cursor-pointer"
                        >
                          <img src={arrowRight} alt="arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>

          <div className="hidden md:flex flex-row gap-3">
            <button
              onClick={handlePrev}
              className="w-9 h-9 border rounded-[40px] p-2.5 flex gap-2.5 border-Black cursor-pointer"
            >
              <img src={arrowLeft} alt="arrow" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 border border-Black rounded-[40px] p-2.5 flex gap-2.5 bg-Black cursor-pointer"
            >
              <img src={arrowRight} alt="arrow" />
            </button>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Product;
