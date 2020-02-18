const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// Require models before where they're being used. Mongoose cares about the order of the includes
require('./models/User');
// No need to assign to a variable, since nothing is exported on the source file.
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // equivalent to 30 days in miliseconds
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // Initialize the routes specified in the source file, and pass the express app as argument.

const PORT = process.env.PORT || 5000;
app.listen(PORT);
