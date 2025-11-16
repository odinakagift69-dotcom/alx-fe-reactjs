import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // you need this component

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

