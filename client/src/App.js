import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/habits');
        setHabits(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Habit Tracker</h1>
      <ul>
        {habits.map((habit) => (
          <li key={habit._id}>
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
