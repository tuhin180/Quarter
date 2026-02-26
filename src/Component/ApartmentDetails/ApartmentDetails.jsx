import React, { useState } from "react";
import { ApartmentData } from "../../lib/lib";

const ApartmentDetails = () => {
  const [isActive, setActive] = useState(1);
  const { heading, title, plans } = ApartmentData;
  const selectedPlan = plans.find((plan) => plan.id === isActive);
  console.log(selectedPlan);
  return (
    <div className="mt-5  ">
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-nunito  font-bold px-3 py-1 text-orange-500 bg-orange-100 rounded-2xl ">
          {heading}
        </h4>
        <h2 className="font-bold text-5xl leading-normal font-poppins mt-8">
          {title}
        </h2>
      </div>
      <div className="mt-5 flex justify-center items-center gap-10 ">
        {plans.map((plan) => (
          <button
            className={`font-bold font-nunito text-xl hover:text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-100 ${plan.id === isActive ? "bg-orange-200 text-orange-700" : ""}`}
          >
            {plan.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApartmentDetails;
