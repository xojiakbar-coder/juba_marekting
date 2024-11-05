import MainPage from "./Components";
import Home from "../components/Home/index";
import Navbar from "../components/Navbar/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compnents from "./Components";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Compnents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
