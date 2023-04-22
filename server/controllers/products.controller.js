const Product = require('../models/product.model')


// Get all documents in the collection
module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => {
      res.json(allProducts)
    })
    .catch((err) => {
      res.json({message: 'Unable to retrieve all products', error: err})
    })
}

// Create one new product
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.json(newProduct)
    })
    .catch(err => res.status(400).json(err))
}

// Get product by id
module.exports.findOneProduct = (req, res) => {
  Product.findOne({_id: req.params.id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => console.log(err))
}
