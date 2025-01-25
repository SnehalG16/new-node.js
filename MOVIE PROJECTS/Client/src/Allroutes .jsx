import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Movies from "./pages/Movies";
import CreateMovie from "./pages/CreateMovie";
import EditMovie from "./pages/EditMovie";
import MoviesByAdmin from "./pages/MoviesByAdmin";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/getallnote" element={<Movies />}></Route>
      <Route path="/create" element={<CreateMovie />}></Route>
      <Route path="/edit/:notesId" element={<EditMovie />}></Route>
      <Route path="/getallnotes" element={<MoviesByAdmin />}></Route>
    </Routes>
  );
};

export default Allroutes;
