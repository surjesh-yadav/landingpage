import React from "react";

const Subscribe = () => {
  return (
    <div>
      <h2 className=" text-3xl md:text-4xl font-bold ml-5 md:text-center">
        Subscribe
      </h2>
      <div
        style={{
          backgroundImage: "url(./subscribeform.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderBottom: "1px solid #343238",
          borderRadius: "15px",
        }}
        className="p-5 md:px-20  md:hidden block mt-8"
      >
        <div className="md:flex justify-between">
          <div className="my-auto">
            <h3 className="text-[20px] md:text-[30px]">News and updates</h3>
            <p className="text-[#A4A2A2]">Subscribe to our newsletter</p>
          </div>
          <div class="max-w-md w-full mt-5 md:p-6 rounded-md shadow-md">
            <div class="relative">
              <input
                type="text"
                placeholder="Enter your Email"
                class="w-full py-4 pl-4 pr-12 border border-1 border-[#343238] p-4 rounded-md bg-transparent focus:outline-none"
              />

              <button
                type="submit"
                class="absolute hidden md:block right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-[#224BC1] text-white rounded-md focus:outline-none "
              >
                Subscribe
              </button>
              <button
                type="submit"
                class="block md:hidden px-4 py-2 w-full mt-5 bg-[#224BC1] text-white rounded-md focus:outline-none "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(./subscribebg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderBottom: "1px solid #343238",
          borderRadius: "20px",
        }}
        className="p-5 md:px-20 hidden md:block mt-8"
      >
        <div className="md:flex justify-between">
          <div className="my-auto">
            <h3 className="text-[20px] md:text-[30px]">News and updates</h3>
            <p className="text-[#A4A2A2]">Subscribe to our newsletter</p>
          </div>
          <div class="max-w-md w-full mt-5 md:p-6 rounded-md shadow-md">
            <div class="relative">
              <input
                type="text"
                placeholder="Enter your Email"
                class="w-full py-4 pl-4 pr-12 border border-1 border-[#343238] p-4 rounded-md bg-transparent focus:outline-none"
              />

              <button
                type="submit"
                class="absolute hidden md:block right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-[#224BC1] text-white rounded-md focus:outline-none "
              >
                Subscribe
              </button>
              <button
                type="submit"
                class="block md:hidden px-4 py-2 w-full mt-5 bg-[#224BC1] text-white rounded-md focus:outline-none "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
