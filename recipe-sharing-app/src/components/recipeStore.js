import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Search term setter
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes generator
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
