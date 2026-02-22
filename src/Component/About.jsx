import React from "react";
import { AboutData } from "../lib/lib";
import Container from "./SharedComponent/Container";
import VideoPlay from "./VideoPlay";

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
  console.log(id);
  return (
    <Container>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 p-8  ">
        <div className="relative mt-8 ">
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

        <div className=""></div>
      </div>
    </Container>
  );
};

export default About;
