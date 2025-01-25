
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const isAuth = (req, res, next) => {
    const {varificationToken}  = req.cookies;

    if (!varificationToken) {
        return res.status(400).json({ message: "Login again" });
    }

    jwt.verify(varificationToken, process.env.PrivateKey ,function(err, decoded) {
        console.log("decoded is",decoded.userId) // bar
           req.user = decoded.userId;
        //    console.log("req.user",req.user)
           next();
      });

};

module.exports = isAuth;
