import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],          // all recipes
  searchTerm: '',       // search input
  filteredRecipes: [],  // recipes after filtering

  // Add a recipe
  addRecipe: (recipe) =>
    set(state => ({ recipes: [...state.recipes, recipe] })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
    })),

  // Update a recipe
  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Update search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // automatically filter after updating term
  },

  // Filter recipes based on search term
  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
