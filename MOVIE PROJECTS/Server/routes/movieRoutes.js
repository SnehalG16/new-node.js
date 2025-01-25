const express=require("express")

const { createMovie, GetAllMovieByUser, GetSingleMovieByUser, updateMovie, GetAllMoviesByAdmin, DelateAllMoviesByAdmin, deleteMovie } = require("../controllers/movieController")
const authMiddleware = require("../middleware/authMiddleware")
const app = express()

app.use(express.static("./upload"))

// const { createNotes, deleteNotes, GetAllNotesByUser, GetSingleNoteByUser, updateNote, GetAllNotesByAdmin, DelateAllNotesByAdmin } = require("../controllers/notes.controler")

const moviesRouter= express.Router()

moviesRouter.post("/create",authMiddleware,createMovie)
 
// delete notes
moviesRouter.delete("/delate/:moviesId",authMiddleware,deleteMovie)
    
// Get ALl notes of user
moviesRouter.get("/getallmovies/:userId",authMiddleware,GetAllMovieByUser)

// single notes by user
moviesRouter.get("/getsinglemovie/:moviesId",authMiddleware,GetSingleMovieByUser)

// update note
moviesRouter.patch("/update/:moviesId",authMiddleware,updateMovie)

// get all notes by admin
moviesRouter.get("/getallmovies",GetAllMoviesByAdmin)

// get deleted by admin
moviesRouter.delete("/deletallmovies",DelateAllMoviesByAdmin)

module.exports=moviesRouter
