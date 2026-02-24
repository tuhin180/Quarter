import React from "react";

const Category = ({ cat }) => {
  return (
    <div className="flex gap-2.5 items-center">
      <div className="rounded-full p-3 bg-gradient-to-br from-slate-100 to-slate-200">
        {cat.icon()}
      </div>
      <p className="font-bold leading-normal text-lg ">{cat.title}</p>
    </div>
  );
};

export default Category;
