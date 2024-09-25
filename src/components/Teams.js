import React, { useState } from 'react';
import back from "../assets/img/back.svg";

// Example team data
const teamsData = [
  {
    id: 1,
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
  // Add more teams here
];

const Teams = ({ setActiveComponent }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [selectedTeam, setSelectedTeam] = useState(null); // State to store the selected team

  // Filter teams based on search term
  const filteredTeams = teamsData.filter(team =>
    team.teamName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle team selection
  const handleTeamSelection = (team) => {
    setSelectedTeam(team);
  };

  return (
    <>
      <div className={`flex bg-black bg-opacity-90 w-fit text-white text-3xl font-bold p-4 shadow-lg gap-4 mb-4`}>
        <img src={back} alt="<-" className="w-8 cursor-pointer" onClick={() => setActiveComponent("")} />
        {teamsData.length} Teams
      </div>

      <div className="flex gap-4 text-white p-4">
        {/* Left Side: List of Teams */}
        <div className="w-1/4 p-4 bg-black bg-opacity-50 border-r border-gray-700">
          <input
            type="text"
            placeholder="Search team by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-4 px-4 py-2 bg-black text-white focus:outline-none"
          />

          {/* Team List */}
          <ul className="space-y-2">
            {filteredTeams.map((team) => (
              <li
                key={team.id}
                className={`cursor-pointer p-4 ${selectedTeam === team ? 'bg-green-500' : 'bg-black hover:bg-[#09090b]'} transition`}
                onClick={() => handleTeamSelection(team)}
              >
                <div className='flex justify-between'>
                  <div className='text-xl font-bold'>{team.teamName}</div>
                  <div className='text-md text-gray-700'>{team.players.length} Players</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Team Details */}
        <div className="w-3/4 p-4 bg-black bg-opacity-50">
          {selectedTeam ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
              {selectedTeam.players.map((player, index) => (
                <div key={index} className="mb-4 flex gap-4 items-center">
                  <div className="bg-green-500 pt-2 text-black font-bold text-2xl rounded-full focus:outline-none placeholder:text-green-700 text-center w-12 h-12">
                    {player.jerseyNo}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white bg-transparent text-xl">{player.playerName}</div>
                    <div className="text-gray-500 bg-transparent text-md">{player.role}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">Select a team to view details</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Teams;
