const express=require("express")
const { signup, signin, getalluser, deletuser, updateuserinfo, getperticularuser } = require("../controllers/user.controller")

const userRouter=express.Router()
const validator = require("../middleware/Validator");
const UserLogger = require("../middleware/UserLogger");
const isAuth = require("../middleware/AUth");
// sinup route
userRouter.post("/signup",UserLogger,signup)

// signin route
userRouter.post("/signin",UserLogger,signin)

// get all  user information
userRouter.get("/getalluser",getalluser)

// get particular user
userRouter.get("/getperticularuser/:_id",getperticularuser)

// delete user by admin
userRouter.delete("/delateuser/:_id",isAuth,validator,deletuser)

// update user info
userRouter.patch("/edit/:_id",isAuth,validator,updateuserinfo)

module.exports=userRouter