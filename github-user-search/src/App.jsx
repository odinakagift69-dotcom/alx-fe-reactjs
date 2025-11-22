import React, { useState } from "react";
import Search from "./components/Search";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <Search setUsers={setUsers} />

      <div style={{ marginTop: "2rem" }}>
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} style={{ marginBottom: "1rem" }}>
              <img src={user.avatar_url} alt={user.login} width="50" />
              <p>{user.name || user.login}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;



