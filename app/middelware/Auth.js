const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.token;
    if (!token)
        return res.status(401).send("no access")
        console.log("process.env.JWT=",process.env.JWT)
    const user = jwt.verify(token, "elahe")
    
    if (user) {
        req.user = user;
        next();
    } else 
    res.status(401).send("no access")
}