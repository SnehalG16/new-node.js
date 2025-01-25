import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";
import User from "./components/User";
import Edit from "./components/EditUser";
import PrivateRoutes from "./PrivateRoute";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/getalluser" element={
        <PrivateRoutes>
        <User />
        </PrivateRoutes>
        }
        >
      </Route>
      <Route path="/edit/:id" element={
        <PrivateRoutes>
        <Edit />
        </PrivateRoutes>
        }></Route>
    </Routes>
  );
};

export default Allroutes;
