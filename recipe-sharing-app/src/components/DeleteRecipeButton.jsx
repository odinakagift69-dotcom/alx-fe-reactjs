import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteRecipe } from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
