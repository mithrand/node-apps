const {
  Products,
  Cart,
} = require('../../models');

const addToCart = async (req, res) => {
  const { productId } = req.body;
  const product = await Products.findById(productId);
  if (product) await Cart.addProduct(product);
  return res.redirect('/');
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await Cart.deleteProduct(productId);
  } catch (err) {
    console.error(err);
  }

  return res.redirect('/cart');
};

module.exports = {
  addToCart,
  deleteProduct,
};