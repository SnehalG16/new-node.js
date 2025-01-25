const express=require("express")
const { signup, signin } = require("../controllers/authController")
// const { signup, signin } = require("../controllers/user.controller")
// const isAuth = require("../middleware/AUth")
const authRoutes=express.Router()

// sinup route
authRoutes.post("/signup",signup)

// signin route
authRoutes.post("/signin",signin)

module.exports=authRoutes
