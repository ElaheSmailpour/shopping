const Product = require("../model/product");

exports.getProduct = async (req, res, next) => {
  const products = await Product.find().populate("category");
  res.send(products);
}

exports.postProduct = (req, res) => {

  const pruductlist = req.body;
console.log("pruductlist=",pruductlist)
  Product.create(pruductlist).then(
    (erfolg) => {
      
      res.status(201).send(erfolg);
    }
  ).catch((error) => {
    res.status(500).send(" create pruduct error " + error);
  });
}

