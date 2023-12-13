import React from "react";

const InvestmentOpportunities = () => {
  return (
    <div>
      <div className="flex space-x-2 justify-center text-white p-1 mx-auto rounded-2xl bg-[#2F283F] max-w-[400px]">
        <span>
          <img src="./star.png" />
        </span>
        <span>Invest your assets on avtar exchange</span>
      </div>
      <h2 className="heading text-center text-white text-4xl my-5">
        Great investment opportunities
      </h2>
      <p className="md:w-1/3 text-center mx-auto text-white">
        Avtar coin comes with multiple utilities, where users can invest, stake,
        trade their Avtar coins to get rewards over the period.
      </p>

      <div class="container mx-auto text-white p-4 grid gap-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div class="p-4  rounded shadow-md text-center">
          <div className="w-12 h-12 mx-auto p-3 rounded rounded-full border border-gray-200">
            <img
              src="/opportunity/1.png"
              alt="Image 1"
              class=" mx-auto object-cover mb-2 rounded"
            />
          </div>
          <h2 class="text-xl font-bold mb-2">100% Decentralized</h2>
          <p class="text-white">Avtar coin is 100% decentralized. No one has an authority over the token holders. Its a non custodial wallet currency which is very secure.</p>
        </div>

        <div class="p-4  rounded shadow-md text-center">
          <div className="w-12 h-12 mx-auto p-3 rounded rounded-full border border-gray-200">
            <img
              src="/opportunity/2.png"
              alt="Image 2"
              class=" mx-auto object-cover mb-2 rounded"
            />
          </div>
          <h2 class="text-xl font-bold mb-2">Use for Ecommerce</h2>
          <p class="text-white">Avtar coins can be used to purchase various products listed on Avtar ecommerce websites. Vendors are welcome to join our marketplace</p>
        </div>

        <div class="p-4  rounded shadow-md text-center">
          <div className="w-12 h-12 mx-auto p-3 rounded rounded-full border border-gray-200">
            <img
              src="/opportunity/3.png"
              alt="Image 3"
              class=" mx-auto object-cover mb-2 rounded"
            />
          </div>
          <h2 class="text-xl font-bold mb-2">Less gas fees</h2>
          <p class="text-white">As the token is deployed on Bep20 network, gas fees required for every transaction is very less & its more convenient than other ETH tokens</p>
        </div>

        <div class="p-4  rounded shadow-md text-center">
          <div className="w-12 h-12 mx-auto p-3 rounded rounded-full border border-gray-200">
            <img
              src="/opportunity/1.png"
              alt="Image 4"
              class=" mx-auto object-cover mb-2 rounded"
            />
          </div>
          <h2 class="text-xl font-bold mb-2">100% Decentralized</h2>
          <p class="text-white">Avtar coin is 100% decentralized. No one has an authority over the token holders. Its a non custodial wallet currency which is very secure.</p>
        </div>

        <div class="p-4  rounded shadow-md text-center">
          <div className="w-12 h-12 mx-auto p-3 rounded rounded-full border border-gray-200">
            <img
              src="/opportunity/2.png"
              alt="Image 5"
              class="mx-auto object-cover mb-2 rounded"
            />
          </div>
          <h2 class="text-xl font-bold mb-2">Use for Ecommerce</h2>
          <p class="text-white">Avtar coins can be used to purchase various products listed on Avtar ecommerce websites. Vendors are welcome to join our marketplace</p>
        </div>

        <div class="p-4  rounded shadow-md text-center">
          <div className="image-container mx-auto h-[50px] w-[50px]">
            <div className="w-12 h-12 mx-auto p-3 rounded rounded-full border border-gray-200">
              <img
                src="/opportunity/3.png"
                alt="Image 6"
                class="  mx-auto object-cover mb-2 rounded"
              />
            </div>
          </div>
          <h2 class="text-xl font-bold mb-2">Less gas fees</h2>
          <p class="text-white">As the token is deployed on Bep20 network, gas fees required for every transaction is very less & its more convenient than other ETH tokens</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
