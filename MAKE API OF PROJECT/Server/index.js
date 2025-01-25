const express = require("express")
const dotenv = require("dotenv")
const connection = require("./config/db")
const userRouter = require("./routes/user.routes")
dotenv.config()
const app = express()
app.use(express.json())
console.log(process.env.PORT)
var cookieParser = require('cookie-parser')
app.use(cookieParser())
var cors = require('cors')
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174","http://localhost:5175"],
    credentials: true
}))

// user routers
app.use("/user", userRouter)


app.get("/logout",(req,res)=>{
    res.clearCookie("varificationToken").json({message:"user logout suceesfully"})
})

app.listen(process.env.PORT
    || 3000, async () => {
        try {
            await connection
            console.log('connected to db')
            console.log(`servr is runing port on ${process.env.PORT || 3000}`)
        } catch (error) {
            console.log(error)
        }
    })
    