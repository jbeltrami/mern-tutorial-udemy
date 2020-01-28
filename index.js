const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// Require models before where they're being used. Mongoose cares about the order of the includes
require('./models/User');
// No need to assign to a variable, since nothing is exported on the source file.
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // Initialize the routes specified in the source file, and pass the express app as argument.

const PORT = process.env.PORT || 5000;
app.listen(PORT);
