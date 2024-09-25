import React, { useState } from "react";
import back from "../assets/img/back.svg";
import { Tabs, TabsContent } from "./trash/Tabs";

const playersT20Data = [
    { name: "Bhuvi Kumar", matches: 30, runs: 1200, wickets: 15, avg: 40.0, economy: 7.5, strikeRate: 140.0 },
    { name: "Yuvi Singh", matches: 25, runs: 900, wickets: 5, avg: 36.0, economy: 6.8, strikeRate: 135.0 },
    { name: "Virat k", matches: 50, runs: 1600, wickets: 30, avg: 32.0, economy: 8.0, strikeRate: 130.0 },
    { name: "Rohit Mehta", matches: 40, runs: 1300, wickets: 20, avg: 43.3, economy: 7.2, strikeRate: 145.0 },
    { name: "Kl Rahul", matches: 35, runs: 1100, wickets: 10, avg: 37.5, economy: 6.9, strikeRate: 138.0 },
    { name: "Munaf Patel", matches: 20, runs: 750, wickets: 12, avg: 39.5, economy: 7.0, strikeRate: 132.0 },
    { name: "Vivek Sharma", matches: 45, runs: 1400, wickets: 25, avg: 41.0, economy: 7.8, strikeRate: 139.0 },
    { name: "Kuldeep Yadav", matches: 27, runs: 900, wickets: 8, avg: 33.0, economy: 7.1, strikeRate: 137.0 },
    { name: "NItish Reddy", matches: 50, runs: 1500, wickets: 20, avg: 42.5, economy: 7.9, strikeRate: 140.0 },
    { name: "Karan Nair", matches: 38, runs: 1100, wickets: 18, avg: 38.0, economy: 7.3, strikeRate: 136.0 }
  ];  

  const playersTestData = [
    { name: "Nayan Joshi", matches: 40, runs: 3000, wickets: 40, avg: 45.0, economy: 3.0, strikeRate: 50.0 },
    { name: "Virat K", matches: 55, runs: 3500, wickets: 25, avg: 47.5, economy: 3.5, strikeRate: 55.0 },
    { name: "Mohit Sharma", matches: 60, runs: 4000, wickets: 50, avg: 50.0, economy: 3.2, strikeRate: 52.5 },
    { name: "Karthik Dinesh", matches: 70, runs: 4500, wickets: 60, avg: 55.0, economy: 2.8, strikeRate: 53.0 },
    { name: "Shrey Iyer", matches: 45, runs: 3300, wickets: 30, avg: 46.0, economy: 3.1, strikeRate: 54.0 },
    { name: "Vijay Hazare", matches: 52, runs: 3200, wickets: 40, avg: 48.0, economy: 3.3, strikeRate: 56.0 },
    { name: "Suresh Rain", matches: 60, runs: 3900, wickets: 45, avg: 51.0, economy: 3.2, strikeRate: 55.5 },
    { name: "Rahul Dravia", matches: 35, runs: 2900, wickets: 35, avg: 44.5, economy: 3.4, strikeRate: 53.0 },
    { name: "Nitish Ran", matches: 58, runs: 3700, wickets: 48, avg: 49.0, economy: 3.6, strikeRate: 51.5 },
    { name: "Karan Nair", matches: 65, runs: 4100, wickets: 52, avg: 50.5, economy: 3.0, strikeRate: 52.0 }
  ];
  

const Stats = ({ setActiveComponent }) => {
        const [searchTerm, setSearchTerm] = useState("");
        const [activeTab, setActiveTab] = useState("T20"); 
        
        const filteredT20Players = playersT20Data.filter((player) =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const filteredTestPlayers = playersTestData.filter((player) =>
            player.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
      
        return (
          <>
            <div className={`flex bg-black bg-opacity-90 w-fit text-white text-3xl p-4 shadow-lg gap-4 mb-4`}>
              <img src={back} alt="<-" className="w-8 cursor-pointer" onClick={() => setActiveComponent("")} /> 
              Player Statistics
            </div>
      
            <div className="flex justify-end w-full">
              <input
                type="text"
                placeholder="Search player..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="relative w-fit px-4 top-[30px] justify-end py-2 bg-black text-white focus:outline-none"
              />
            </div>
            
            <Tabs defaultActiveTab={0} setActiveTab={setActiveTab}>
              <TabsContent title="T20">
                <div className="w-full overflow-x-auto" style={{ height: 'calc(100vh - 300px)' }}>
                  <table className="w-full text-left ">
                    <thead>
                      <tr className="bg-[#09090b] text-green-500">
                        <th className="p-2">Name</th>
                        <th className="p-2">Matches</th>
                        <th className="p-2">Runs</th>
                        <th className="p-2">Wickets</th>
                        <th className="p-2">Average</th>
                        <th className="p-2">Economy</th>
                        <th className="p-2">Strike Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredT20Players.length > 0 ? (
                        filteredT20Players.map((player, index) => (
                          <tr key={index} className="bg-black bg-opacity-50">
                            <td className="p-2">{player.name}</td>
                            <td className="p-2">{player.matches}</td>
                            <td className="p-2">{player.runs}</td>
                            <td className="p-2">{player.wickets}</td>
                            <td className="p-2">{player.avg}</td>
                            <td className="p-2">{player.economy}</td>
                            <td className="p-2">{player.strikeRate}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center py-4">No players found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

          <TabsContent title="Test">
          <div className="w-full overflow-x-auto" style={{ height: 'calc(100vh - 300px)' }}>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#09090b] text-green-500">
                  <th className="p-2">Name</th>
                  <th className="p-2">Matches</th>
                  <th className="p-2">Runs</th>
                  <th className="p-2">Wickets</th>
                  <th className="p-2">Average</th>
                  <th className="p-2">Economy</th>
                  <th className="p-2">Strike Rate</th>
                </tr>
              </thead>
              <tbody>
                {filteredTestPlayers.length > 0 ? (
                    filteredTestPlayers.map((player, index) => (
                    <tr key={index} className="bg-black bg-opacity-50">
                      <td className="p-2">{player.name}</td>
                      <td className="p-2">{player.matches}</td>
                      <td className="p-2">{player.runs}</td>
                      <td className="p-2">{player.wickets}</td>
                      <td className="p-2">{player.avg}</td>
                      <td className="p-2">{player.economy}</td>
                      <td className="p-2">{player.strikeRate}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">No players found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>  
          </TabsContent>
        </Tabs>
    </>
  );
};

export default Stats;
