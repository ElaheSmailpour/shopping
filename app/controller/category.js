const category = require("../model/category")

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

