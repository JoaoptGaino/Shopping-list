const express = require('express');
const Products = require('./models/dbHelpers');
const app = express();

app.use(express.json());

const PORT = 3000;


app.get('/', (req, res) => {
    res.json({ message: "eai cuzao" })
});

app.post('/api/addProduct', (req, res) => {
    Products.add(req.body)
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot add product" });
        });
});

app.get('/api/products', (req, res) => {
    Products.find()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(error => {
            res.status(500).json({ message: "Cannot retrieve data" })
        })
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    Products.findById(id)
        .then(product => {
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: "Record not found" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Cannot retrieve data by id" })
            console.log(error);
        });
});

app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    Products.remove(id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: "Successfully deleted" });
            } else {
                res.status(404).json({ message: "Cannot retrieve data" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Unable to delete" });
            console.log(error);
        })
});

app.patch('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Products.update(id, changes)
        .then(product => { 
            if(product){
                res.status(200).json(product);
            }else{
                res.status(404).json({message:"Cannot find data"});
            }
        })
        .catch(error=>{
            res.status(500).json({message:"Unable to update"});
            console.log(error);
        });
});

app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
});