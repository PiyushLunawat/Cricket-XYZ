import React from 'react';

// Example match data stored in an array
const matchData = [
  {
    type: 'current',
    teamA: 'Warriors',
    teamB: 'Dragons',
    status: 'Live',
    score: 'Warriors 150/5 (18.3 overs)',
  },
  {
    type: 'previous',
    teamA: 'Warriors',
    teamB: 'Knights',
    result: 'Warriors won by 7 wickets',
  },
  {
    type: 'upcoming',
    teamA: 'Dragons',
    teamB: 'Knights',
    date: '25th Sept 2024',
    time: '3:00 PM',
  },
];

const Start = () => {
  const currentMatch = matchData.find((match) => match.type === 'current');
  const previousMatch = matchData.find((match) => match.type === 'previous');
  const upcomingMatch = matchData.find((match) => match.type === 'upcoming');

  return (
    <div className="p-4 text-white">
      {/* Current Match Section */}
      {currentMatch ? (
        <div className="mb-8 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-green-500">Current Match</h2>
          <p className="text-lg">{currentMatch.teamA} vs {currentMatch.teamB}</p>
          <p className="text-md">{currentMatch.status}: {currentMatch.score}</p>
        </div>
      ) : (
        <div className="text-center mb-8 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          <p>No live matches available at the moment.</p>
        </div>
      )}

      {/* Previous Match Section */}
      {previousMatch && (
        <div className="mb-8 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Previous Match</h2>
          <p className="text-lg">{previousMatch.teamA} vs {previousMatch.teamB}</p>
          <p className="text-md">Result: {previousMatch.result}</p>
        </div>
      )}

      {/* Upcoming Match Section */}
      {upcomingMatch && (
        <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-blue-500">Upcoming Match</h2>
          <p className="text-lg">{upcomingMatch.teamA} vs {upcomingMatch.teamB}</p>
          <p className="text-md">Date: {upcomingMatch.date}</p>
          <p className="text-md">Time: {upcomingMatch.time}</p>
        </div>
      )}
    </div>
  );
};

export default Start;
