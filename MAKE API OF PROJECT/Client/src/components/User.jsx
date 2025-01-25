import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const User = () => {
  const [userdata, setUserdata] = useState([])

  // get userdata
  const getalluserdata = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}user/getalluser`, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        // setUserdata(userdata)
          setUserdata(res.data)
      })
      .catch((err) => {
        // console.log(err)
        console.log(err.response.data.message)
      })
  }

  // delate user data
  const delateuser=(_id)=>{
    axios.delete(`${import.meta.env.VITE_BASEURL}user/delateuser/${_id}`,{withCredentials:true})
    .then((res)=>{
      console.log(res)
      alert("User Deleted successfully")
      getalluserdata()
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  useEffect(() => {
    getalluserdata()
  }, [])

  return (
    <div className='products'>
      {userdata.map((el) => (
        <div key={el.id}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" alt="" width={"160px"} height={"100px"} />
          <h5>{el.Username} </h5>
          <h5>{el.email} </h5>
          <h5>{el.location} </h5>
          <h5>{el.role} </h5>
          <h5>{el.dob} </h5>
          <div>
            <button>
              <Link to={`/edit/${el._id}`} >
              Edit
              </Link>
            </button>
            <button onClick={(e)=>delateuser(el._id)} >Delate</button>
          </div> 
        </div>
      ))}
    </div>
  )
}

export default User
