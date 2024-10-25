const User = require('../models/userModel');
const Product = require('../models/productModel');


const loadProduct = async (req, res) => {
    let powder = [];
    let butter = [];
    let flavours = [];
    
    try {
        powder = await Product.find({ category: 'Powder' });
        console.log('Powder Products fetched successfully');
    } catch (err) {
        console.error('Error fetching Powder Products:', err.message);
    }
    
    try {
        butter = await Product.find({ category: 'Butter' });
        console.log('Butter Products fetched successfully');
    } catch (err) {
        console.error('Error fetching Butter Products:', err.message);
    }
    
    try {
        flavours = await Product.find({ category: 'Flavours' });
        console.log('Flavours Products fetched successfully');
    } catch (err) {
        console.error('Error fetching Flavours Products:', err.message);
    }

    // Render the view with the fetched events
    res.render('product', { powder, butter, flavours });
};

const loadIndex = (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.log('Load Register Error:', error.message);
    }
}

const insertUser = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the request body for debugging

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        });

        const userDatabase = await user.save();
        console.log('User saved:', userDatabase); // Log the saved user details

        res.send('User data saved successfully');
        res.redirect('/contact');
    } catch (error) {
        console.log('Insert User Error:', error.message);
        res.status(500).send('Error saving user data');
    }
};

const loadAbout = async (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        console.log('Load About Error:', error.message);
    }
};

//forget password code start
const loadContact = (req, res) => {
    try {
        res.render('contact');
    } catch (error) {
        console.log('Load Contact Error:', error.message);
    }
}


const loadService = async (req, res) => {
    try {

        res.render('service');

    } catch (error) {
        console.log('Load Service Error:', error.message);
    }
};


const load404 = async (req, res) => {
    try {
        res.render('404');
    } catch (error) {
        console.log('Load 404 Error:', error.message);
    }
}



module.exports = {
    loadProduct,
    loadIndex,
    insertUser,
    loadAbout,
    loadContact,
    loadService,
    load404
};