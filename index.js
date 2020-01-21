const express = require('express');
require('./services/passport'); // No need to assign to a variable, since nothing is exported on the source file.
const app = express();

require('./routes/authRoutes')(app); // Initialize the routes specified in the source file, and pass the express app as argument.

const PORT = process.env.PORT || 5000;
app.listen(PORT);
