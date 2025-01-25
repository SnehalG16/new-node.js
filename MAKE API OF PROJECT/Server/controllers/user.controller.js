const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const express = require("express")

var cookieParser = require('cookie-parser')
// const isAuth = require("../middleware/AUth")

var app = express()
app.use(cookieParser())
// app.use(isAuth)

// signup
const signup = async (req, res) => {

    const { username, email, password,confirmpassword,location,dob } = req.body;
    try {
        const isuserExist = await userModel.findOne({ email })
        if (isuserExist) {
            return res.status(400).send({ message: "Email already exist" })
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(500).send({ message: 'error to hash password' })
            }
            await userModel.create({ username, email, password: hash,location,dob })
            res.status(200).send({ message: "user created successfully" })
        })
    } catch (error) {
        res.status(400).send({ message: error })
    }
}

// signin
const signin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill in all fields" })
    }
    const isExistUser = await userModel.findOne({ email })
    if (!isExistUser) {
        return res.status(200).json({ message: "Please signup first" })
    }

    bcrypt.compare(password, isExistUser.password, function (err, result) {
        if (err) {
            return res.status(400).json({ message: "Error in Comparing Password" })
        }
        if (result) {
            const { password, ...rest } = isExistUser._doc
            // console.log(isExistUser)
            jwt.sign({ userId: rest }, process.env.PrivateKey, function (err, token) {
                if (err) {
                    return res.status(400).json({ message: "Error in creating token" })
                }
                //   console.log(token)
                res.cookie("varificationToken", token)
                    .status(200).json({ message: "User Login Succeessfully", userData: rest })
                console.log("token is" + " " + token)
            })
        }
        else {
            return res(400).json({ message: "Incorect password" })
        }
    })

}

// get all users info
const getalluser = async (req, res) => {
    const alluserinfo = await userModel.find()
    console.log(alluserinfo)
    return res.status(200).send(alluserinfo)
}

// get particular user
const getperticularuser=async(req,res)=>{
    const { _id } = req.params;

    try 
    {
        const User = await userModel.findById(_id);
        res.send(User);
        // console.log(User)
    }
    catch (error) 
    {
        res.status(400).json({ message: "User Not Found !" });
    }

}

// delet user
const deletuser=async(req,res)=>{
   const {_id} = req.params;
   console.log(_id) 
   
try {
    const deleteUserdata = await userModel.findByIdAndDelete(_id);
    console.log(deleteUserdata) 

    if(!deleteUserdata){
        res.status(400).json({message:"User not found"})
    }
    else
    {
    res.status(200).json({messagel:"User deleted successfully"})
    }
 
} catch (error) {
    res.status(400).json({message:error})
}
   
}

// update user
const updateuserinfo=async(req,res)=>{
    const { _id } = req.params;

    try 
    {
        const User = await userModel.findByIdAndUpdate(_id, { $set: { ...req.body }});

        if (!User) 
        {
            return res.status(404).json({ message: "User Not Found !" });
        }
        else 
        {
            res.status(200).json({ message: "User Updated Successfully !" })
        }
        
    }
    catch (error) 
    {
        console.log(error)
        res.status(400).json({ message: "Error updating user" });
    }
}

module.exports = { signup, signin, getalluser, deletuser,updateuserinfo,getperticularuser}