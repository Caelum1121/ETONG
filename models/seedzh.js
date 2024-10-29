const mongoose = require('mongoose');
const Product = require('./productzhModel');

const products = [
    {
        image: "product-01.jpeg",
        name: "脱脂奶粉",
        brand: "Westland",
        description: "",
        category: '粉类',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-02.jpeg",
        name: "乳清蛋白浓缩粉",
        brand: "Westland",
        description: "",
        category: '粉类',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-03.jpeg",
        name: "全脂奶粉",
        brand: "Kalla",
        description: "",
        category: '粉类',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-04.jpg",
        name: "全脂奶粉",
        brand: "Oceania",
        description: "",
        category: '粉类',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-05.jpeg",
        name: "无水奶油脂",
        brand: "Westland",
        description: "",
        category: '黄油',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-06.jpg",
        name: "加盐黄油",
        brand: "",
        description: "",
        category: '黄油',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-07.jpg",
        name: "无盐黄油",
        brand: "",
        description: "",
        category: '黄油',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-08.jpg",
        name: "黄油风味",
        brand: "TATUA",
        description: "",
        category: '风味',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-09.jpg",
        name: "奶酪风味",
        brand: "TATUA",
        description: "",
        category: '风味',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
    },
    {
        image: "product-10.jpg",
        name: "奶油和牛奶风味",
        brand: "TATUA",
        description: "",
        category: '风味',
        ingredient: "奶粉, 糖, 可可粉, 盐, 香草精",
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


