import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteRecipe, getRecipes, updateRecipe } from '../controllers/recipe.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getRecipes', getRecipes);
router.delete('/deleteRecipe/:recipeId/:userId', verifyToken, deleteRecipe);
router.put('/updateRecipe/:recipeId/:userId', verifyToken, updateRecipe);


export default router;