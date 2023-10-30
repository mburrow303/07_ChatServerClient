import Login from './login/Login';
import Signup from './signup/Signup';

function Auth(props) {
  return (
   <>

    <div style={{width: '48%', display: 'inline-block'}}>
     <h2>Login</h2>
     {/* place the login component here */}
      <Login setToken={props.setToken}/> 
    </div>
    <div style={{width: '48%', display: 'inline-block'}}>
     {/* Signup Component */}
     <h2>Signup</h2>
      <Signup setToken={props.setToken}/> 
    </div>
    
   </>

export default Auth;
