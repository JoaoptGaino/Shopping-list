const express = require('express');
const productController = require("../Routes/productController");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('unavailable page');
});

app.use('/api/products/',productController);

module.exports = app;