import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/login/Login";
import RoomIndex from "./components/roomindex/RoomIndex";

function App({ getAllRooms }) {
  const [token, setToken] = useState("");

  useEffect(initializeToken, []);

  function initializeToken() {
    setToken(localStorage.token);
    console.log(localStorage.token);
  }

  function updateToken(newToken) {
    setToken(newToken);
    localStorage.setItem("token", newToken);

    let localToken = localStorage.token;
    console.log(localToken);
  }

  function clearToken() {
    setToken("");
    localStorage.removeItem("token");
  }
  return (
    <div className="App" margin-bottom="60px">
      <BrowserRouter>
        <Nav token={token} clearToken={clearToken} />
        <Routes>
          <Route path="/" element={<Auth setToken={updateToken} />} />
          <Route path="/login" element={<Login setToken={updateToken} />} />
          <Route
            path="/room/create"
            element={<RoomIndex token={token} getAllRooms={getAllRooms} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;