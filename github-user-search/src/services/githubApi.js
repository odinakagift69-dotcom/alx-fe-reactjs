import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUsers = async (query) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional
  const headers = token ? { Authorization: `token ${token}` } : {};

  const response = await axios.get(`${BASE_URL}?q=${query}`, { headers });
  return response.data;
};

