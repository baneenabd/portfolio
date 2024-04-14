import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createContext } from "react";
export const Themecontext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const { path } = useLocation();
  console.log(path);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="dark:bg-Darkblack dark:text-white px-4">
        <NavBar />
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
