import React, { useContext } from "react";
import { HashLink } from 'react-router-hash-link';
import { PublicKeyContext } from "../../App";
import "./styles.css"


export const NavBar = () => {
  const {publicKey} = useContext(PublicKeyContext)
  return (
    <nav className="navbar">
      <HashLink to="/#" title="phionthrium">phion<u>thrium</u></HashLink>
      <div className="navItems">
          <HashLink title="Home" to="/#" >Home</HashLink>
          <HashLink title="About" to="/#about" >About</HashLink>
          {
            publicKey ? <h1>{publicKey}</h1> : 
            <HashLink title="Login" to="/Login" >Login</HashLink>
          }
      </div>
    </nav>
  );
};
