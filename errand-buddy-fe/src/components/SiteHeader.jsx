import React from "react";
import { Link } from "react-router-dom";

class SiteHeader extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <a class="navbar-brand" href="#">
          Errand Buddy
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
          aria-expanded="true"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navb" class="navbar-collapse collapse hide">
          <ul class="navbar-nav ml-auto">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Grocery
                </a>
                <a class="dropdown-item" href="#">
                  Pick-up
                </a>
                <a class="dropdown-item" href="#">
                  Others
                </a>
              </div>
            </div>
            <button type="button" class="btn btn-warning">
              Find a Buddy
            </button>
          </ul>

          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="fas fa-user"></span> Sign Up
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="fas fa-sign-in-alt"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default SiteHeader;
