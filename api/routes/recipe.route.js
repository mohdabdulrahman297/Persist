import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, getRecipes } from '../controllers/recipe.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getRecipes', getRecipes);


export default router;