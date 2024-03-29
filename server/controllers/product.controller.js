<<<<<<< HEAD
const Product = require("../models/product.model.js"); 

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },

    createProduct: (req, res) => {

        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedProduct) => res.json(updatedProduct))
            .catch((err) => console.log(err));
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    }
=======
const Product = require('../models/product.model.js');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch((err) => console.log(err));
    }
>>>>>>> 0f6c36f6d0c398af33856cf659c1fbf17588c789
};