import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

