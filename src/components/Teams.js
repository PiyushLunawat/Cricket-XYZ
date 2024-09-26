import React, { useState } from 'react';
import back from "../assets/img/back.svg";

const Teams = ({ teamsData, setActiveComponent }) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedTeam, setSelectedTeam] = useState(null);

  const filteredTeams = teamsData.filter(team =>
    team.teamName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTeamSelection = (team) => {
    setSelectedTeam(team);
  };

  return (
    <>
      <div className={`flex bg-black bg-opacity-90 w-fit text-white text-3xl font-bold p-4 shadow-lg gap-4 mb-4`}>
        <img src={back} alt="<-" className="w-8 cursor-pointer" onClick={() => setActiveComponent("")} />
        {teamsData.length} Teams
      </div>

      <div className="flex flex-col sm:flex-row gap-4 text-white p-4">
        <div className="w-full sm:w-[400px] sm:pr-2">
          <input
            type="text"
            placeholder="Search team by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-4 px-4 p-2 bg-black text-white focus:outline-none"
          />

          <ul className="space-y-2 overflow-auto custom-scrollbar" style={{ height: window.innerWidth >= 640 ? 'calc(100vh - 250px)' : '150px',}}>
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

        <div className="w-full p-4 bg-black bg-opacity-50  sm:border-l sm:border-gray-700 overflow-auto custom-scrollbar" style={{ height: window.innerWidth >= 640 ? 'calc(100vh - 200px)' : '400px',}}>
          {selectedTeam ? (
            <>
            <div className='flex justify-between items-center flex-wrap mb-4 gap-2'>
                <div className='text-5xl font-bold'>{selectedTeam.teamName}</div>
                <div className='flex flex-col '>
                  <div className='text-lg '>{selectedTeam.phoneNo}</div>
                  <div className='text-lg'>{selectedTeam.email}</div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
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
            </>
          ) : (
            <div className="text-center">Select a team to view details</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Teams;
