import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/index";
import Register from "./Pages/Register/index";
import ForgetPassword from "./Pages/ForgetPassword/index"
import { useEffect, useState } from "react";
import AppLayout from "./AppLayout/AppLayout";


function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/" element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
