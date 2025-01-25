
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";

  // Edit Movie Form Component
  const EditMovieForm = () => {
    
    const [movie, setMovie] = useState({
      Title: "",
      Genre: "",
      Director: "",
      Description: "",
      ReleaseYear: "",
  } );
  
    const {notesId}=useParams()
      const getsingledata = () => {
        axios.get(`${import.meta.env.VITE_BASEURL}movies/getsinglemovie/${notesId}`, { withCredentials: true })
          .then((res) => {
            console.log(res.data.notes)
            setMovie(res.data.notes)
          })
          .catch((err) => {
            console.log(err);
          });
      };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setMovie({ ...movie, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // onSubmit(movie);

      axios.patch(`http://localhost:8080/movies/update/${notesId}`,movie,{withCredentials:true})
      .then((res)=>{
        alert("data updated successfully")
      })
      .catch((err)=>{
        alert(err)
      })
      
    };

    useEffect(() => {
      getsingledata();
    }, []); 

    return (
      <form onSubmit={handleSubmit} className="form">
      <h2>Edit Movie</h2>
      <label>
        Title:  <br />
        <input
          type="text"
          name="Title" // Match the state property
          value={movie.Title}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Genre: <br />
        <input
          type="text"
          name="Genre" // Match the state property
          value={movie.Genre}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Director:   <br />
        <input
          type="text"
          name="Director" // Match the state property
          value={movie.Director}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:     <br />
        <textarea
          name="Description" // Match the state property
          value={movie.Description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Release Year:             <br />
        <input
          type="number"
          name="ReleaseYear" // Match the state property
          value={movie.ReleaseYear}
          onChange={handleChange}
          required
        />
      </label>
      <br /> <br />
      <button type="submit">Save Changes</button>
    </form>
    
    );
  };

  export default EditMovieForm
