import Recipe from '../Models/recipeModel.js';
import asyncHandler from 'express-async-handler';

// Get all recipes
const getRecipes = asyncHandler(async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json({
      count: recipes.length,
      data: recipes
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Get single recipe
const getRecipeItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Create a recipe
const createRecipe = asyncHandler(async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Update a recipe
const updateRecipe = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id, req.body);
    if (!recipe) {
      res.status(404);
      throw new Error(`Cannot find a recipe with ${id}`);
    }
    const updatedRecipe = await Recipe.findById(id);
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Delete a recipe
const deleteRecipe = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      res.status(404);
      throw new Error(`Cannot find a recipe with ${id}`);
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Export the functions
export {
  getRecipes,
  getRecipeItem,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
