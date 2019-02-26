const path = require('path');
const uuid = require('uuid/v1');

const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const basePath = require('../utils/basePath');
const Cart = require('./cart');

const filePath = path.join(basePath, 'data', 'products.json');

const getProductsFromStorage = async () => {
  try {
    const content = await readFile(filePath);
    return JSON.parse(content) || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const saveProductsToStorage = async products => writeFile(filePath, JSON.stringify(products));

class Products {
  static async add(product) {
    const newProduct = product;
    let products = await getProductsFromStorage();
    if (!newProduct.id) {
      newProduct.id = uuid();
    } else {
      products = products.filter(prod => prod.id !== newProduct.id);
    }
    products.push(newProduct);
    await saveProductsToStorage(products);
  }

  static async deleteById(id) {
    const products = await getProductsFromStorage().filter(prod => prod !== id);
    await Cart.removeProduct(id);
    return saveProductsToStorage(products);
  }

  static async getAll() {
    return getProductsFromStorage();
  }

  static async findById(id) {
    const products = await getProductsFromStorage();
    return products.find(prod => prod.id === id);
  }
}

module.exports = Products;
