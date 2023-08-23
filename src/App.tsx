import React, { useState } from 'react';
import './App.css';

// Define the type for a user
type User = {
  id: number;
  name: string;
};

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>('');

  const handleAddUser = () => {
    if (name.trim()) {
      // Add the new user to the users list
      setUsers((prevUsers) => [...prevUsers, { id: Date.now(), name }]);
      setName(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User List App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter user's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;

