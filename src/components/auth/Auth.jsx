import Signup from "./signup/Signup";
import Login from "./login/Login";
import { useState } from "react";

function Auth(props) {
  return (
    <>
      {/* <div style={{ width: "48%", display: "inline-block" }}> */}
      {/* <h2>Login</h2>  */}
      {/* Login Component */}
      {/* <Login setToken={props.setToken} /> */}
      {/* </div> */}
      <div
        style={{
          width: "48%",
          display: "inline-block",
          textAlign: "center",
          position: "center",
        }}
      >
        <h2>Signup</h2>
        {/* Signup Component */}
        <Signup setToken={props.setToken} />
      </div>
    </>
  );
}

export default Auth;