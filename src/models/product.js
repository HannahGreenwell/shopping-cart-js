"use strict";

const products = require('../data/products.json');

class Product {

  constructor() {
    this.price = null;
    this.name = '';
    this.productCode = '';
    this.products = products;
  }

  getProductCodes() {
    return this.products.map(product => product.productCode);
  }

  getProduct(productCode) {   
    return this.products.find(product => product.productCode === productCode);
  }
}

module.exports = new Product();