import React from "react";
import { sellsStatus } from "../../lib/lib";
import Container from "../SharedComponent/Container";
import StatusItem from "./StatusItem";

const SellStatus = () => {
  const status = sellsStatus;

  return (
    <div className="mt-20 bg-[#F6F5FC]">
      <Container>
        <div className="grid grid-cols-4 gap-5 ">
          {status.map((item) => (
            <StatusItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SellStatus;
