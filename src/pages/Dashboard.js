import React, { useState, useEffect, useRef } from "react";
import Quiz from "../components/Quiz";
import Tournament from "../components/Tournaments";
import Register from "../components/Register";
import obj from "../assets/img/OBJECTS.svg";
import Stats from "../components/Stats";
import Teams from "../components/Teams";
import Home from "../components/HOme";
import ImageLoader from "../components/trash/ImageLoader";

const Dashboard = ({ setActiveComponent }) => {
  const [activeComponent, setLocalActiveComponent] = useState(""); 
  const [teamsData, setTeamsData] = useState([
    {
      id: 1,
      teamName: 'Tigers',
      phoneNo: '1122334455',
      email: 'tigers@example.com',
      players: [
        { playerName: 'Ravi Kumar', jerseyNo: 12, role: 'Batsman' },
        { playerName: 'Ajay Verma', jerseyNo: 14, role: 'Bowler' },
        { playerName: 'Piyush Patel', jerseyNo: 15, role: 'Wicketkeeper' },
        { playerName: 'Manish Sharma', jerseyNo: 16, role: 'All-Rounder' },
        { playerName: 'Vinay Singh', jerseyNo: 19, role: 'Batsman' }
      ]
    },
    {
      id: 2,
      teamName: 'Dragons',
      phoneNo: '0987654321',
      email: 'dragons@example.com',
      players: [
        { playerName: 'Michael Clarke', jerseyNo: 22, role: 'Batsman' },
        { playerName: 'Brett Lee', jerseyNo: 23, role: 'Bowler' },
        { playerName: 'Adam Gilchrist', jerseyNo: 24, role: 'Wicketkeeper' },
        { playerName: 'Shane Watson', jerseyNo: 25, role: 'All-Rounder' }
      ]
    },
    {
      id: 3,
      teamName: 'Raptors',
      phoneNo: '4455667788',
      email: 'raptors@example.com',
      players: [
        { playerName: 'Arjun Sharma', jerseyNo: 3, role: 'Batsman' },
        { playerName: 'Kunal Jain', jerseyNo: 8, role: 'Bowler' },
        { playerName: 'Nitin Kapoor', jerseyNo: 9, role: 'Wicketkeeper' },
        { playerName: 'Amitabh Reddy', jerseyNo: 10, role: 'All-Rounder' },
        { playerName: 'Anil Rao', jerseyNo: 11, role: 'Bowler' },
        { playerName: 'Rahul Sen', jerseyNo: 12, role: 'Batsman' },
        { playerName: 'Rakesh Prasad', jerseyNo: 14, role: 'All-Rounder' },
        { playerName: 'Vivek Singh', jerseyNo: 16, role: 'Bowler' },
        { playerName: 'Abhishek Patil', jerseyNo: 17, role: 'Batsman' },
        { playerName: 'Devang Joshi', jerseyNo: 18, role: 'Bowler' },
        { playerName: 'Yash Sharma', jerseyNo: 20, role: 'Wicketkeeper' }
      ]
    },    
    {
      id: 4,
      teamName: 'Warriors',
      phoneNo: '1234567890',
      email: 'warriors@example.com',
      players: [
        { playerName: 'John Doe', jerseyNo: 10, role: 'Batsman' },
        { playerName: 'Sam Smith', jerseyNo: 9, role: 'Bowler' },
        { playerName: 'Alex Brown', jerseyNo: 7, role: 'Wicketkeeper' },
        { playerName: 'Chris Adams', jerseyNo: 8, role: 'All-Rounder' }
      ]
    },
    {
      id: 4,
      teamName: 'Panthers',
      phoneNo: '6677889900',
      email: 'panthers@example.com',
      players: [
        { playerName: 'Suresh Nair', jerseyNo: 2, role: 'Batsman' },
        { playerName: 'Rohan Mehta', jerseyNo: 4, role: 'Bowler' },
        { playerName: 'Ishan Chauhan', jerseyNo: 5, role: 'All-Rounder' },
        { playerName: 'Naveen Gupta', jerseyNo: 6, role: 'Batsman' },
        { playerName: 'Siddharth Malhotra', jerseyNo: 9, role: 'Bowler' },
        { playerName: 'Vikram Thakur', jerseyNo: 11, role: 'Wicketkeeper' },
        { playerName: 'Karan Desai', jerseyNo: 13, role: 'All-Rounder' }
      ]
    }
  ]);

  const addNewTeam = (newTeam) => {
    setTeamsData([...teamsData, { ...newTeam, id: teamsData.length + 1 }]);
  };
  const handleSetActiveComponent = (component) => {
    setLocalActiveComponent(component);
    setActiveComponent(component); 
  };

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2 - scrollContainer.clientWidth / 2;
    }
  }, []);

  return (
    <>
      <div className="p-4 text-white">

        <div className="component-container mx-4 sm:mx-16 my-2 ">
          {activeComponent === "stats" && <Stats setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "teams" && <Teams teamsData={teamsData} setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "tournament" && <Tournament setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "register" && <Register setActiveComponent={setLocalActiveComponent} addNewTeam={addNewTeam}/>} 
          {activeComponent === "quiz" && <Quiz setActiveComponent={setLocalActiveComponent}/>}
          {activeComponent === "" && <Home />}
        </div>

        { activeComponent === "" &&
        <div className="fixed bottom-4 sm:bottom-4 lg:left-1/2 transform lg:-translate-x-[40%] z-10 justify-center ml-8 sm:ml-[55px]">
         <div ref={scrollContainerRef}  className="flex gap-8 w-[100vw] pl-8 overflow-x-auto custom-scrollbar">
          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("stats")}>
            <ImageLoader src={obj} alt="ObJ"/> 
            <button className={`relative w-[165px] px-2 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "stats" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Stats
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("teams")}>
            <ImageLoader src={obj} alt="ObJ"/> 
            <button className={`relative w-[200px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "teams" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Teams
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("register")}>   
            <ImageLoader src={obj} alt="ObJ"/> 
            <button className={`relative w-[200px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "register" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Register Team
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("tournament")}>
          <ImageLoader src={obj} alt="ObJ"/> 
            <button className={`relative w-[200px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "tournament" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              Tournaments
            </button>
          </div>

          <div className="relative w-fit group" onClick={() => handleSetActiveComponent("quiz")}>
            <ImageLoader src={obj} alt="ObJ"/> 
            <button className={`relative w-[280px] px-6 py-2 -left-[25%] -top-[50%] group-hover:-top-[75%] transition-all duration-300 ${activeComponent === "quiz" ? "text-black bg-green-500 font-bold" : "text-green-500 bg-black"}`}>
              The Umpire's Call
            </button>
          </div>
         </div>
        </div>}
      </div>
    </>
  );
};

export default Dashboard;
