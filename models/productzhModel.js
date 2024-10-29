const mongoose = require('mongoose');

const productzhSchema = new mongoose.Schema({
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
    enum: ['粉类', '黄油', '风味'],
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
productzhSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('ProductZh', productzhSchema);