import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

const Movies = () => {
  
  const [notesdata, setNotesdata] = useState([])

  const getNotes = () => {

    console.log(notesdata)
    const userinfo = JSON.parse(localStorage.getItem("userData"))
    console.log(userinfo)
    axios.get(`${import.meta.env.VITE_BASEURL}movies/getallmovies/${userinfo._id}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.allUserNotes)
        setNotesdata(res.data.allUserNotes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div>
      <h3 className=''>Movie result:</h3>
      <div className='movie mb-5'> 
        {notesdata.length > 0 ? (notesdata.map((el) => <PostCard key={el.id} title={el.Title} genre={el.Genre} director={el.Director}  discription={el.Description} postId={el._id } releaseYear={el.ReleaseYear}  />)) : (<h2>Notes not found:</h2>)}
      </div>
    </div>
  )
}

export default Movies
