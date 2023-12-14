import React from "react";

const InvestmentOpportunities = () => {
  return (
    <div className="relative">
      <div className=" mt-32 mb-20">
        <div className="flex space-x-2 justify-center text-white p-1.5 mx-auto rounded-3xl bg-[#224BC1] max-w-[340px]">
          <span>
            <img className="h-[25px] w-[25px]" src="./star.svg" />
          </span>
          <span className="block md:hidden">Invest your assets with us</span>
          <span className="hidden md:block">Invest your assets on avtar exchange</span>
        </div>
        <h2 className="heading text-center text-white text-[30px] md:text-4xl mt-5 font-semibold">
          Great investment opportunities
        </h2>
        <p className="md:w-1/2 mt-4 text-center mx-auto text-white line-height-custom">
        Avtar coin comes with multiple utilities, where users can invest, stake, trade their Avtar coins to get rewards over the period.
        </p>
      </div>
      <div class="container my-10 mx-auto text-white bg-[#0B1A4F] grid md:gap-[2px] xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div class="  bg-[#03071e] p-5 md:p-10 mx-auto text-center">
          <div
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-12 h-12 mx-auto p-3">
            <img
              src="/opportunity/1.png"
              alt="Image 1"
              class=" mx-auto object-cover  w-5 rounded"
            />
          </div>
          <h2 class=" text-lg font-bold mb-4 mt-8">100% Decentralized</h2>
          <p class="text-white text-[14px] md:text-[16px] opportunity_desc">
            Avtar coin is 100% decentralized. No one has an authority over the
            token holders. Its a non custodial wallet currency which is very
            secure.
          </p>
        </div>

        <div class=" bg-[#03071e] p-5 md:p-10 mx-auto text-center">
          <div
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-12 h-12 mx-auto p-3"
          >
            <img
              src="/opportunity/2.png"
              alt="Image 2"
              class=" mx-auto object-cover  rounded w-5"
            />
          </div>
          <h2 class=" text-lg font-bold mb-4 mt-8">Use for Ecommerce</h2>
          <p class="text-white text-[14px] md:text-[16px] opportunity_desc">
            Avtar coins can be used to purchase various products listed on Avtar
            ecommerce websites. Vendors are welcome to join our marketplace
          </p>
        </div>

        <div class="  bg-[#03071e] p-5 md:p-10 mx-auto text-center">
          <div
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-12 h-12 mx-auto p-3"
          >
            <img
              src="/opportunity/3.png"
              alt="Image 3"
              class=" mx-auto object-cover  mb-2 rounded w-5"
            />
          </div>
          <h2 class=" text-lg font-bold mb-4 mt-8">Less gas fees</h2>
          <p class="text-white text-[14px] md:text-[16px] opportunity_desc">
            As the token is deployed on Bep20 network, gas fees required for
            every transaction is very less & its more convenient than other ETH
            tokens
          </p>
        </div>

        <div class="  bg-[#03071e] p-5 md:p-10 mx-auto text-center">
          <div
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-12 h-12 mx-auto p-3"
          >
            <img
              src="/opportunity/1.png"
              alt="Image 4"
              class=" mx-auto object-cover  mb-2 rounded w-5"
            />
          </div>
          <h2 class=" text-lg font-bold mb-4 mt-8">100% Decentralized</h2>
          <p class="text-white text-[14px] md:text-[16px] opportunity_desc">
            Avtar coin is 100% decentralized. No one has an authority over the
            token holders. Its a non custodial wallet currency which is very
            secure.
          </p>
        </div>

        <div class="  bg-[#03071e] p-5 md:p-10 mx-auto text-center">
          <div
            style={{
              backgroundImage: "url(./Ellipse.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-12 h-12 mx-auto p-3"
          >
            <img
              src="/opportunity/2.png"
              alt="Image 5"
              class="mx-auto object-cover  mb-2 rounded w-5"
            />
          </div>
          <h2 class=" text-lg font-bold mb-4 mt-8">Use for Ecommerce</h2>
          <p class="text-white text-[14px] md:text-[16px] opportunity_desc">
            Avtar coins can be used to purchase various products listed on Avtar
            ecommerce websites. Vendors are welcome to join our marketplace
          </p>
        </div>

        <div class="  bg-[#03071e] p-5 md:p-10 mx-auto text-center">
          <div className="image-container mx-auto h-[50px] w-[50px]">
            <div
              style={{
                backgroundImage: "url(./Ellipse.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-12 h-12 mx-auto p-3"
            >
              <img
                src="/opportunity/3.png"
                alt="Image 6"
                class="  mx-auto object-cover  mb-2 rounded w-5"
              />
            </div>
          </div>
          <h2 class=" text-lg font-bold mb-4 mt-8">Less gas fees</h2>
          <p class="text-white text-[14px]  md:text-[16px] opportunity_desc">
            As the token is deployed on Bep20 network, gas fees required for
            every transaction is very less & its more convenient than other ETH
            tokens
          </p>
        </div>
      </div>
      {/* <div className=""><img className="line_opportunity" src="/Rectangle.png"/></div> */}
    </div>
  );
};

export default InvestmentOpportunities;
