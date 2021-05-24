const User = require("../model/user");

exports.getnote = (req, res, next) => {
console.log(req.user)
    
    User.findById(req.user.userId).then((succes) => {
   
      res.status(200).send(succes.notes);
  
    }).catch((error) => {
      res.status(401).send("error with getnote", error)
    })
  
  }