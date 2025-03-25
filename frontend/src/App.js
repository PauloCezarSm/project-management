import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000');

function App() {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch projects from API
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects', err));

    socket.on('newMessage', (message) => {
      console.log('New message received:', message);
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const sendMessage = (projectId) => {
    socket.emit('sendMessage', { projectId, message });
    setMessage('');
  };

  return (
    <div>
      <h1>Project Management</h1>
      <div>
        {projects.map(project => (
          <div key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => sendMessage(project._id)}>Send Message</button>
          </div>
        ))}
      </div>
      <div>
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
      </div>
    </div>
  );
}

export default App;
