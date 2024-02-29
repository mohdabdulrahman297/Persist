import Recipe from "../models/recipe.model.js";

export const create = async (req, res, next) => {
    const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newRecipe = new Recipe({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    next(error);
  }
};