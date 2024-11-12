const mongoose = require('mongoose');
const Product = require('./productModel');

const products = [
    {
        image: "product-01.jpg",
        name: "Skim Milk Powder",
        brand: "Westland",
        brandimg: "westland.jpg",
        description: "Our Skim Milk Powders are low fat, additive free and have good dispersibility and solubility. We offer a range of skim milk powders to meet different functional requirements and a variety of heat treatments.",
        category: 'Powder',
        ingredient: "westlandrange.jpg",
        image2: "application1.jpg",
        ingredient2: "Protein content above 32%.",
        package:"25kg bag PE inner"
    },
    {
        image: "product-02.jpg",
        name: "Whey Protein Concentrate",
        brand: "Westland",
        brandimg: "westland.jpg",
        description: "High in protein with all nine essential amino acids, and rapidly absorbed by the body for fast nutritional delivery, our RapidPRO™ Whey Protein Concentrate is ideal for promoting muscle growth, strength, and high performance.",
        category: 'Powder',
        ingredient: "westlandrange.jpg",
        image2: "application2.jpg",
        ingredient2: "Protein content above 80%.",
        package:"20kg bag PE inner"
    },
    {
        image: "product-03.jpg",
        name: "Whole Milk Powder",
        brand: "Kalla",
        brandimg: "kalla.jpg",
        description: "Kalla Whole Milk Powder 26% Fat is made by spray drying fresh pasteurised cow’s milk. It is a soluble powder with a minimum of 26% milk fat and has a sweet desirable flavour. It is used in a wide range of applications, such as nutritional beverages, ice cream, confectionery, yoghurt and so on.",
        category: 'Powder',
        ingredient: "ingredient2.jpg",
        image2: "application3.jpg",
        ingredient2: "Milk Fat content above 26%.",
        package:"25kg bag PE inner"
    },
    {
        image: "product-04.jpg",
        name: "Whole Milk Powder",
        brand: "Oceania",
        brandimg: "oceania.jpg",
        description: "Supporting Yili Group’s goal to be the most reliable healthy food provider in the world",
        category: 'Powder',
        ingredient: "oceania3.jpg",
        image2: "oceania2.jpg",
    },
    {
        image: "product-05.jpg",
        name: "Anhydrous Milk Fat",
        brand: "Westland",
        brandimg: "westland.jpg",
        description: "Made with fresh pasteurised cream from grass-fed cows, our Anhydrous Milk Fat is 99.9%+ pure milk fat with high nutritional value. It’s a great way to add natural, creamy flavour intensity to a wide range of food and baking applications.",
        category: 'Butter',
        ingredient: "westlandrange.jpg",
        image2: "application4.jpg",
        ingredient2: "Fat content above 99.9%.",
        package:"210kg iron drum"
    },
    {
        image: "product-06.jpg",
        name: "Salted Butter",
        brand: "Provico",
        brandimg: "provico.jpg",
        description: "Salted choice butter produced from high quality fresh cream. It has many application including baked goods and spreads and a wide range of food products.",
        category: 'Butter',
        ingredient: "provico3.jpg",
        image2: "provico2.jpg",
        ingredient2: "Fat content above 80%.",
        package:"25kg carton PE inner"
    },
    {
        image: "product-06.jpg",
        name: "Unstalted Butter",
        brand: "Provico",
        brandimg: "provico.jpg",
        description: "Unsalted choice butter produced from high quality fresh cream. It has many application including baked goods and spreads and a wide range of food products.",
        category: 'Butter',
        ingredient: "provico1.jpg",
        image2: "provico2.jpg",
        ingredient2: "Fat content above 80%.",
        package:"25kg carton PE inner"
    },
    {
        image: "product-08.jpg",
        name: "Butter Flavours",
        brand: "TATUA",
        brandimg: "tatua.jpg",
        description: "We have a range of concentrated butter flavours to improve the taste and mouthfeel of your products. Our butter flavours can be used on their own, or in combination with other dairy flavours, to give a wide range of profiles and flavour complexities.",
        category: 'Flavours',
        ingredient: "butterflavor.png",
        image2: "butterflavor2.png",
    },
    {
        image: "product-09.jpg",
        name: "Cheese Flavours",
        brand: "TATUA",
        brandimg: "tatua.jpg",
        description: "We have a range of concentrated cheese flavours to improve the taste and mouthfeel of your products. Our cheese flavours can be used on their own, or in combination with other dairy flavours, to give a wide range of profiles and flavour complexities.",
        category: 'Flavours',
        ingredient: "cheeseflavor.png",
        image2: "cheeseflavor2.png",
    },
    {
        image: "product-10.jpg",
        name: "Cream & Milk Flavours",
        brand: "TATUA",
        brandimg: "tatua.jpg",
        description: "Tatua’s cream and milk flavours are ideal for a range of applications. They add a rich, creamy flavour and mouthfeel to low fat beverages and are proven to mask a variety of unpleasant flavours that occur from UHT processing, protein, non-nutritive sweeteners, and minerals. Our cream and milk flavours also improve the flavour profile in low fat or vegetable fat products.",
        category: 'Flavours',
        ingredient: "creammilkflavour.png",
        image2: "creammilkflavour2.png",
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


