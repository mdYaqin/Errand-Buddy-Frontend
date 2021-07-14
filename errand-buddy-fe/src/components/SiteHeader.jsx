import React from "react";
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
import './SiteHeader.scss'




const SiteHeader = (props) => {
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
            <Link to="/user/dashboard">
              Your Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div id="login-links">
        <ul>
          <li>
            <a className="nav-link" href="/#">
              <span className="fas fa-user">
                {" "} 
                <Link
                  to="/register"
                  
                  href="/register"
                >
                  <strong>Sign up</strong>
                </Link>
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              <span className="fas fa-sign-in-alt">
                {" "}
                <Link to="/login">                  
                  <strong>Login</strong>
                </Link>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SiteHeader;
