const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app

let port = 1234;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

 
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});



// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//user

const user = require('./routes/user.route'); // Imports routes for the products
app.get('/users/test', user);
app.get('/users', user);
app.post('/users', user);
app.post('/user/validate', user);