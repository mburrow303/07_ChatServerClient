import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const Nav = () => {
return(

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
  <h2><b>Chat Me Up </b></h2>
</NavbarBrand>
</Navbar>
)
  }


export default Nav;