import Home from "../components/Home/index";
import Navbar from "../components/Navbar/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
