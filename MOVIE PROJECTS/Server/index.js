const express = require("express")
const dotenv = require("dotenv")
const connection = require("./config/db")
// const userRouter = require("./routes/user.routes")
dotenv.config()
const app = express()
app.use(express.json())
console.log(process.env.PORT)
var cookieParser = require('cookie-parser')
// const notesRouter = require("./routes/notes.routes")
app.use(cookieParser())
// var express = require('express')

var cors = require('cors')
const moviesRouter = require("./routes/movieRoutes")
const authRoutes = require("./routes/authRoutes")
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    credentials: true
}))

// user routers
app.use("/user", authRoutes)

// notes routers
app.use("/movies", moviesRouter)

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
