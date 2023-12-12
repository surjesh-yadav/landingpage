import React from "react";

const RewardsTransaction = () => {
  return (
    <div>
      <div className="flex space-x-2 justify-center p-1 mx-auto rounded-2xl bg-[#2F283F] w-1/4">
        <span>
          <img src="./star.png" />
        </span>
        <span>Earn level income upto 10 levels</span>
      </div>
      <h2 className="heading text-4xl my-2 text-center">Rewards on every transaction</h2>
      <p className="md:w-1/3 mx-auto">
        Whenever the transaction is made, 15% of the amount is distributed as a
        referral program to all the eligible holders
      </p>
    </div>
  );
};

export default RewardsTransaction;
