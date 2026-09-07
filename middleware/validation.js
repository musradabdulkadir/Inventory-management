const validate = (req, res, next) => {
  const { name, category, price, quantity, supplier, status } = req.body;
  if (!name | !category | !price | !quantity | !supplier | !status) {
    res.send(
      "Make sure you have include Name, Category, Price, Quantity, Supplier And Status In your data",
    );
  }
  next();
};

module.exports = validate
