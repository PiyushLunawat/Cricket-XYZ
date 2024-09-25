import React from "react";
import back from "../assets/img/back.svg";
import { Tabs, TabsContent } from "./Tabs";

const Tournaments = ({ setActiveComponent }) => {

  const currentTournaments = [
    {
      id: 1,
      name: "XYZ Premier League",
      teams: "Team A vs Team B",
      status: "Ongoing",
    },
  ];

  const previousTournaments = [
    {
      id: 1,
      name: "2022 World Cricket Championship",
      winner: "Team X",
      runnerUp: "Team Y",
    },
    {
      id: 2,
      name: "2021 XYZ Cricket League",
      winner: "Team Alpha",
      runnerUp: "Team Beta",
    },
  ];

  const upcomingTournaments = [
    {
      id: 1,
      name: "2024 XYZ Summer Cricket Series",
      date: "15th June 2024",
    },
    {
      id: 2,
      name: "2024 T20 Global Challenge",
      date: "25th July 2024",
    },
  ];


  return (
  <> 
    <div className={`flex bg-black bg-opacity-90 w-fit text-white text-3xl font-bold p-4 shadow-lg gap-4 mb-4`}>
      <img src={back} alt="<-" className="w-8 cursor-pointer" onClick={() => setActiveComponent("")} />
      Tournaments
    </div> 
 
    <Tabs defaultActiveTab={0}>
      <TabsContent title="Current Tournaments">
          {currentTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentTournaments.map((tournament) => (
                <div key={tournament.id} className="border border-gray-700 p-4 rounded-sm bg-black bg-opacity-50">
                  <h3 className="text-lg font-semibold mb-2">{tournament.name}</h3>
                  <p className="text-sm">Teams: {tournament.teams}</p>
                  <p className="text-sm">Status: {tournament.status}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No current tournaments available.</p>
          )}
      </TabsContent>

      <TabsContent title="Upcoming Tournaments">
          {upcomingTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingTournaments.map((tournament) => (
                <div key={tournament.id} className="border border-gray-700 p-4 rounded-sm bg-black bg-opacity-50">
                  <h3 className="text-lg font-semibold mb-2">{tournament.name}</h3>
                  <p className="text-sm">Date: {tournament.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming tournaments available.</p>
          )}
      </TabsContent>

      <TabsContent title="Previous Tournaments">
          {previousTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {previousTournaments.map((tournament) => (
                <div key={tournament.id} className="border border-gray-700 p-4 rounded-sm bg-black bg-opacity-50">
                  <h3 className="text-lg font-semibold mb-2">{tournament.name}</h3>
                  <p className="text-sm">Winner: {tournament.winner}</p>
                  <p className="text-sm">Runner-Up: {tournament.runnerUp}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No previous tournaments available.</p>
          )}
      </TabsContent>

    </Tabs>
  </>  
  );
};

export default Tournaments;
