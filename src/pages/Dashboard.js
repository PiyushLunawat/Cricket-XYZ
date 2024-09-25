import React, { useState } from "react";
import Quiz from "../components/Quiz";
import Tournament from "../components/Tournaments";
import Register from "../components/Register";
import obj from "../assets/img/OBJECTS.svg";
import Stats from "../components/Stats";
import Teams from "../components/Teams";
import Start from "../components/Start";

const Dashboard = ({ setActiveComponent }) => {
  const [activeComponent, setLocalActiveComponent] = useState(""); // Local state to control current section

  // Update both local state and pass activeComponent to App.js
  const handleSetActiveComponent = (component) => {
    setLocalActiveComponent(component);
    setActiveComponent(component); 
  };

  return (
    <>
      <div className="p-4 text-white">

        <div className="component-container mx-4 sm:mx-16 my-2 ">
          {activeComponent === "stats" && <Stats setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "teams" && <Teams setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "tournament" && <Tournament setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "register" && <Register setActiveComponent={setLocalActiveComponent}/>} 
          {activeComponent === "quiz" && <Quiz setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "" && <Start />}
        </div>

        { activeComponent === "" && <div className="flex gap-8 fixed bottom-4 sm:bottom-12 lg:left-1/2 transform lg:-translate-x-1/2 z-10 justify-center ml-8 sm:ml-[55px] w-full overflow-auto">

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("stats")}>
            <img src={obj} alt="ObJ" className="w-24 relative"/>
            <button className={`relative w-[165px] px-2 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "stats" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Stats
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("teams")}>
            <img src={obj} alt="ObJ" className="w-24 relative"/>
            <button className={`relative w-[200px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "teams" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Teams
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("tournament")}>
            <img src={obj} alt="ObJ" className="w-24 relative"/>
            <button className={`relative w-[200px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "tournament" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Tournaments
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("register")}>    
            <img src={obj} alt="ObJ" className="w-24 relative"/>
            <button className={`relative w-[200px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "register" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Register Team
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("quiz")}>
            <img src={obj} alt="ObJ" className="w-24 relative"/>
            <button className={`relative w-[280px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "quiz" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              The Umpire's Call
            </button>
          </div>

        </div>}
      </div>
    </>
  );
};

export default Dashboard;
