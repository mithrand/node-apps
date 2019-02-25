const path = require('path');
const uuid = require('uuid/v1');

const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const basePath = require('../utils/basePath');

const filePath = path.join(basePath, 'data', 'product.json');

const getProductsFromStorage = async () => {
  try {
    const content = await readFile(filePath);
    return JSON.parse(content) || [];
  } catch (err) {
    return [];
  }
};

const saveProductsToStorage = async products => writeFile(filePath, JSON.stringify(products));

class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save() {
    let products = await getProductsFromStorage();
    if (!this.id) {
      this.id = uuid();
    } else {
      products = products.filter(prod => prod.id !== this.id);
    }
    products.push(this);
    await saveProductsToStorage(products);
  }

  static async deleteById(id) {
    const products = await getProductsFromStorage().filter(prod => prod !== id);
    return saveProductsToStorage(products);
  }

  static async all() {
    return getProductsFromStorage();
  }

  static async findById(id) {
    const products = await getProductsFromStorage();
    return products.find(prod => prod === id);
  }
}

module.exports = Product;
