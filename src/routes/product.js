'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');
const ProductsController = require('../ProductsController');
const products = require('../data/products.json');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const productsController = new ProductsController(products);

router.get('/', (req, res) =>
  res.json(productsController.getProductCodes()),
);

router.get('/:code', (req, res) => {
  const product = productsController.getProduct(req.params.code);
  if (product) {
    return res.json(product);
  } else {
    return res.sendStatus(404);
  }
});

module.exports = router;