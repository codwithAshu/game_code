import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = lazy(() => import("./Components/Dashboard/Home"));
import Contact from "./Components/Dashboard/Contact";
import About from "./Components/Dashboard/About";
import LogIn from "./Components/Auth/Login";
import SignupForm from "./Components/Auth/Signup";
import ChangePassword from "./Components/Auth/changePassword";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ForgetPassword from "./Components/Auth/forgetPassword";
import Enter from "./Components/Auth/Enter";

function App() {
  return (
    <>

      <Navbar />

      <Suspense fallback={"loader....."}>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignupForm />} />
          <Route path="/changePassword/:token" element={<ChangePassword />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/About" element={<About />} />
        </Routes></Suspense>
    </>
  );
}

export default App;
