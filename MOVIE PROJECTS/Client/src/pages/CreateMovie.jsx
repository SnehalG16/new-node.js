import axios from "axios";
import React, { useState } from "react";

// Create Movie Form Component
const CreateMovieForm = () => {

  const [movie, setMovie] = useState({
    Title: "",
    Genre: "",
    Director: "",
    Description: "",
    ReleaseYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movie);

    axios
      .post(`http://localhost:8080/movies/create`, movie, { withCredentials: true })
      .then((res) => {
        console.log(res);
        alert(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
      <h2>Create Movie</h2>
      <label>
        Title: <br />
        <input
          type="text"
          name="Title"
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
          name="Genre"
          value={movie.Genre}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Director:     <br /> 
        <input
          type="text"
          name="Director"
          value={movie.Director}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:   <br />
        <textarea
          name="Description"
          value={movie.Description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Release Year:  <br />
        <input
          type="number"
          name="ReleaseYear"
          value={movie.ReleaseYear}
          onChange={handleChange}
          required
        />
      </label>
      <br /> <br />
      <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreateMovieForm;
