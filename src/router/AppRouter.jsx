import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Hakkımızda from "../pages/Hakkımızda";
import Yarisma from "../pages/Yarisma";
import WordNinja from "../pages/WordNinja";
import WordPyramids from "../pages/WordPyramids";
import Navbar from "../components/Navbar";

const AppRouter = () => { 
  //! Uygulamamıza Third Party library olan "react-router-dom" yükledik ve pageler için path yollarımızı belirledik
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkımızda />} />
        <Route path="/yarisma" element={<Yarisma />} />
        <Route path="wordninja" element={<WordNinja />} />
        <Route path="wordpyramids" element={<WordPyramids />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
