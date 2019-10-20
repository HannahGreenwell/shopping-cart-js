'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');
const Product = require('../models/product');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  const productCodes = Product.getProductCodes();
  res.json(productCodes);
});

router.get('/:code', (req, res) => {
  const { code } = req.params;
  const product = Product.getProduct(code);
  if (product) {
    return res.json(product);
  } else {
    return res.sendStatus(404);
  }
});

module.exports = router;