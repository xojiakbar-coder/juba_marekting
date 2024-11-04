import React from "react";
import HomePage from "./HomePage";
import Services from "./Services";
import Case from "./Case";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div className="w-full px-[5%] py-[25px]">
        <HomePage />
        <Services />
        <Case />
      </div>
      <About />
    </div>
  );
};

export default Home;
