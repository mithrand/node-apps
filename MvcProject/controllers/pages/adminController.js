const { Products } = require('../../models');

const index = async (req, res) => {
  const products = await Products.getAll();
  res.render('admin/index', {
    prods: products,
    pageTitle: 'Admin',
    path: '/admin',
  });
};

const addProduct = async (req, res) => {
  res.render('admin/product', {
    editing: false,
    pageTitle: 'Admin - Add product',
    path: '/admin/products/add',
    product: {},
  });
};

const updateProduct = async (req, res) => {
  const product = await Products.findById(req.params.productId);
  res.render('admin/product', {
    editing: true,
    pageTitle: 'Admin - update product',
    path: '/admin/products',
    product,
  });
};

module.exports = {
  index,
  addProduct,
  updateProduct,
};