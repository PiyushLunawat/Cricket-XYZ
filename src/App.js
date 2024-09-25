import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import background from "./assets/img/emptyG.jpg";
import stats from "./assets/img/stats.jpeg";
import team from "./assets/img/team.jpeg";
import tournament from "./assets/img/tournament.jpeg";
import register from "./assets/img/register.jpeg";
import win from "./assets/img/win.jpeg";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Dashboard from "./pages/Dashboard"; 
import About from "./pages/About";


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(""); // State to track active component

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to return background image based on active component
  const getBackgroundImage = () => {
    switch (activeComponent) {
      case "stats":
        return `url(${stats})`;
      case "tournament":
        return `url(${tournament})`;
      case "teams":
        return `url(${team})`;
      case "register":
          return `url(${register})`; 
      case "quiz":
        return `url(${win})`; 
      case "":
        return `url(${background})`; 
      default:
        return `url(${background})`;
    }
  };

  return (
    <Router>
      <div className="relative h-[100vh] w-full">
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: getBackgroundImage(),
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: -1,
          }}
        ></div>

        <Header onContactClick={toggleDrawer} />

        <Routes>
          <Route path="/" element={<Dashboard setActiveComponent={setActiveComponent} />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>

        <Footer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </Router>
  );
}

export default App;
