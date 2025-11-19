import AddRecipeForm from './components/AddRecipeForm';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';
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
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          
          {/* Add Recipe Page */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          
          {/* Recipe Details Page */}
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Wrapper to pass recipeId to RecipeDetails
import { useParams } from 'react-router-dom';

const RecipeDetailsWrapper = () => {
  const { id } = useParams(); // grabs the :id from URL
  return <RecipeDetails recipeId={id} />;
};
