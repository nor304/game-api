const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());

// Bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/user', require('./api/routes/AccountRoute'));
app.use('/api/game', require('./api/routes/GameRoute'));
app.use('/api/cart', require('./api/routes/CartRoute'));
app.use('/api/order', require('./api/routes/OrderRoute'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server starts on port ${PORT}`));