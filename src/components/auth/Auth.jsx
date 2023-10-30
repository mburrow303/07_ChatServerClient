import Login from "./login/Login";
import Signup from "./signup/Signup";

function Auth(props) {
  return (
    <>
      <div style={{ width: "48%", display: "inline-block" }}>
        <h2>Login</h2>
        {/* Login Component */}
        <Login setToken={props.setToken} />
      </div>
      <div style={{ width: "48%", display: "inline-block" }}>
        <h2>Signup</h2>
        {/* Signup Component */}
        <Signup setToken={props.setToken} />
      </div>
    </>
  );
}

export default Auth;
