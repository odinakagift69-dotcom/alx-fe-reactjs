import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUsers }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchUserData(username);
      setUsers([data]);
      setError(""); // clear any previous errors
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Looks like we can't find the user");
      } else {
        setError("Something went wrong. Please try again.");
      }
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }; // <-- THIS closes handleSubmit properly

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Search;
