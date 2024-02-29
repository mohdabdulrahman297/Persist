import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: true,
    },

    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    image: {
      type: String,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&usqp=CAU',
    },
    videoLink: {
      type: String,
    },
    content : {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
