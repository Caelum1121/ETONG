const mongoose = require('mongoose');

const productzhSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field is required.'],
  },
  brand: {
    type: String,
  },
  brandimg: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    enum: ['奶粉', '黄油', '调味品'],
    required: [true, 'This field is required.'],
  },
  image: {
    type: String,
    required: [true, 'This field is required.'],
  },
  ingredient: {
    type: String,
    required: [true, 'This field is required.'],
  },
  ingredient2: {
    type: String,
  },
  package: {
    type: String,
  },
  image2: {
    type: String,
  },
});

// Full-text search index
productzhSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('ProductZh', productzhSchema);