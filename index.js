const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport'); // No need to assign to a variable, since nothing is exported on the source file.
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // Initialize the routes specified in the source file, and pass the express app as argument.

const PORT = process.env.PORT || 5000;
app.listen(PORT);
