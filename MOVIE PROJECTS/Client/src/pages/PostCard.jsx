import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({title ,postId,genre,director,discription,releaseYear}) => {
  console.log("title",title)

  // console.log(postId)

  const handlleDelete=(postId)=>{
    // console.log("postId:",postId)
    axios.delete(`${import.meta.env.VITE_BASEURL}movies/delate/${postId}`, { withCredentials: true })
    .then((res)=>{
      console.log(res)
      alert("deleted data sucessfully")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
          <div className="card">
        <div className="card-body">
          <div className="card-title">
            <p className='text-center'> {title} </p>
          </div>
          <div className="card-title">
            <p className='text-center'> {genre} </p>
          </div>  
          <div className="card-title">
            <p className='text-center'> {director} </p>
          </div>
          <div className="card-title">
            <p className='text-center'> {discription} </p>
          </div>
          <div className="card-title">
            <p className='text-center'> {releaseYear} </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className='btn border-dark btn-info ps-4 pe-4'>
            <Link to={`/edit/${postId}`}>Edit</Link>
            </button>
            <br />
          <button className='btn border-dark ms-2 btn-info ps-3 pe-3' onClick={()=>handlleDelete(postId)}>Delete</button>
        </div>
      </div>
        )
}

export default PostCard
