import React, {useState} from "react";
import { BrowserRouter as Router, Route , Link, useHistory} from 'react-router-dom';
import {isAuthenticated} from "./Auth"
import axios from "axios";
import './SiteHeader.scss'





const SiteHeader = (props) => {
  const [bool,setBool]=useState(true)
  const history =useHistory()

  const logout= (next)=>{
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    // axios.get("http://localhost:4000/api/users/logout")
    props.setAuth(false);
    next()
    setBool(prev => !bool)
  }
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">

      <a className="navbar navbar-brand" href="/#">        
      <Link to="/home">
        <img className="logo" src={process.env.PUBLIC_URL + '/Errand-Buddy-Logo.png'} alt="logo"/>
      </Link>
      </a>

      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navb"
        aria-expanded="true"
      >
        <span className="navbar-toggler-icon"></span>
      </button>


      <div id="nav-links" className="navbar ">
        <ul>
          <li className="first-link">
            <Link to="/Home" >
              Home
            </Link>
          </li>
          <li className="other-links">
            <Link to="/user/errand-request">
              Find a Buddy
            </Link>
          </li>
          <li className="other-links">
            <Link to="/buddy/buddy-dashboard">
              Your Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div id="login-links">
        <ul>
          <li>
            {(!props.isAuth && !localStorage.getItem("jwt")) ? (

              <div className="nav-link" href="#">
                
                
                  <Link
                    to="/register"
                  
                    href="/register"
                  >
                    <span className="fas fa-user"></span>
                    Sign up
                  </Link>
              </div>
            ) : <strong className="nav-link authUser">Hello, { localStorage.getItem("username")}</strong>


}
        
          </li>
          <li className="nav-item">
            <div className="nav-link" href="/#">
              
               
              {(!props.isAuth && !localStorage.getItem("jwt")) ? (
                <Link to="/login" className="navbar-link">
                  <span className="fas fa-sign-in-alt"></span>
                    Login            
                </Link>
                ) : (
                <Link to="/" className="navbar-link" onClick={()=> logout(()=> history.push('/home'))}>
                    <span className="fas fa-sign-in-alt"></span>
                    Logout
                </Link>)
                } 
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SiteHeader;
