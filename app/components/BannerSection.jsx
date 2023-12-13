import React from "react";

const BannerSection = () => {
  return (
    <div className="banner-section text-white text-center pt-10">
      <h1 className="heading  text-[40px] font-bold">
        Decentralized coin with <br /> revenue generation
      </h1>
      <p className="description mx-auto md:w-1/3">
        You can trade, swap, stake and invest on CUNetwork platform. CUNetwork
        is a decentralized token deployed on binance smart chain network. Let’s
        go to the moon..
      </p>
      <div className="flex space-x-10 justify-center mt-10">
        <button className="bg-[#232323FA] text-white px-2 py-1 rounded">
            Whitepaper
        </button>
        <button className="bg-[#7539F7FA] px-2 py-1 rounded">
            Buy CUN
        </button>
      </div>
       <div>
        <div>

        </div>
        <div>
            <img className="mx-auto" src="./big-icon 1.png"/>
        </div>
        <div>
            
        </div>
       </div>
    </div>
  );
};

export default BannerSection;
