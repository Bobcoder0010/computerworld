const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err)   
 {
    res.status(500).json({ message: err.message   
 });
  }
};

// Implement other controller methods as needed