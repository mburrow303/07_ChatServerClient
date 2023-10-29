import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom'


//? Creating NavBar
const Nav = ({ token, clearToken }) => {
return(

  <nav>
<Navbar
className="my-2"
color="secondary"
secondary
>
<NavbarBrand href="/">
 {/*  <img
    alt="logo"
    src="/logo-white.svg"
    style={{
      height: 40,
      width: 40
    }}
  /> */}
  
      {
        !token
        ?
      <Link style={{margin: '3px 10px'}} to="/auth">Sign Up/Login</Link>
        : 
        <Link onClick={clearToken} style={{ margin: '3px 10px'}} to="/">Log Out</Link>
      }
  <h2><b>Chat Me Up </b></h2>
</NavbarBrand>
</Navbar>
  </nav>
)
  }


export default Nav;