const express = require('express');
const user_route = express.Router();
const userController = require('../controllers/userController');
const path = require('path');

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

user_route.use(express.static(path.join(__dirname, '../public')));

// Route definitions
user_route.get('/', userController.loadIndex);

user_route.get('/index-zh', userController.loadIndexzh);

user_route.get('/about',userController.loadAbout);

user_route.get('/contact',  userController.loadContact);

user_route.post('/contact', userController.insertUser);

user_route.get('/product', userController.loadProduct);

user_route.get('/product/:id', userController.loadDetail);

user_route.get('/product-zh', userController.LoadProductzh);

user_route.get('/product-zh/:id', userController.loadDetailzh);

user_route.get('/service',  userController.loadService);



module.exports = user_route; 

