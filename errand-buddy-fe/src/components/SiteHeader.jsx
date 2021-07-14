import React, {useState} from "react";
import { BrowserRouter as Router, Route , Link, useHistory} from 'react-router-dom';
import './SiteHeader.css'
import {isAuthenticated} from "./Auth"
import axios from "axios";




const SiteHeader = (props) => {
  const [bool,setBool]=useState(true)
  const history =useHistory()

  const logout= (next)=>{
    localStorage.removeItem('jwt');
    // axios.get("http://localhost:4000/api/users/logout")
    next()
    setBool(prev => !bool)
  }
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <a className="navbar-brand" href="/#">
        Errand Buddy <i className="fab fa-typo3"></i>
      </a>

      <a className="navbar-brand" href="/#">
        <Link
          to="/home"
          className="navbar-link"
          
          href=""
        >
          Home
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
      <div id="navb" className="navbar-collapse collapse hide">
        <ul className="navbar-nav ml-auto">
          <button type="button" className="btn btn-primary"> 
          <Link to="/user/errand-request"
          className="navbar-link">
            Find a Buddy
          </Link>
            
          </button>
        </ul>

        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#">
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              <span className="fas fa-sign-in-alt">
                
                {!isAuthenticated() && (<Link to="/login" className="navbar-link">
                  
                  <strong>Login</strong>
                </Link>)} 
                {isAuthenticated() && (<Link to="/" className="navbar-link" onClick={()=> logout(()=> history.push('/home'))}>
                  <strong>Logout</strong>
                </Link>)}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SiteHeader;
