import './App.css';
import { useEffect, useState } from 'react';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <header className="text-center p-4 bg-dark text-white">
      <h1>NCAA Basketball Teams</h1>
      <h2>Explore all the teams in NCAA Basketball!</h2>
    </header>
  );
}

function Team({ school, name, city, state }: TeamProps) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <h3>{name}</h3>
      <h3>{city}, {state}</h3>
    </div>
  );
}


function TeamList() {
  const [teams, setTeams] = useState<TeamProps[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      const response = await fetch('/teams.json');
      const data = await response.json();
      setTeams(data.teams);
    }

    fetchTeams();
  }, []);

  return (
    <div className="team-list">  {/* Wrapper for layout */}
      {teams.map((singleTeam) => (
        <Team key={singleTeam.school} {...singleTeam} />
      ))}
    </div>
  );
}


function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;