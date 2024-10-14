const express = require('express');
const cart_route = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/auth');
const session = require('express-session');
const config = require('../config/config');

cart_route.use(session({ secret: config.sessionSecret}));

cart_route.use(express.static('public'));

cart_route.use(express.urlencoded({ extended: true }));

cart_route.get('/userEvents', auth.isLogin, auth.isActive, cartController.getUserEvents);
cart_route.post('/userEvents', auth.isLogin, auth.isActive, cartController.deleteCartItem);

cart_route.get('/:id', auth.isLogin, auth.isActive, cartController.loadProduct);
cart_route.post('/:id', auth.isLogin, (req, res, next) => {
    console.log('POST /cart/:id route hit');
    next();
}, auth.isActive, cartController.addToCart);


module.exports = cart_route;

