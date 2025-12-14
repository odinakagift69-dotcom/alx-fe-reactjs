// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
