import express from 'express';
import { deleteSavedRecipe, getSavedRecipes, saveRecipe } from '../controllers/saved.controller.js';

const router = express.Router();

router.post('/saveRecipe', saveRecipe);
router.get('/get', getSavedRecipes);
router.delete('/delete/:savedRecipeId', deleteSavedRecipe);

export default router;
