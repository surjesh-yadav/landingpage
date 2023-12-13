import React from "react";

const Footer = () => {
  return (
    <div>
      <a
        href="#scrollToTopBtn"
        id="scrollToTopBtnmain"
        class="bg-[#1D1138] fixed bottom-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
       ^
      </a>
      <footer class=" bg-[#03071e] mt-20">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <img
                  src="/navimage.png"
                  class="h-20 me-20"
                  alt="FlowBite Logo"
                />
              </a>
              <div className="my-5">
                <p>Lorem ipsum the best decentralizded with best features.</p>
                <p>All Rights Reserved.CUNetwork.io</p>
              </div>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Product
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Product
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline">
                    Exchange
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline">
                    swap / stake
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline">
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
                  <a href="#" class="hover:underline ">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline">
                    Email
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline">
                    Telegram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" class="hover:underline">
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
                  <a href="#" class="hover:underline">
                    INC Limited
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
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
