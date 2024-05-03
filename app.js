const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://social:social@node-auth.0japshy.mongodb.net/?retryWrites=true&w=majority&appName=Node-auth';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000,() => console.log('server is running on port 3000')))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);  // this is the middleware that will handle the routes in authRoutes.js