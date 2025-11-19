// src/components/recipeStore.js
import create from 'zustand';
import { nanoid } from 'nanoid';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (title, description) => 
    set((state) => ({
      recipes: [...state.recipes, { id: nanoid(), title, description }],
    })),

  // Update an existing recipe
  updateRecipe: (id, updatedData) => 
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
