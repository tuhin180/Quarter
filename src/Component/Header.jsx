import React, { useState } from "react";
import Container from "./SharedComponent/Container";
import { headerData, socialData } from "../lib/lib";
import Button from "./SharedComponent/Button";

const Header = () => {
  const [headerInfo] = useState(headerData);
  const [socialdata] = useState(socialData);

  return (
    <div className="bg-[#0A2C3D]">
      <Container>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-4  ">
            {/* we can add divide-x divide-gray-50 for the horizontl line  */}
            {headerInfo.map((info, index) => {
              return (
                <div
                  key={info.id}
                  className={`flex items-center gap-x-3 text-white text-sm pr-2.5 ${index !== headerInfo.length - 1 ? " border-r border-r-gray-100" : ""}`}
                >
                  <span>{info.icons()}</span>
                  <p>{info.text}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-x-4 ">
            {socialdata.map((data) => {
              return (
                <div key={data.id}>
                  <span>{data.icons()}</span>
                </div>
              );
            })}
            <Button>Add Listings</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
