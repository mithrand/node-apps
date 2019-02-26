const { Products } = require('../../models');

const addProduct = async (req, res) => {
  const product = { ...req.body, price: Number(req.body.price) };
  await Products.add(product);
  res.redirect('/admin');
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  await Products.deleteById(productId);
  res.redirect('/admin');
};

module.exports = {
  addProduct,
  deleteProduct,
};