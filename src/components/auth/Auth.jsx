import Login from "./login/Login";
import Signup from "./signup/Signup";
import { useState } from "react";

function Auth(props) {
  let [authMode, setAuthMode] = useState("signup")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signup" ? "login" : "signup")
  }

  if (authMode === "signup") {
    return (
      <div style={{ width: "48%", display: "inline-block" }}>
        {/* <h2>Signup</h2> */}
        {/* Signup Component */}
        <Signup setToken={props.setToken} />
      </div>
      )
    }
  if (authMode === "login") {
    return (
      <div style={{ width: "48%", display: "inline-block" }}>
          {/* <h1>Login</h1> */} 
          {/* Login Component */}
           <Login setToken={props.setToken} />
          </div>
      )}
    }
      
       //function Auth(props) {
        //return (
         /*  <>
          <div style={{ width: "48%", display: "inline-block" }}>
          <h2>Login</h2> */
          {/* Login Component */}
          {/* <Login setToken={props.setToken} />
          </div>
          <div style={{ width: "48%", display: "inline-block" }}>
          <h2>Signup</h2>
          {/* Signup Component */}
          {/* <Signup setToken={props.setToken} />
          </div>
        </> */}
        //);
        //} 
        
        export default Auth;
