import React from "react";
import back from "../assets/img/back.svg";
import { Tabs, TabsContent } from "./trash/Tabs";

const Tournaments = ({ setActiveComponent }) => {
  const currentTournaments = [
    {
      id: 1,
      name: "XYZ Premier League",
      teams: ["Team A", "Team B", "Team C"],
      status: "Ongoing",
    },
    {
      id: 2,
      name: "Summer Cricket League",
      teams: ["Team D", "Team E", "Team F", "Team G"],
      status: "Ongoing",
    },
    {
      id: 3,
      name: "National Cricket Championship",
      teams: ["Team H", "Team I", "Team J"],
      status: "Ongoing",
    },
  ];

  const previousTournaments = [
    {
      id: 1,
      name: "2022 World Cricket Championship",
      teams: ["Team A", "Team B", "Team C"],
      winner: "Team X",
    },
    {
      id: 2,
      name: "2021 XYZ Cricket League",
      teams: ["Team Alpha", "Team Beta", "Team Gamma", "Team Den", "Team Eeta"],
      winner: "Team Beta",
    },
    {
      id: 3,
      name: "2020 Summer T20 Cup",
      teams: ["Team Fire", "Team Water", "Team Earth"],
      winner: "Team Fire",
    },
    {
      id: 4,
      name: "2019 National Cricket League",
      teams: ["Team X", "Team Y", "Team Z"],
      winner: "Team Z",
    },
  ];

  const upcomingTournaments = [
    {
      id: 1,
      name: "2024 XYZ Summer Cricket Series",
      teams: ["Team Alpha", "Team Beta", "Team Gamma", "Team Den", "Team Eeta"],
      date: "15th June 2024",
    },
    {
      id: 2,
      name: "2024 T20 Global Challenge",
      teams: ["Team Alpha", "Team Beta", "Team Den", "Team Eeta"],
      date: "25th July 2024",
    },
    {
      id: 3,
      name: "2025 World Cup Warm-Up",
      teams: ["Team Aqua", "Team Blaze", "Team Sky"],
      date: "1st August 2025",
    },
    {
      id: 4,
      name: "2025 Champions Trophy",
      teams: ["Team Hammer", "Team Shield", "Team Sword"],
      date: "10th October 2025",
    },
  ];

  return (
    <>
      <div
        className={`flex bg-black bg-opacity-90 w-fit text-white text-3xl font-bold p-4 shadow-lg gap-4 mb-4`}
      >
        <img
          src={back}
          alt="<-"
          className="w-8 cursor-pointer"
          onClick={() => setActiveComponent("")}
        />
        Tournaments
      </div>

      <Tabs defaultActiveTab={0}>
        <TabsContent title="Current Tournaments">
          {currentTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 250px)' }}>
              {currentTournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="border border-gray-700 p-4 rounded-sm bg-black bg-opacity-50"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {tournament.name}
                  </h3>
                  <p className="text-sm">Teams: {tournament.teams.join(", ")}</p>
                  <p className="text-sm">Status: {tournament.status}</p>
                </div>
              ))}
              <div className="flex flex-1"></div>
            </div>
          ) : (
            <p>No current tournaments available.</p>
          )}
        </TabsContent>

        <TabsContent title="Upcoming Tournaments" >
          {upcomingTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 250px)' }}>
              {upcomingTournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="border border-gray-700 p-4 rounded-sm bg-black bg-opacity-50"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {tournament.name}
                  </h3>
                  <p className="text-sm">Date: {tournament.date}</p>
                  <p className="text-sm">Teams: {tournament.teams.join(", ")}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming tournaments available.</p>
          )}
        </TabsContent>

        <TabsContent title="Previous Tournaments">
          {previousTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto custom-scrollbar justify-center" style={{ maxHeight: 'calc(100vh - 250px)' }}>
              {previousTournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="border border-gray-700 p-4 rounded-sm bg-black bg-opacity-50"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {tournament.name}
                  </h3>
                  <p className="text-sm">Winner: {tournament.winner}</p>
                  <p className="text-sm">Teams: {tournament.teams.join(", ")}</p>
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
