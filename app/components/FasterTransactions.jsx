import React from "react";

const FasterTransactions = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./transaction.png)",
        backgroundRepeat: "no-repeat",
      }}
      className="container fasterTransaction mx-auto"
    >
      <div className="flex">
        <div className="p-10">
          <div className="flex space-x-2 justify-center p-1 mx-auto rounded-2xl bg-[#2F283F] w-1/4">
            <span>
              <img src="./star.png" />
            </span>
            <span>Faster Transaction</span>
          </div>
          <p className="md:w-1/2">
            There are multiple reasons why Avtar coin is deployed on Bep20
            network & few of them are listed below
          </p>
        </div>
        <div className="w-1/2">
          <img src="./faster-right-image.png" />
        </div>
      </div>
    </div>
  );
};

export default FasterTransactions;
