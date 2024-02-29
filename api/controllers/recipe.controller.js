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

export const getRecipes = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const recipes = await Recipe.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { category: req.query.slug }),
      ...(req.query.recipeId && { _id: req.query.recipeId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalRecipes = await Recipe.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthRecipes = await Recipe.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      recipes,
      totalRecipes,
      lastMonthRecipes,
    });
  } catch (error) {
    next(error);
  }
};