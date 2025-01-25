import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios'

const MoviesByAdmin = () => {

  const [notesdata, setNotesdata] = useState([])

  const getNotes = () => {

    console.log(notesdata)
    axios.get(`${import.meta.env.VITE_BASEURL}movies/getallmovies`, { withCredentials: true })
      .then((res) => {
        console.log(res)
        const notes = res.data?.notes || [];
        setNotesdata(notes);
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
      <h4 className='p-2'>Movies Collection:</h4>
      <div className='movies' >
        {
          notesdata.map((el) => {
            return <div key={el.id} className='' style={{border:"1px solid cadetblue",textAlign:"center"}}> 
            <div>
                        <h5>{el.Title}</h5>
                        <h5>{el.Genre}</h5>
                        <h5>{el.Director}</h5>
                        <h5>{el.Description}</h5>
                        <h5>{el.ReleaseYear}</h5>
            </div>                       
              </div>
          })
        }

      </div>
    </div>
  )
}

export default MoviesByAdmin
