import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/login/Login";
import RoomIndex from "./components/roomindex/RoomIndex";

//import Display from "./components/display/Display"
//import AddRoom from "./components/display/addroom/AddRoom";
//import UpdateRoom from "./components/display/updateroom/UpdateRoom";
//import DeleteRoom from "./components/display/deleteroom/DeleteRoom";

function App() {
  const [token, setToken] = useState('');
  
  useEffect(initializeToken, []);
  
  function initializeToken(){
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
    setToken('');
    localStorage.removeItem('token');
  }
  return (
    <div className="App" margin-bottom="60px">
      <BrowserRouter>
        <Nav token={token} clearToken={clearToken} />
        <Routes>
          <Route path="/" element={<Auth setToken={updateToken} />} />
          <Route path="/login" element={<Login setToken={updateToken} />} />
          <Route path="/room/list" element={<RoomIndex />} />
          
          {/* <Route path="/display" element={<Display />} /> */}
          {/* <Route path="/create" element={<AddRoom setToken={token} />} /> */}
          {/* <Route path="/room/:id" element={<UpdateRoom setToken={updateToken} />} /> */}
          {/* <Route path="/room/:id" element={<DeleteRoom setToken={updateToken} />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/*{token}*/}
    </div>
  );
}

export default App;