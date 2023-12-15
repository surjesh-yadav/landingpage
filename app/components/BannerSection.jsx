import React from "react";
import Counter from './Counter'
const BannerSection = () => {
  return (
    <div className="banner-section text-white text-left md:text-center">
    <div className="flash">
      <h1 className="heading hidden md:block mb-5  text-[55px] font-bold">
        Decentralized coin with <br /> revenue generation
      </h1>
      <h1 className="heading block md:hidden text-center mt-28 mb-5 text-[32px] font-bold">
        Decentralized coin  with revenue generation
      </h1>
      <p className="description text-[20px]  text-center line-height-custom mx-auto md:w-1/2">
        You can trade, swap, stake and invest on CUNetwork platform. CUNetwork
        is a decentralized token deployed on binance smart chain network. Let’s
        go to the moon..
      </p>
      <div className="flex space-x-8 justify-center mt-8 pb-16">
        <a
          href="github.com"
          className="bg-[#232323FA] text-[20px] text-white px-2 md:px-10 py-3 rounded"
        >
          Whitepaper
        </a>
        <a href="#" className="bg-[#234BC1] text-[20px] px-2 md:px-10 py-3 rounded">
          Buy CUN
        </a>
      </div>
      </div>
      <div className="flex relative my-20 justify-center">
        <div>
          <div className="mb-10">
            <h3 className="text-[20px]  md:text-[40px]   font-bold text-[#3763FF]">85%</h3>
            <span className="text-left text-[16px] text-[#9A9A9A]">Liquidity <br/> Pool </span>
          </div>
          <div className="md:absolute mt-10 bottom-0 md:bottom-8">
            <h3 className="text-[20px]  md:text-[40px]  font-bold text-[#3763FF]">15%</h3>
            <h3 className="text-left text-[16px] text-[#9A9A9A]">Referral <br/> Program</h3>
          </div>
        </div>
        <div className="md:w-[40%]">
          <img className="mx-auto w-full" src="./bannercircle.svg" />
        </div>
        <div>
          <div className="">
            <h3 className="text-[20px]  md:text-[40px]  text-left font-bold text-[#3763FF]">60%</h3>
            <h3 className="text-left text-[16px] text-[#9A9A9A]"> Minted after <br/> selling</h3>
          </div>
          <div className="md:absolute mt-10 bottom-0 md:bottom-8">
            <h3 className="text-[20px]  md:text-[40px]  text-left font-bold text-[#3763FF]">5%</h3>
            <h3 className="text-left text-[16px] text-[#9A9A9A]">Admin <br/> charges</h3>
          </div>
        </div>
      </div>
      {/* <div className=" text-left hidden md:flex flex-wrap my-20 space-y-5 md:space-y-0 justify-between mx-auto">
        <div className="md:border-r md:pr-40 border-[#595959] max-w-[200px] md:max-w-none ">
          <h3 className="text-[#A7A5A5]">Tokens Burned</h3>
          <p className="text-[40px] font-bold">2,31,390</p>
        </div>
        <div className="md:border-r md:pr-40 border-[#595959] max-w-[200px] md:max-w-none ">
          <h3 className="text-[#A7A5A5]">Total holders</h3>
          <p className="text-[40px] font-bold">16,900</p>
        </div>
        <div className=" max-w-[200px] md:max-w-none ">
          <h3 className="text-[#A7A5A5]">Tokens minted</h3>
          <p className="text-[40px] font-bold">15,00,000</p>
        </div>
      </div> */}
      <Counter/>
    </div>
  );
};

export default BannerSection;
