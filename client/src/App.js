import React, { useState, useEffect } from "react";
import Preloader from "../src/components/pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Log In/Login";

import Shops from "./components/Shops/Shops";
import Blog from "./components/Blog/Blog";
import Securities from "./components/Securities/Securities";
import Socials from "./components/Socials/Socials";

import Footer from "./components/Footer";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/shops" element={<Shops />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/securities" element={<Securities />} />
          <Route path="/socials" element={<Socials />} />
          
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;