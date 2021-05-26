const User = require("../model/user");

exports.getnote = (req, res, next) => {
  console.log(req.user)

  User.findById(req.user.userId).populate("notes").then((userdata) => {
console.log("userdata=",userdata)
    res.status(200).send(userdata.notes);

  }).catch((error) => {
    res.status(401).send("error with getnote", error)
  })

}


exports.creatnote = async (req, res, next) => {
  try {

    let finduser = await User.findOne({ _id: req.user.userId })
    if (finduser) {
     if(!finduser.notes.includes(req.params.productid)){
      finduser.notes.push(req.params.productid)
      await finduser.save()
     }

      res.status(200).send(true);
    }

  } catch (error) {
    res.status(500).send('Something note wrong!')
  }
}


exports.removenote = async (req, res, next) => {
  try {

    let finduser = await User.findOne({ _id: req.user.userId })
    if (finduser) {
     if(finduser.notes.includes(req.params.id)){
      finduser.notes = finduser.notes.filter(item=>{
        
       return item!=req.params.id
     
      })
      

      await finduser.save()
     }

      res.status(200).send(true);
    }

  } catch (error) {
    res.status(500).send('Something delete Note wrong!')
console.log("error=",error)

  }
}
