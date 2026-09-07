exports.createProduct = (req, res) => {
  const { name, category, price, quantity, supplier, status } = req.body;
  const product = { name, category, price, quantity, supplier, status };
  res.json(product);
};
