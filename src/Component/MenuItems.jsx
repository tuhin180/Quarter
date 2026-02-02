import React, { useState } from "react";
import Container from "./SharedComponent/Container";
import { menu, menuIcon } from "../lib/lib";

const MenuItems = () => {
  const [menus] = useState(menu);
  const [menuIcons] = useState(menuIcon);
  return (
    <>
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="">
            <picture>
              <img src="../../public/logo.png" alt="" />
            </picture>
          </div>
          <div className="flex px-6">
            <ul className="flex items-center ">
              {menus.map((item) => (
                <li key={item.id} className="px-4 font-bold">
                  <a className=" hover:text-[#FF5A3C]" href={item.link}>
                    {item.items}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pl-5">
              <ul className="flex items-center">
                {menuIcons.map((icon) => (
                  <li key={icon.id} className="px-3 cursor-pointer">
                    <a href={icon.link}> {icon.icons()}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MenuItems;
