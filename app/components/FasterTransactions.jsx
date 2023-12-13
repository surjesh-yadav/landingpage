import React from "react";

const FasterTransactions = () => {
  return (
    <div className="mt-20">
      <div
        style={{
          backgroundImage: "url(./transaction.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderBottom: "1px solid #343238",
          borderRadius: "44px",
        }}
        className="container text-white fasterTransaction mx-auto"
      >
        <div className="md:flex">
          <div className="p-5 md:p-16 py-5 md:py-28">
            <div className="flex mx-auto md:mx-0 space-x-2 justify-around p-1 rounded-2xl px-3 bg-[#255EF0AB] max-w-[200px]">
              <span>
                <img src="./star.png" />
              </span>
              <span>Faster Transaction</span>
            </div>
            <p className="md:w-1/2 mt-5 text-center md:text-start">
              There are multiple reasons why Avtar coin is deployed on Bep20
              network & few of them are listed below
            </p>
            <ul className="bg-[#18193d] p-5 mt-10 mx-auto md:mx-0  rounded-2xl max-w-[280px]">
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

      <div className="mt-10 md:flex justify-between space-y-10 md:space-y-0 md:space-x-10">
        <div
          style={{
            backgroundImage: "url(./govern.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="rounded-3xl p-10 text-center md:text-left"
        >
          <div
            className="w-12 h-12 mx-auto md:mx-0 "
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img className="mx-auto py-2" src="./icon1.png" />
          </div>
          <h3 className="text-[20px] my-3">Govern by the community</h3>
          <p className="text-sm">
            Price of the token will be estimated & decided by the community. On
            every transaction LP will contributed with predecided percentage of
            tokens
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url(./refer.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" rounded-3xl p-10 text-center md:text-left"
        >
          <div
            className="w-12 h-12 mx-auto md:mx-0"
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img className="mx-auto py-2" src="./icon2.png" />
          </div>
          <h3 className="text-[20px] my-3">Govern by the community</h3>
          <p className="text-sm">
            Price of the token will be estimated & decided by the community. On
            every transaction LP will contributed with predecided percentage of
            tokens
          </p>
        </div>
      </div>
    </div>
  );
};

export default FasterTransactions;
