import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

//? Creating NavBar
const Nav = ({ token, clearToken }) => {
  return (
    <nav>
      <Navbar className="my-2" color="secondary">
        <NavbarBrand>
          {!token ? (
            <Link style={{ margin: "3px 10px" }} to="/">
              Sign Up/Login
            </Link>
          ) : (
            <Link onClick={clearToken} style={{ margin: "3px 10px" }} to="/">
              Log Out
            </Link>
          )}
          <h2>
            <b>Chat Me Up </b>
          </h2>
        </NavbarBrand>
      </Navbar>
    </nav>
  );
};

export default Nav;
