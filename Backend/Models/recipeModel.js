import mongoose from 'mongoose';

const { Schema } = mongoose;

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a recipe name"]
    },
    title: String,
    subtitles: [{
      title: String,
      content: String
    }],
    author: String,
    badgeLetters: String,
    body: String,
    duration: String,
    coverImgURL: { type: String, default: '/' },
    isVegetarian: { type: Boolean, default: false },
    meta: {
      votes: { type: Number, default: 0 },
      favs: { type: Number, default: 0 }
    }
  }, {
  timestamps: true
});

// Corrected export statement
const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;
