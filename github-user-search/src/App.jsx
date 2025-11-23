import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-center p-6">
          GitHub User Search
        </h1>
        <Search />
      </div>

      <div className="p-8 bg-blue-600 text-white text-3xl">
        Tailwind 4 is working!
      </div>
    </>
  );
}

export default App;


