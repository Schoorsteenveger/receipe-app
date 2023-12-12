const express = require('express');
const { getRecipes, getRecipeItem, createRecipe, updateRecipe, deleteRecipe } = require('../Controllers/recipeController');

// App Routes

const router = express.Router();

router.get('/', getRecipes);// Homepage

router.get('/:id', getRecipeItem); // Details Recipe Item

router.post('/', createRecipe); // 

router.put('/:id', updateRecipe);

router.delete('/:id', deleteRecipe);

// Search Recipe

// latest recipe - explore latest

// vegetarian recipe - explore vegetarian

module.exports = router;