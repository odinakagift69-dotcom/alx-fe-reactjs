// src/component/UserProfile.jsx
import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User profile"
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h1 className="text-xl font-bold mt-4">Gift Odinakachi</h1>

      <p className="text-gray-600 mt-2">Frontend Developer</p>
    </div>
  );
};

export default UserProfile;




