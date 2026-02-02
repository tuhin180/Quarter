import React from "react";
import Button from "./Button";

const BannerContent = ({ items }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <h5 className="flex items-center px-2">
          <span>{items.icons()}</span>
          {items.subHeading}
        </h5>
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl leading-normal">
          {items.heading}
        </h1>
        <p className="leading-normal">{items.paragraph}</p>
        <div className="py-5 flex items-center gap-10">
          <Button>View Properties</Button>
          {items.playIcons && (
            <span className="p-5 rounded-full bg-white shadow-xl">
              {" "}
              {items.playIcons()}
            </span>
          )}
        </div>
      </div>
      <div>
        <picture>
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={items.img}
            alt={items.img}
          />
        </picture>
      </div>
    </div>
  );
};

export default BannerContent;
