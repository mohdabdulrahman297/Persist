import Saved from "../models/saved.model.js";


export const saveRecipe = async (req, res) => {
    const { userId, savedName, savedCategory, savedImage } = req.body;
  
    try {
      const savedRecipe = new Saved({
        userId,
        savedName,
        savedCategory,
        savedImage,
      });
  
      await savedRecipe.save();
      res.status(201).json(savedRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

/*
export const getSavedRecipes = async (req, res) => {
    const { userId, savedName } = req.query;

    try {
        const savedRecipes = await Saved.find({ userId });
        res.status(200).json(savedRecipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
*/

export const getSavedRecipes = async (req, res, next) => {
    try {
        const getSaved = await Saved.find({
            ...(req.query.userId && {userId: req.query.userId}),
            ...(req.query.savedName && {savedName: req.query.savedName}),
            ...(req.query.savedImage && {savedImage: req.query.savedImage}),
            ...(req.query.savedCategory && {savedCategory: req.query.savedCategory}),
        });
        res.status(200).json(getSaved);
    } catch (error) {
        next(error);
    }
}


export const deleteSavedRecipe = async (req, res, next) => {
  try {
    let { savedRecipeId } = req.params;

    // If savedRecipeId is not present in the route params, try to get it from the query params
    if (!savedRecipeId) {
      savedRecipeId = req.query.savedRecipeId;
    }

    // Check if savedRecipeId is still not present
    if (!savedRecipeId) {
      return res.status(400).json({ error: 'Saved recipe ID not provided' });
    }

    // Find and delete the saved recipe by ID
    const deletedRecipe = await Saved.findByIdAndDelete(savedRecipeId);

    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Saved recipe not found' });
    }

    // Send a success response with the deleted recipe
    res.status(200).json({ message: 'Saved recipe deleted successfully', deletedRecipe });
  } catch (error) {
    console.error("Error deleting saved recipe:", error.message);
    next(error);
  }
};

