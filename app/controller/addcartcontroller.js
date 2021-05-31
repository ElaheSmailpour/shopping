const User = require("../model/user");
exports.addcart = async (req, res, next) => {
    try {

        let finduser = await User.findOne({ _id: req.user.userId })
        if (finduser) {
            const { productid, count } = req.body;
            const foundProductIndex = finduser.cart.findIndex(item => item.product == productid)
            console.log("foundProductIndex=", foundProductIndex)
            // if (foundProductIndex === -1  wenn dise ausgewählte product  aber nicht gefunden
            if (foundProductIndex === -1) {
                finduser.cart.push({ product: productid, count: count })
            }
            else {
                finduser.cart[foundProductIndex].count = parseInt(count);
            }
            await finduser.save()
        }
        res.status(200).send(finduser);


    } catch (error) {

        res.status(500).send('Something addcart wrong!')
        console.log("erroraddcard=", error)
    }
}

exports.addcartinNote = async (req, res, next) => {
  try {

      let finduser = await User.findOne({ _id: req.user.userId })
      if (finduser) {
          const { productid, count } = req.body;
          const foundProductIndex = finduser.cart.findIndex(item => item.product == productid)
          console.log("foundProductIndex=", foundProductIndex)
          // if (foundProductIndex === -1  wenn dise ausgewählte product  aber nicht gefunden
          if (foundProductIndex === -1) {
              finduser.cart.push({ product: productid, count: count })
          }
          else {
              finduser.cart[foundProductIndex].count += parseInt(count);
          }
          await finduser.save()
      }
      res.status(200).send(finduser);


  } catch (error) {

      res.status(500).send('Something addcart wrong!')
      console.log("erroraddcard=", error)
  }
}

exports.getcart = (req, res, next) => {
    console.log(req.user)

    User.findById(req.user.userId).populate("cart.product").then((userdata) => {
        console.log("userdata=", userdata)
        res.status(200).send(userdata.cart);

    }).catch((error) => {
        res.status(401).send("error with getcart", error)
    })

}

exports.removeselectcount = async (req, res, next) => {
    try {
  
      let finduser = await User.findOne({ _id: req.user.userId })
      if (finduser) {
     
          finduser.cart = finduser.cart.filter(item => {
  
            return item.product != req.params.id
  
          })
          await finduser.save()
        
  
        res.status(200).send(true);
      }
  
    } catch (error) {
      res.status(500).send('Something delete cartselectcount wrong!')
      console.log("error=", error)
  
    }
  }
  