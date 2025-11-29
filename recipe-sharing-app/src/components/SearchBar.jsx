import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // trigger filtering
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
    />
  );
};

export default SearchBar;
