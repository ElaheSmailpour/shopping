const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.token;
    if (!token)
        return res.status(401).send("no access")
    const user = jwt.verify(token, process.env.JWT)
    if (user) {
        req.user = user;
        next();
    } else 
    res.status(401).send("no access")
}