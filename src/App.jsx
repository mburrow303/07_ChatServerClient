import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Auth from "./components/auth/Auth";

function App() {
  const [token, setToken] = useState("");

  useEffect(initializeToken, []);

  function initializeToken() {
    setToken(localStorage.token);
    //setToken(localStorage.getItem('token'));
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
    // delete localStorage.token;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Auth setToken={updateToken} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;