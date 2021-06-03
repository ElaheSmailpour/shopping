const category = require("../model/category")
const Product = require("../model/product");
exports.postcategory = (req, res) => {

  const categorylist = req.body;
  console.log("categorylist=", categorylist)
  category.create(categorylist).then(
    (erfolg) => {

      res.status(201).send(erfolg);
    }
  ).catch((error) => {
    res.status(500).send(" create category error " + error);
  });
}

exports.getcategory = (req, res) => {
  category.find().then((erfolg) => {
    res.status(200).send(erfolg);
  }).catch((error) => {
    res.status(400).send(" get category error " + error);
  });
}

//getSearch im input 
exports.getSearch = (req, res) => {
  const { q} = req.query;
  var xp = new RegExp(q,"i")
  console.log("q=",q)
  Product.find({ name:{ $regex : xp} }).then((erfolg) => {
    res.status(200).send(erfolg);
  }).catch((error) => {
    res.status(400).send(" get getSearch error " + error);
  });
}

exports.deletecategory = (req, res, next) => {
	const { _id } = req.params;

	category.deleteOne({ _id }).then(
		(erfolg) => {
			res.status(200).send(erfolg);
		}
	).catch(
		(error) => {
			res.status(500).send({ message: "error with DELETE ", objekt: error })
		}
	)
}
