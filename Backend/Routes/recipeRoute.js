import express from 'express';
import { getRecipes, getRecipeItem, createRecipe, updateRecipe, deleteRecipe } from '../Controllers/recipeController.js';

// App Routes

const router = express.Router();

router.get('/', getRecipes); // Homepage. Get recipes

router.get('/:id', getRecipeItem); // Get Details Recipe Item

router.post('/', createRecipe); // Create Recipe and save to database

router.put('/:id', updateRecipe); // Update Recipe and save to database

router.delete('/:id', deleteRecipe); // Delete Recipe and save to database

// Search Recipe

// latest recipe - explore latest

// vegetarian recipe - explore vegetarian

export default router;
