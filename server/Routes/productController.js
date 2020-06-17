const express = require('express');
const Products = require('../models/dbHelpers');

const router = express.Router();

//SELECT
router.get('/', (req, res) => {
    Products.find()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(error => {
            res.status(500).json({ message: "Cannot retrieve data" })
        })
});

router.post('/', (req, res) => {
    Products.add(req.body)
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot add product" });
        });
});

router.get('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

router.patch('/:id', (req, res) => {
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

module.exports = router;