const express = require('express');
const productController = require("../Routes/productController");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('unavailable page');
});

app.use('/api/products/',productController);

module.exports = app;