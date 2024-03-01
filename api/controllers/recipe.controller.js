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
      ...(req.query.slug && { slug: req.query.slug }),
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


export const deleteRecipe = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this recipe'));
  }
  try {
    await Recipe.findByIdAndDelete(req.params.recipeId);
    res.status(200).json('The recipe has been deleted');
  } catch (error) {
    next(error);
  }
};


export const updateRecipe = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this recipe'));
  }
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.recipeId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          videoLink: req.body.videoLink,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    next(error);
  }
};