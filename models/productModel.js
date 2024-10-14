const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field is required.'],
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    enum: ['Powder', 'Butter', 'Flavours'],
    required: [true, 'This field is required.'],
  },
  image: {
    type: String,
    required: [true, 'This field is required.'],
  },
  ingredient: {
    type: String,
    required: [true, 'This field is required.'],
  }
});

// Full-text search index
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);

