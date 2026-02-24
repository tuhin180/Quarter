import React from "react";

import Header from "../Component/Header";
import MenuItems from "../Component/MenuItems";
import Banner from "../Component/Banner";
import FilterForm from "../Component/FilterForm";
import About from "../Component/About/About";
import SellStatus from "../Component/SellStatus/SellStatus";

const Home = () => {
  return (
    <>
      <Header />
      <MenuItems />
      <Banner />
      <FilterForm />
      <About />
      <SellStatus />
    </>
  );
};

export default Home;
