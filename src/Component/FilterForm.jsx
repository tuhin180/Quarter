import React from "react";
import Container from "./SharedComponent/Container";
import Button from "./SharedComponent/Button";
import { downArrowIcon } from "../lib/iconProvider";

const FilterForm = () => {
  return (
    <>
      <Container>
        <div className="py-7 grid grid-cols-4 gap-3 content-center">
          <div className="w-full relative">
            <select
              name=""
              id=""
              className="relative inline-block appearance-none w-full focus:border-[#FF5A3C] focus:outline-0 border border-[#FF5A3C] p-4 cursor-pointer"
            >
              <option value="me">Me</option>
              <option value="">Select Location</option>
              <option value="me">New York</option>
              <option value="la">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
            <div className="absolute inset-y-5 right-0  px-3 pointer-events-none ">
              {downArrowIcon("#FF5A3C", 20, 20)}
            </div>
          </div>
          <div className="w-full">
            <select name="" id="">
              <option value="hi">there</option>
              <option value="">Select Location</option>
              <option value="me">New York</option>
              <option value="la">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <div className="w-full">
            <select name="" id="">
              <option value="there">there</option>
            </select>
          </div>
          <div className="w-full">
            <Button>FIND NOW</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FilterForm;
