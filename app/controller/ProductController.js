const Product = require("../model/product");

exports.ProductController = async (req, res, next) => {
  const products = await Product.find().populate("category");
  res.send(products);
}

exports.postProduct = (req, res, next) => {

  const pruductlist = req.body;

  Product.create(pruductlist).then(
    (erfolg) => {
      res.status(201).send(erfolg);
    }
  ).catch((error) => {
    res.status(500).send(" create pruduct error " + error);
  });
}