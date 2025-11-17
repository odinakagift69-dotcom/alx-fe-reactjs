import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Recipe actions
  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== recipeId)
  })),

  // Favorites actions
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Recommendations
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(r =>
      state.favorites.includes(r.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

