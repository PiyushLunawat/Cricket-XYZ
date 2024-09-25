import React, { useState } from "react";
import back from "../assets/img/back.svg";

const Register = ({ setActiveComponent }) => {
  const [teamName, setTeamName] = useState("");
  const [teamNo, setTeamNo] = useState("");
  const [teamEmail, setTeamEmail] = useState("");
  const [players, setPlayers] = useState([{ name: "", role: "", no: "" }]);
  
  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleTeamNoChange = (e) => {
    setTeamNo(e.target.value);
  };

  const handleTeamEmailChange = (e) => {
    setTeamEmail(e.target.value);
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value;
    setPlayers(newPlayers);
  };

  const handleAddPlayer = () => {
    if (players.length < 11) {
      setPlayers([...players, { name: "", role: "", no: "" }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Team Name:", teamName);
    console.log("Team Phone:", teamNo);
    console.log("Team Email:", teamEmail);
    console.log("Players:", players);
  };
  return (
  <>
  <div className={`flex bg-black bg-opacity-90 w-fit text-white text-3xl font-bold p-4 shadow-lg gap-4 mb-4`}>
     <img src={back} alt="<-" className="w-8 cursor-pointer" onClick={() => setActiveComponent("")}/> 
     Create Your Team
   </div>
    <div className="register-container bg-black bg-opacity-50 text-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-8 flex flex-wrap items-center gap-4 ">
          
          <input type="text" value={teamName} onChange={handleTeamNameChange}
          className="text-white bg-transparent text-xl sm:text-3xl w-fit md:text-5xl font-bold border-b-2 focus:outline-none" placeholder="Team Name" required/>
          
          <div className="flex w-full flex-1 justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <input type="tel" value={teamNo} onChange={handleTeamNoChange}
              className="text-white bg-transparent text-sm sm:text-lg font-semibold border-b-2 focus:outline-none" placeholder="Phone no." required/>
              <input type="email" value={teamEmail} onChange={handleTeamEmailChange}
              className="text-white bg-transparent text-sm sm:text-lg font-semibold border-b-2 focus:outline-none" placeholder="email" required/>
            </div>

            <button type="submit" className="bg-green-500 text-black font-semibold w-max px-6 py-2 rounded hover:bg-green-600 transition duration-300">
              <span className="hidden sm:block">Register Team</span>
              <span className="sm:hidden">+</span>
            </button>
          </div>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {players.map((player, index) => (
  <div key={index} className="mb-4 flex gap-4 items-center">
    <input
      type="text" value={player.no} onChange={(e) => handlePlayerChange(index, "name", e.target.value)}
      className="bg-green-500 text-black font-bold text-2xl rounded-full focus:outline-none placeholder:text-green-700 text-center w-12 h-12" placeholder={`${index + 1}`} required/>
    
    <div className="flex flex-col">
      <input type="text" value={player.name} onChange={(e) => handlePlayerChange(index, "name", e.target.value)}
      className="text-white bg-transparent text-xl focus:outline-none " placeholder={`Player ${index + 1} Name`} required/>

      <select value={player.role} onChange={(e) => handlePlayerChange(index, "role", e.target.value)} className="bg-transparent text-white border-none focus:outline-none" required>
        <option value="">Select Role</option>
        <option value="Batsman">Batsman</option>
        <option value="Bowler">Bowler</option>
        <option value="All-Rounder">All-Rounder</option>
        <option value="Wicketkeeper">Wicketkeeper</option>
      </select>
    </div>
  </div>
))}
{players.length < 11 && (
          <button type="button" onClick={handleAddPlayer} className="bg-green-500 text-black font-bold px-4 py-2 hover:bg-green-600 transition duration-300">
            Add Player
          </button>
        )}
</div>

        
      </form>
    </div>
  </>
  );
};

export default Register;
