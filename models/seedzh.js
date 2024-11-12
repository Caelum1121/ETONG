const mongoose = require('mongoose');
const Product = require('./productzhModel');

const products = [
    {
        "image": "product-01.jpg",
        "name": "脱脂奶粉",
        "brand": "Westland",
        "brandimg": "westland.jpg",
        "description": "我们的脱脂奶粉低脂、无添加物，具有良好的分散性和溶解性。我们提供一系列脱脂奶粉，以满足不同的功能需求和多种热处理要求。",
        "category": "奶粉",
        "ingredient": "westlandrange.jpg",
        "image2": "application1.jpg",
        ingredient2: "蛋白含量32%以上",
        package: "25公斤袋裝，內有PE內袋"
    },
    {
        image: "product-02.jpg",
        name: "乳清蛋白浓缩物",
        "brand": "Westland",
        "brandimg": "westland.jpg",
        "description": "富含蛋白质，含有所有九种必需氨基酸，且易于身体快速吸收，以实现快速的营养供给。我们的RapidPRO™乳清蛋白浓缩物非常适合促进肌肉生长、力量和高性能表现。",
        "category": "奶粉",
        "ingredient": "westlandrange.jpg",
        "image2": "application2.jpg",
        ingredient2: "蛋白含量80%以上",
        package: "20公斤袋裝，內有PE內袋"
    },
    {
        "image": "product-03.jpg",
        "name": "全脂奶粉",
        "brand": "Kalla",
        "brandimg": "kalla.jpg",
        "description": "Kalla全脂奶粉含26%脂肪，通过喷雾干燥新鲜巴氏杀菌牛奶制成。它是一种可溶性粉末，具有最低26%的乳脂含量和甜美的味道，广泛应用于营养饮料、冰淇淋、糖果、酸奶等。",
        "category": "奶粉",
        "ingredient": "ingredient2.jpg",
        "image2": "application3.jpg",
        ingredient2: "乳脂含量26%以上",
        package: "25公斤袋裝，內有PE內袋"
    },
    {
        "image": "product-04.jpg",
        "name": "全脂奶粉",
        "brand": "Oceania",
        "brandimg": "oceania.jpg",
        "description": "支持伊利集团成为全球最可靠的健康食品供应商的目标。",
        "category": "奶粉",
        "ingredient": "oceania3.jpg",
        "image2": "oceania2.jpg"
    },
    {
        "image": "product-05.jpg",
        "name": "无水乳脂",
        "brand": "Westland",
        "brandimg": "westland.jpg",
        "description": "采用新鲜巴氏杀菌奶油制作，来自草饲奶牛，纯度达99.9%以上。无水乳脂富有营养，是在多种食品和烘焙应用中增加天然奶香风味的绝佳选择。",
        "category": "黄油",
        "ingredient": "westlandrange.jpg",
        "image2": "application4.jpg",
        ingredient2: "脂肪含量99.9%以上",
        package: "25公斤袋裝，內有PE內袋"
    },
    {
        "image": "product-06.jpg",
        "name": "咸味黄油",
        "brand": "Provico",
        "brandimg": "provico.jpg",
        "description": "用高质量新鲜奶油制成的咸味优质黄油。适用于烘焙食品、涂抹酱和多种食品产品。",
        "category": "黄油",
        "ingredient": "provico3.jpg",
        "image2": "provico2.jpg",
        ingredient2: "脂肪含量80%以上",
        package: "25公斤纸箱，內有PE內袋"
    },
    {
        "image": "product-06.jpg",
        "name": "无盐黄油",
        "brand": "Provico",
        "brandimg": "provico.jpg",
        "description": "用高质量新鲜奶油制成的无盐优质黄油。适用于烘焙食品、涂抹酱和多种食品产品。",
        "category": "黄油",
        "ingredient": "provico1.jpg",
        "image2": "provico2.jpg",
        ingredient2: "脂肪含量80%以上",
        package: "25公斤纸箱，內有PE內袋"
    },
    {
        "image": "product-08.jpg",
        "name": "黄油调味剂",
        "brand": "TATUA",
        "brandimg": "tatua.jpg",
        "description": "我们提供多种浓缩黄油调味剂，以提升产品的风味和口感。黄油调味剂可以单独使用，或与其他乳制品风味搭配，提供丰富的风味层次和复杂性。",
        "category": "调味品",
        "ingredient": "butterflavor.png",
        "image2": "butterflavor2.png"
    },
    {
        "image": "product-09.jpg",
        "name": "芝士调味剂",
        "brand": "TATUA",
        "brandimg": "tatua.jpg",
        "description": "我们提供多种浓缩芝士调味剂，以提升产品的风味和口感。芝士调味剂可以单独使用，或与其他乳制品风味搭配，提供丰富的风味层次和复杂性。",
        "category": "调味品",
        "ingredient": "cheeseflavor.png",
        "image2": "cheeseflavor2.png"
    },
    {
        "image": "product-10.jpg",
        "name": "奶油与奶调味剂",
        "brand": "TATUA",
        "brandimg": "tatua.jpg",
        "description": "Tatua的奶油与奶调味剂适用于多种应用。它们为低脂饮料带来浓郁的奶油风味和口感，能够有效掩盖UHT加工、蛋白质、非营养性甜味剂和矿物质带来的不良风味。我们的奶油与奶调味剂还可以改善低脂或植物脂产品的风味。",
        "category": "调味品",
        "ingredient": "creammilkflavour.png",
        "image2": "creammilkflavour2.png"
    }
    
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


