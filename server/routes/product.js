const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);   

router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);   


module.exports = router;