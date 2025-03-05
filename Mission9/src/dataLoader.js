export const fetchTeams = async () => {
    const response = await fetch('/data/teams.json');
    const data = await response.json();
    return data.teams;
  };
  