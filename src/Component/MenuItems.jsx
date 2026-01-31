import React from "react";
import Container from "./SharedComponent/Container";

const MenuItems = () => {
  return (
    <>
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <picture>
              <img src="../../public/logo.png" alt="" />
            </picture>
          </div>
          <div className=""></div>
        </div>
      </Container>
    </>
  );
};

export default MenuItems;
