import React from "react";

const UserProfile = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-2xl font-bold mt-4 text-center">John Doe</h2>
      <p className="text-gray-600 text-center mt-2">Frontend Developer</p>
    </div>
  );
};

export default UserProfile;


