const mongoose = require('mongoose');
const Product = require('./productModel');

const products = [
    {
        image: "product-01.jpeg",
        name: "Skim Milk Powder",
        brand: "Westland",
        description: "",
        category: 'Powder',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-02.jpeg",
        name: "Whey Protein Concentrate",
        brand: "Westland",
        description: "",
        category: 'Powder',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-03.jpeg",
        name: "Whole Milk Powder",
        brand: "Kalla",
        description: "",
        category: 'Powder',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-04.jpg",
        name: "Whole Milk Powder",
        brand: "Oceania",
        description: "",
        category: 'Powder',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-05.jpeg",
        name: "Anhydrous Milk Fat",
        brand: "Westland",
        description: "",
        category: 'Butter',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-06.jpg",
        name: "Salted Butter",
        brand: "",
        description: "",
        category: 'Butter',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-07.jpg",
        name: "Unstalted Butter",
        brand: "",
        description: "",
        category: 'Butter',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-08.jpg",
        name: "Butter Flavours",
        brand: "TATUA",
        description: "",
        category: 'FLavours',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-09.jpg",
        name: "Cheese Flavours",
        brand: "TATUA",
        description: "",
        category: 'FLavours',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },
    {
        image: "product-10.jpg",
        name: "Cream & Milk Flavours",
        brand: "TATUA",
        description: "",
        category: 'FLavours',
        ingredient: "Milk Powder, Sugar, Cocoa Powder, Salt, Vanillin",
    },

];

// Insert many documents
mongoose.connect(`mongodb+srv://caelumz1121:Caelum@etong.fdrv2.mongodb.net/?retryWrites=true&w=majority&appName=Etong`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
      console.log('Connected to MongoDB');
      return Product.insertMany(products); // Insert all products
  })
  .then(() => {
      console.log('Many events are saved');
      mongoose.connection.close(); // Close connection after the operation
  })
  .catch((error) => {
      console.error('Error:', error.message);
      mongoose.connection.close(); // Close connection on error
  });


