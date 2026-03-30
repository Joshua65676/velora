import React from "react";
import { CatgoryList, CompanyList, ProductList, QuickList } from "../constants";
import { Link } from "react-router-dom";
import { footerLogo } from "../assets";

const Footer: React.FC = () => {
  return (
    <footer className="bg-Black h-[555px] relative flex items-center justify-center text-center">
      {/* Background layer */}
      <div className="absolute inset-0 flex item-center justify-center text-center">
        <h2 className="opacity-10 select-none text-white text-[354px] flex items-center justify-center text-center font-saonara leading-[130%] tracking-[0%] font-[400px]">
          Velora
        </h2>
      </div>
      {/* Foreground content */}

      <main className="container mx-auto max-w-6xl w-full relative top-[54px] flex flex-col items-center justify-center">
        {/* Footer Content */}
        <main className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col gap-5 items-start text-start">
            <h2 className="text-start font-satoshiM text-[20px] leading-[26px] tracking-[-0.01%] text-white">
              Product
            </h2>
            <ul className="flex flex-col gap-3 text-start">
              {ProductList.map(({ id, name, link }) => (
                <li>
                  <Link to={link} key={id}>
                    <span className="font-satoshiR text-[13px] leading-[26px] tracking-[-0.01%] text-SecWhite">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 items-start text-start">
            <h2 className="text-start font-satoshiM text-[20px] leading-[26px] tracking-[-0.01%] text-white">
              Company
            </h2>
            <ul className="flex flex-col gap-2 text-start">
              {CompanyList.map(({ id, name, link }) => (
                <li>
                  <Link to={link} key={id}>
                    <span className="font-satoshiR text-[13px] leading-[26px] tracking-[-0.01%] text-SecWhite">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 items-start text-start">
            <h2 className="text-start font-satoshiM text-[20px] leading-[26px] tracking-[-0.01%] text-white">
              Quick Link
            </h2>
            <ul className="flex flex-col gap-2 text-start">
              {QuickList.map(({ id, name, link }) => (
                <li>
                  <Link to={link} key={id}>
                    <span className="font-satoshiR text-[13px] leading-[26px] tracking-[-0.01%] text-SecWhite">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 items-start text-start">
            <h2 className="text-start font-satoshiM text-[20px] leading-[26px] tracking-[-0.01%] text-white">
              Catgory
            </h2>
            <ul className="flex flex-col gap-2 text-start">
              {CatgoryList.map(({ id, name, link }) => (
                <li>
                  <Link to={link} key={id}>
                    <span className="font-satoshiR text-[13px] leading-[26px] tracking-[-0.01%] text-SecWhite">
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        {/*  Footer Velora Logo*/}
        <section className="">
          <div className="flex flex-row items-center gap-12">
            <img src={footerLogo} alt="Velora Logo" className="" />
            <span className="text-[180px] leading-0 tracking-0 text-white font-saonara font-[400px] pt-0 mb-0 relative top-11 bottom-0">
              Velora
            </span>
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
