//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/footer/Footer';
import Auth from './components/auth/Auth';

function App() {
  const [token, setToken] = useState('');
  
  useEffect(initializeToken, []);
  
  function initializeToken(){
  setToken(localStorage.token);
  console.log(localStorage.token);
  }
  
  function updatedToken(newToken) {
 
    setToken(newToken);
    localStorage.setItem("token", newToken);

  }

  function clearToken() {
    setToken('');
    localStorage.removeItem('token');
 

  }
  return (
    <div className="App">
      <BrowserRouter>

        <Nav token={token} clearToken={clearToken} />
        <Routes>
      <header className="App-header">
        <Route path="/auth" element={<Auth setToken={updatedToken}/>}/>
      </header>
      </Routes>
      <Footer/>
      </BrowserRouter>
      {token}

    </div>
  );
}

export default App;