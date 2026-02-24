import React from "react";
import { AboutData } from "../../lib/lib";
import Container from "../SharedComponent/Container";
import VideoPlay from "./VideoPlay";
import Category from "./Category";
import Button from "../SharedComponent/Button";

const About = () => {
  const {
    id,
    title,
    heading,
    img,
    video,
    paragraph,
    category,
    details,
    thumbnail,
  } = AboutData;

  return (
    <Container>
      <div className=" mt-5 flex gap-10 p-8  ">
        <div className="relative mt-8 flex-1 ">
          <img
            src="../../public/About_Shape.png"
            alt=""
            className=" absolute -top-9 -left-8  object-contain z-0"
          />
          <div className=" relative p-4 shadow-xl rounded  bg-white   ">
            <picture>
              <img src={img} alt={img} className="w-full h-auto" />
            </picture>
          </div>
          <div className="absolute bottom-4 -left-9 w-100">
            <VideoPlay src={video} thumbnail={thumbnail} />
          </div>
        </div>

        <div className=" flex-1 p-10">
          <span className="font-bold text-lg text-orange-600 font-nunito rounded-lg py-1 px-4 bg-orange-100">
            {title}
          </span>
          <h2 className="font-bold text-5xl font-poppins leading-normal pt-5">
            {heading}
          </h2>
          <p className="text-lg text-[#5C727D]  mt-8 font-nunito">
            {paragraph}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {category.map((cat) => (
              <Category key={cat.id} cat={cat} />
            ))}
          </div>
          <div className="mt-10 bg-orange-100">
            <p className="whitespace-pre-line font-nunito text-lg p-6 leading-9 text-[#5C727D] border-l-8 border-orange-500">
              &ldquo;{details}&rdquo;
            </p>
          </div>
          <Button text="Know More" className="mt-10" />
        </div>
      </div>
    </Container>
  );
};

export default About;
