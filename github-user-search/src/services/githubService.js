import axios from "axios";

/**
 * Search GitHub users with optional location and minimum repositories.
 */
export const searchUsers = async (username, location, minRepos) => {
  // Build query string
  let query = username ? `${username}` : "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  // Fetch data from GitHub Search API
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

  // Map results to basic info only
  return response.data.items.map((user) => ({
    id: user.id,
    login: user.login,
    avatar_url: user.avatar_url,
    html_url: user.html_url
  }));
};
