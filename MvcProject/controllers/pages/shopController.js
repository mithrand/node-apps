const {
  Products,
  Cart,
} = require('../../models');

const index = async (req, res) => {
  const products = await Products.getAll();
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop - index',
    path: '/',
  });
};

const products = async (req, res) => {
  const productsList = await Products.getAll();
  res.render('shop/products', {
    prods: productsList,
    pageTitle: 'Shop products',
    path: '/products',
  });
};

const cart = async (req, res) => {
  const cartdata = await Cart.getCart();
  res.render('shop/cart', {
    ...cartdata,
    pageTitle: 'shop - Cart',
    path: '/cart',
  });
};

const orders = async (req, res) => {
  res.render('shop/orders', {
    pageTitle: 'shop - orders',
    path: '/orders',
  });
};

const productDetails = async (req, res) => {
  const product = await Products.findById(req.params.productId);
  res.render('shop/productDetails', {
    product,
    pageTitle: 'shop - product detail',
    path: '/products',
  });
};

module.exports = {
  index,
  products,
  cart,
  orders,
  productDetails,
};