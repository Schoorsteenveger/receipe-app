const express = require('express');
const { getRecipes, getRecipeItem, createRecipe, updateRecipe, deleteRecipe } = require('../Controllers/recipeController')

const router = express.Router();

router.get('/', getRecipes);

router.get('/:id', getRecipeItem)

router.post('/', createRecipe);

router.put('/:id', updateRecipe);

router.delete('/:id', deleteRecipe);

module.exports = router;