import React from "react";

function Register() {
  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
          <div class="card px-5 py-5">
            <h5 class="mt-3">
              Join other errand buddies! <br /> let us do while you rest{" "}
            </h5>{" "}
            <small class="mt-2 text-muted">
              All info will be kept under privacy based on pdpa
            </small>
            <div class="form-input">
              {" "}
              <i class="fa fa-envelope"></i>{" "}
              <input
                type="text"
                class="form-control"
                placeholder="Email address"
              />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-user"></i>{" "}
              <input type="text" class="form-control" placeholder="User name" />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-lock"></i>{" "}
              <input type="text" class="form-control" placeholder="password" />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-users" aria-hidden="true"></i>{" "}
            </div>
            <select class="browser-default custom-select">
              <option selected>Select options</option>
              <option value="1">User</option>
              <option value="2">Buddy</option>
            </select>
            <div class="form-check"> </div>{" "}
            <button class="btn btn-primary mt-4 signup">Join us now</button>
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
              <span>Already a member?</span>{" "}
              <a href="#" class="text-decoration-none">
                Login
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
