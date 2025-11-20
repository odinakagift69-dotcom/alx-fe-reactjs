import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <SearchBar setUsers={setUsers} />
      <div style={{ marginTop: "2rem" }}>
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users yet. Try searching!</p>
        )}
      </div>
    </div>
  );
}

export default App;
