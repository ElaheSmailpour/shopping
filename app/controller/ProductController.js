const Product = require("../model/product");

exports.getProduct = async (req, res, next) => {
  const products = await Product.find().populate("category");
  res.send(products);
}

exports.addProduct = (req, res) => {

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

exports.deleteproduct = (req, res, next) => {
	const { _id } = req.params;

	Product.deleteOne({ _id }).then(
		(erfolg) => {
			res.status(200).send(erfolg);
		}
	).catch(
		(error) => {
			res.status(500).send({ message: "error with DELETE ", objekt: error })
		}
	)
}

