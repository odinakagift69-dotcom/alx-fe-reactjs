import React from "react";

function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "5px",
        maxWidth: "400px",
      }}
    >
      <img src={user.avatar_url} alt={user.login} width="50" style={{ borderRadius: "50%" }} />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
