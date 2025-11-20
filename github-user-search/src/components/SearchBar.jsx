import React, { useState } from "react";
import { fetchUsers } from "../services/githubApi";

function SearchBar({ setUsers }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const data = await fetchUsers(query);
      setUsers(data.items);
    } catch (error) {
      console.error("Error fetching users:", error);
       setUsers([]);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button type="submit" style={{ marginLeft: "0.5rem", padding: "0.5rem" }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
