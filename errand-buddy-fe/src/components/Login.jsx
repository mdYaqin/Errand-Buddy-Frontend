import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div class="container mt-5 mb-5">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="card px-5 py-5">
              <h1>Errand Buddy</h1>
              <div class="form-input">
                {" "}
                <i class="fa fa-user"></i>{" "}
                <input
                  type="text"
                  class="form-control"
                  placeholder="User name or Email address"
                />{" "}
              </div>
              <div class="form-input">
                {" "}
                <i class="fa fa-lock"></i>{" "}
                <input
                  type="text"
                  class="form-control"
                  placeholder="password"
                />{" "}
              </div>
              <div class="form-check"> </div>{" "}
              <button class="btn btn-primary mt-4 signup">Login</button>
              <div class="d-flex justify-content-center mt-4">
                {" "}
                <span class="social">
                  <i class="fa fa-google"></i>
                </span>{" "}
                <span class="social">
                  <i class="fa fa-facebook"></i>
                </span>{" "}
                <span class="social">
                  <i class="fa fa-twitter"></i>
                </span>{" "}
                <span class="social">
                  <i class="fa fa-linkedin"></i>
                </span>{" "}
              </div>
              <div class="text-center mt-4">
                {" "}
                <span>Not a member?</span>{" "}
                <a href="#" class="text-decoration-none">
                  Register
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
