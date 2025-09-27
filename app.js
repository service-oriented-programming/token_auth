const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/tokenAuthApp')
  .then(() => {
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error(err));