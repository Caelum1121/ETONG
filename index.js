const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set the view engine and views directory on the app instance
app.set('view engine', 'ejs');
app.set('views', './views/');

app.use(express.static('public'));

// Middleware and routes
const userRouter = require('./routes/userRoute');
app.use('/', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});

