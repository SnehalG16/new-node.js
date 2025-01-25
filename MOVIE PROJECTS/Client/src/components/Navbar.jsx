import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

export default function Navbar() {

  const {name, role } = JSON.parse(localStorage.getItem("userData"))

  const [notesdata, setNotesdata] = useState([])

  // get all notes by admin
  const getAllNotes = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}movies/getallsmovies`)
      .then((res) => {
        console.log(res)
        setNotesdata(res.data.allUserNotes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // delete all notes by admin
  const handlleDelete = (postId) => {
    console.log(postId)
    axios.delete(`${import.meta.env.VITE_BASEURL}movies/deletallmovies`, { withCredentials: true })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">

        <Link to="/" className="navbar-brand font-weight-bold">
          Home
        </Link>

        <Link to="/getallnote" className="navbar-brand font-weight-bold">
          Movies
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex ms-5">
            <Link>
              {name ? name : ""}
            </Link>
          </div>

          <ul className="navbar-nav align-items-center gap-2 ms-5">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&s"
                  alt="user"
                  className="rounded-circle"
                  width="30"
                  height="30"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end ms-5"
                aria-labelledby="userDropdown"
              >
                <li className="dropdown-header">@username</li>
                <li>
                  <Link to="/dashboard?tab=profile" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item">Sign out</button>
                </li> </ul>
            </li>

            <li className="nav-item ms-5">
              <Link to="/sign-in" className="btn btn-outline-primary ms-5 ps-3">
                Sign In
              </Link>
            </li>

            <li className="ms-5">
            <button className="ms-5">
              <Link to={"/create"} className="text-dark btn ms-3 me-3 p-0" >
                Create Movies
              </Link>
            </button>
            </li>

          </ul>
        </div>
       
        {
          role === "admin" ? (
            <div className="admin-acees">
              <button onClick={getAllNotes}>
                <Link to={"/getallnotes"} className="text-dark btn ms-2 p-0" >
                Get All Movies
                </Link>
                </button>
              <button onClick={handlleDelete} className="ms-4 deletebtn" >Delete All Movies</button>
            </div>
          ) : ("")
        }
      </div>
    </nav>
  );

}
