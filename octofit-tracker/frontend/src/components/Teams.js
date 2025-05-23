
import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://cuddly-yodel-6qpv56j7q643rjpw-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4 display-5">Teams</h1>
      <div className="row">
        {teams.map(team => (
          <div className="col-md-4 mb-3" key={team._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text">{team.description || 'No description'}</p>
                {team.members && team.members.length > 0 && (
                  <div>
                    <h6>Members:</h6>
                    <ul className="list-group list-group-flush">
                      {team.members.map((member, idx) => (
                        <li className="list-group-item" key={idx}>{member.username || member}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
