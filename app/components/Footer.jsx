import React from "react";

const Footer = () => {
  return (
    <div className="text-[14px]">
      <a
        href="#scrollToTopBtn"
        id="scrollToTopBtnmain"
        class="bg-[#224BC1] fixed bottom-20 py-5 hover:bg-blue-700 text-white font-bold px-4 rounded"
      >
       <img src="./scrollup.png"/>
      </a>
      <footer class=" md:bg-[#03071e] mt-20">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <img
                  src="/navimage.png"
                  class="h-10 me-10"
                  alt="FlowBite Logo"
                />
              </a>
              <div className="my-5 text-[#ACAAAA]">
                <p>Lorem ipsum the best decentralizded <br/> with best features.</p>
                <p className="mt-3">All Rights Reserved.CUNetwork.io</p>
              </div>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Product
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    Product
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    Exchange
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    swap / stake
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Support
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    Email
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    Telegram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline text-[#676666]">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline text-[#676666]">
                    INC Limited
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline text-[#676666]">
                    Listed
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
