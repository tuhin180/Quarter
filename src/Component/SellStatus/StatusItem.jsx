import React from "react";

const StatusItem = ({ item }) => {
  return (
    <div className=" relative py-16 px-14  cursor-pointer hover:shadow-2xl before:absolute before:w-1 before:h-8 before:bg-orange-500 before:left-0 before:top-[50%] before:transition-all before:duration-300 before:scale-y-0 hover:before:scale-y-100 after:absolute after:w-1 after:h-8 after:right-0 after:top-[50%] after:bg-orange-500 after:scale-y-0 hover:after:scale-y-100 after:transition-all after:duration-100">
      <div className="flex items-center justify-center flex-col">
        <img src={item.icon} alt={item.icon} />
        <h2 className="font-bold font-poppins text-5xl mt-8 leading-normal">
          {item.number}
        </h2>
        <h3 className="font-bold font-nunito text-xl text-[#5C727D] leading-normal">
          {item.Tittle}
        </h3>
      </div>
    </div>
  );
};

export default StatusItem;
