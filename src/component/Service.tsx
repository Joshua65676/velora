import React from "react";
import Grid from "./grid";
import Collections from "./Collections";

const Service: React.FC = () => {
  return (
    <main className="container mx-auto max-w-7xl w-full py-10 px-6">
      <section className="flex flex-col gap-10">
        {/* Nurture Section */}
        <main className="flex flex-col md:flex-row md:items-center md:justify-center xl:justify-between gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-saonara font-[400px] text-[64px] text-Black leading-[100%] tracking-[0%] w-[387px]">
              Nurture <span className="text-PBlack">Your Glow</span>
            </h2>
            <p className="md:w-[850px] w-[451px] font-satoshiI font-light text-[20px] leading-[130%] tracking-[0%] text-PBlack">
              At <span className="font-saonara font-[400px]">Velora</span>, we
              craft cosmetics that celebrate the harmony of nature and
              sophistication. Each product is designed to{" "}
              <span className="text-Black">
                enhance natural beauty with skin-loving ingredients, luxurious
                textures, and timeless shades,
              </span>{" "}
              allowing every woman to express herself with{" "}
              <span className="text-Black">
                confidence, grace, and radiance.
              </span>
            </p>
          </div>

          <>
           <Grid />
          </>
        </main>
        {/* Collection Section */}
        <Collections />
      </section>
    </main>
  );
};

export default Service;
