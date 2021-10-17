import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Search from "./Search";
import {Link} from "react-router-dom";


const Navbar = ({title,icon,searchUser,clearUser,setAlert}) => {
  return (
    <nav  className="navbar navbar-expand-md navbar-dark bg-dark" style={{marginBottom:"1rem"}}>
      <div className="container-fluid" >
      <i className={icon} style={{fontSize:"24px",color:"white"}}><span style={{fontSize:"24px", color:"white"}}>{title}</span></i> 
      
      
          <ul style={{display:"flex", flexDirection:"columns", margin:"auto", fontSize:"20px", fontWeight:"500", listStyle:"none", }}>
            <li className="nav-item" style={{color:"white"}}>
              <Link to="/" style={{color:"white",textDecoration:"none"}}> Home </Link> 
            </li>
            <li className="nav-item" style={{marginLeft:"2rem"}}>
              <Link to ="/about" style={{color:"white", textDecoration:"none"}}>About </Link>
            </li>
        </ul>
      

      <Search setAlert={setAlert} clearUser={clearUser}  searchUser={searchUser}/>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: " Github Finder",
  icon: "fab fa-github"
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}


export default Navbar;