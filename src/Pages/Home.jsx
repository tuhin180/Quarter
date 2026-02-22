import React from "react";

import Header from "../Component/Header";
import MenuItems from "../Component/MenuItems";
import Banner from "../Component/Banner";
import FilterForm from "../Component/FilterForm";
import About from "../Component/About";

const Home = () => {
  return (
    <>
      <Header />
      <MenuItems />
      <Banner />
      <FilterForm />
      <About />
    </>
  );
};

export default Home;
