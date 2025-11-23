import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchUsers({ username, location, minRepos, page });
    setResults(data.items || []);
    setTotalCount(data.total_count || 0);
  };

  const nextPage = async () => {
    const newPage = page + 1;
    setPage(newPage);
    const data = await searchUsers({ username, location, minRepos, page: newPage });
    setResults(data.items || []);
  };

  const prevPage = async () => {
    if (page === 1) return;
    const newPage = page - 1;
    setPage(newPage);
    const data = await searchUsers({ username, location, minRepos, page: newPage });
    setResults(data.items || []);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.length === 0 && <p>No results yet. Try searching.</p>}

        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h3 className="font-bold text-xl">{user.login}</h3>
              <a
                href={user.html_url}
                className="text-blue-500 underline"
                target="_blank"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalCount > 10 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={prevPage}
            className="bg-gray-300 py-2 px-4 rounded disabled:bg-gray-200"
            disabled={page === 1}
          >
            Previous
          </button>

          <button
            onClick={nextPage}
            className="bg-gray-300 py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;

