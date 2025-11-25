import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search (Advanced)
      </h1>
      <Search />

      <div className="p-6 bg-green-500 text-white text-xl">
  Tailwind is working!
    </div>
    </div>
    
  );
}

export default App;


