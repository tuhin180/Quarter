import React from "react";
import Container from "./SharedComponent/Container";
import Button from "./SharedComponent/Button";
import { downArrowIcon, filterIcon } from "../lib/iconProvider";
import { useFetch } from "../Hooks/customhooks";

const FilterForm = () => {
  const { data, loading, error } = useFetch(
    "https://bdapi.vercel.app/api/v.1/division",
  );

  return (
    <div className=" relative -top-20">
      <Container>
        <div className="p-7 flex items-center gap-6 justify-between bg-white shadow-lg rounded-md">
          <div className="flex-1 relative">
            <select
              name=""
              id=""
              className="relative inline-block appearance-none w-full focus:border-[#FF5A3C] focus:outline-0 border border-[#FF5A3C] p-4 cursor-pointer"
            >
              <option value="choose Area">Choose Area</option>
              {data.map((district) => {
                return (
                  <option key={district.id} value={district.name}>
                    {district.name}
                  </option>
                );
              })}
            </select>
            <div className="absolute inset-y-5 right-0  px-3 pointer-events-none ">
              {downArrowIcon("#FF5A3C", 20, 20)}
            </div>
          </div>
          <div className="flex-1 relative">
            <select
              name=""
              id=""
              className="relative inline-block appearance-none w-full focus:border-[#FF5A3C] focus:outline-0 border border-[#FF5A3C] p-4 cursor-pointer"
            >
              <option value="hi">there</option>
              <option value="">Select Location</option>
              <option value="me">New York</option>
              <option value="la">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
            <div className="absolute inset-y-5 right-0  px-3 pointer-events-none ">
              {downArrowIcon("#FF5A3C", 20, 20)}
            </div>
          </div>
          <div className="flex-1 relative">
            <select
              name=""
              id=""
              className="relative inline-block appearance-none w-full focus:border-[#FF5A3C] focus:outline-0 border border-[#FF5A3C] p-4 cursor-pointer"
            >
              <option value="there">there</option>
            </select>
            <div className="absolute inset-y-5 right-0  px-3 pointer-events-none ">
              {downArrowIcon("#FF5A3C", 20, 20)}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <span>{filterIcon("#FF5A3C", 20, 20)}</span>
            </div>
            <Button>FIND NOW</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilterForm;
