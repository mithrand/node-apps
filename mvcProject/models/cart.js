const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const basePath = require('../utils/basePath');

const filePath = path.join(basePath, 'data', 'cart.json');

const getCartFromStorage = async () => {
  try {
    const cart = await readFile(filePath);
    return JSON.parse(cart);
  } catch (err) {
    console.error(err);
    return {
      products: [],
      totalPrice: 0,
    };
  }
};

const saveCartInStorage = async cart => writeFile(filePath, JSON.stringify(cart));

class Cart {
  static async getCart() {
    return getCartFromStorage();
  }

  static async addProduct(product) {
    const cart = await getCartFromStorage();
    const cartProduct = cart.products.find(prod => prod.id === product.id);
    if (cartProduct) {
      cartProduct.qty += 1;
    } else {
      cart.products.push({
        ...product,
        qty: 1,
      });
    }
    cart.totalPrice += product.price;
    await saveCartInStorage(cart);
  }

  static async deleteProduct(productId) {
    const cart = await getCartFromStorage();
    const product = cart.products.find(prod => prod.id === productId);
    if (!product) return;
    cart.totalPrice -= product.price;
    product.qty -= 1;
    if (product.qty <= 0) {
      cart.products = cart.products.filter(prod => prod.id !== product.id);
    }
    await saveCartInStorage(cart);
  }

  static async removeProduct(productId) {
    const cart = await getCartFromStorage();
    const product = cart.products.find(prod => prod.id === productId);
    if (!product) return;
    cart.totalPrice -= product.price * product.qty;
    cart.products = cart.products.filter(prod => prod.id !== product.id);
    await saveCartInStorage(cart);
  }
}

module.exports = Cart;