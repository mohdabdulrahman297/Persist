import mongoose from 'mongoose';

const savedSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: 'User',
    required: true,
  },
  savedName: {
    type: String,
    required: true,
  },
  savedCategory: {
    type: String,
    required: true,
  },
  savedImage: {
    type: String,
    required: true,
  },

});

const Saved = mongoose.model('Saved', savedSchema);

export default Saved;
