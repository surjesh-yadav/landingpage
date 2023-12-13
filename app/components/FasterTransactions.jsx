import React from "react";

const FasterTransactions = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./transaction.png)",
        backgroundRepeat: "no-repeat",
      }}
      className="container text-white fasterTransaction mx-auto"
    >
      <div className="md:flex">
        <div className="p-10">
          <div className="flex space-x-2 justify-center p-1 mx-auto rounded-2xl bg-[#2F283F] max-w-[255px]">
            <span>
              <img src="./star.png" />
            </span>
            <span>Faster Transaction</span>
          </div>
          <p className="md:w-1/2 mt-5">
            There are multiple reasons why Avtar coin is deployed on Bep20
            network & few of them are listed below
          </p>
          <ul className="bg-[#1d1530] p-5 mt-10 rounded rounded-lg max-w-[280px] border border-1 border-[#2F283F]">
            <li>Block speed is more on Bep20</li>
            <li> Gas optimization is better</li>
            <li>Transaction speed is more</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src="./faster-right-image.png" />
        </div>
      </div>
    </div>
  );
};

export default FasterTransactions;
