import React from 'react';
import N1 from "../assets/img/n1.jpg";
import N2 from "../assets/img/n2.jpg";
import N3 from "../assets/img/n3.jpg";
import N4 from "../assets/img/n4.jpg";
import N5 from "../assets/img/n5.jpg";

const matchData = [
  {
    type: 'Live',
    teamA: 'Warriors',
    teamB: 'Dragons',
    score: 'Warriors 150/5 (18.3 overs)',
  },
  {
    type: 'Live',
    teamA: 'Team Alpha',
    teamB: 'Team Gamma',
    score: 'Team Alpha 190/5 (19.3 overs)',
  },
  {
    type: 'Previous',
    teamA: 'Warriors',
    teamB: 'Knights',
    result: 'Warriors won by 7 wickets',
  },
  {
    type: 'Previous',
    teamA: 'Alexious',
    teamB: 'Scotcher',
    result: 'Scotcher won by 1 run',
  },
  {
    type: 'Upcoming',
    teamA: 'Dragons',
    teamB: 'Knights',
    date: '27th Sept 2024',
  },
  {
    type: 'Upcoming',
    teamA: 'Squeezzy',
    teamB: 'Knights',
    date: '29th Sept 2024',
  },
];

const newsItems = [
  {
    image: N1,
    title: "World Cup awaits as rivals dash off to the unknown",
  },
  {
    image: N2,
    title: "Rain the only winner as Bulls, Tigers share points",
  },
  {
    image: N3,
    title: "NSW preview: Breakers hope to pick up late-season momentum",
  },
  {
    image: N4,
    title: "Brook fires England to snap Aussies' 14-game win streak",
  },
  {
    image: N5,
    title: "Ultimate guide to the 2024 women's T20 World Cup",
  },
];


const Home = () => {
  return (
    <div className="p-4 text-white items-center ">
      {matchData ? (
        <div className='w-full flex gap-4 overflow-x-auto mx-4'>
        {matchData.map((match, index) => (
        <div className="mb-8 bg-black min-w-[350px] px-4 py-2 shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-green-500">{match.type} Match</h2>
          <p className="text-md">{match.teamA} vs {match.teamB}</p>
          <p className="text-md">{match.type === "Live" ? `Live: ${match.score}` : match.type === "Previous" ? `Result: ${match.result}` : `Date: ${match.date}`}</p>
        </div>
        ))}
        </div>
      ) : (
        <div className="text-center mb-8 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          <p>No live matches available at the moment.</p>
        </div>
      )}

      <div className="w-full overflow-x-auto">
      <div className="flex p-4 space-x-4">
        {newsItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 bg-black bg-opacity-50 p-2 w-80 mr-4">
            <div className="relative">
            <img src={item.image} alt={item.title} className="w-full h-44 object-cover rounded-t-lg" />
          </div>
        <h2 className="mt-2 text-lg font-bold">{item.title}</h2>
      </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
