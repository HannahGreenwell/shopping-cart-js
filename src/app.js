'use strict';

const express = require('express');
const productRoutes = require('./routes/product');

const app = express();

app.use('/products', productRoutes);

const ShoppingCart = require('./ShoppingCart.js');

app.post('/checkout', (req, res) => {
  const items = req.body.map(x => productsController.getProduct(x));
  const shoppingCart = new ShoppingCart(items);
  return res.json(shoppingCart.checkout());
});

module.exports = app;
