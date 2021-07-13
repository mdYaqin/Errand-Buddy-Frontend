import React from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    password2: "",
  });

  const history = useHistory();

  const { name, username, email, password, password2 } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/users/register", {
        username: username,
        name: name,
        email: email,
        password: password,
        password2: password2,
      })
      .then((response) => {
        history.push("/login");
      }).catch((error) => {
        console.log('error')
      })
    
  };

  return (
    <div className="container mt-5 mb-5">
      <Layout title="Welcome to Errand Buddy!" description="  "></Layout>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            <h5 className="mt-3">
              Join other errand buddies! <br /> let us do while you rest
            </h5>
            <small className="mt-2 text-muted">
              All info will be kept under privacy based on pdpa
            </small>
            <div className="form-input">
              <i className="fa fa-envelope"></i>
              <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                value={email}
                placeholder="Email address"
              />
            </div>
            <div className="form-input">
              <i className="fa fa-user"></i>
              <input
                onChange={handleChange("username")}
                type="text"
                className="form-control"
                value={username}
                placeholder="User name"
              />
            </div>
            <div className="form-input">
              <i className="fa fa-user"></i>
              <input
                onChange={handleChange("name")}
                type="text"
                className="form-control"
                value={name}
                placeholder="name"
              />
            </div>
            <div className="form-input">
              <i className="fa fa-lock"></i>
              <input
                onChange={handleChange("password")}
                type="password"
                className="form-control"
                value={password}
                placeholder="password"
              />
            </div>
            <div className="form-input"></div>
            <div className="form-input">
              <i className="fa fa-lock"></i>
              <input
                onChange={handleChange("password2")}
                type="password"
                className="form-control"
                value={password2}
                placeholder="confirm password"
              />
            </div>

            <div className="form-check"> </div>
            <button
              onClick={clickSubmit}
              className="btn btn-primary mt-4 signup"
            >
              Join us now
            </button>

            <div className="text-center mt-4">
              <span>Already a member?</span>
              <a href="/#" className="text-decoration-none">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
