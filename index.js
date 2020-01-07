const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/auth/google', (req, res) => {
  res.send('Trying to authenticate');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
