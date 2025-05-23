
import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://cuddly-yodel-6qpv56j7q643rjpw-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4 display-5">Workouts</h1>
      <div className="row">
        {workouts.map(workout => (
          <div className="col-md-4 mb-3" key={workout._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
                {workout.duration && <p className="card-text"><strong>Duration:</strong> {workout.duration} min</p>}
                {workout.date && <p className="card-text"><strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
