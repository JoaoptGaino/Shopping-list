const express = require('express');
const productController = require("../Routes/productController");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message:"Hello world!"});
});

app.use('/api/products/',productController);

module.exports = app;