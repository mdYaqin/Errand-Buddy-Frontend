import React, { Component } from "react";
import { useState } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import { useCookies } from "react-cookie";


const Login = (props) => {
<<<<<<< HEAD
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const { email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [cookies, setCookie] = useCookies(["x-auth-token"]);

  const clickSubmit = (event) => {
    event.preventDefault();

    //axios call to backend login
=======


  const [values, setValues] = useState({
      
    email: '',
    password: '',

  })

  const history = useHistory()

  const {email, password} = values

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})

  }

  const clickSubmit = (event) => { 
    event.preventDefault()
    
>>>>>>> ec6dc1718356471a6261df9f2d9725622b98e536
    axios
      .post("http://localhost:4000/api/users/login", {
        email: email,
        password: password,
      })
<<<<<<< HEAD

      .then((data) => {
        localStorage.setItem("jwt", data.data.token);
        props.setAuth(true);
        history.push("/");
        setValues({ ...values, email: "", password: "" });

        // response.token from the backend sets this as the cookie
      })
      .catch((err) => {
        console.log("errror", err);
      });
  };

  return (
    <div className="container mt-5 mb-5">
      <Layout title="Welcome back Buddy!" description="  "></Layout>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            <h1>Errand Buddy</h1>
            <div className="form-input">
              <i className="fa fa-user"></i>
              <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                value={email}
                placeholder="Email address"
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

            <div className="form-check"> </div>
            <button
              onClick={clickSubmit}
              className="btn btn-primary mt-4 signup"
            >
              Login
            </button>

            <div className="d-flex justify-content-center mt-4"></div>
            <div className="text-center mt-4">
              <span>Not a member?</span>
              <a href="/#" className="text-decoration-none">
                Register
              </a>
=======
    .then(data => { 
      localStorage.setItem ('jwt', data.data.token)

      props.setAuth(true)

      history.push('/')
      setValues({...values, email: '',
      password: '',})
    })
    .catch(err => {
      console.log("errror",err)
    })

      }
    
  

  
    return (
      <div className="container mt-5 mb-5">
        <Layout title="Welcome back Buddy!" description="  "></Layout>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5">
              <h1>Errand Buddy</h1>
              <div className="form-input">
                
                <i className="fa fa-user"></i>
                <input
                onChange={handleChange("email")}
                  type="text"
                  className="form-control"
                  value={email}
                  placeholder="Email address"
                />
              </div>
              <div className="form-input">
                
                <i className="fa fa-lock"></i>
                <input
                onChange={handleChange
                ("password")}
                  type="password"
                  className="form-control"
                  value={password}
                  placeholder="password"
                />
              </div>
              <div className="form-check"> </div>
              <button  onClick={clickSubmit}className="btn btn-primary mt-4 signup">Login</button>
              <div className="d-flex justify-content-center mt-4">
                
               
>>>>>>> ec6dc1718356471a6261df9f2d9725622b98e536
              </div>
              <div className="text-center mt-4">
              <span>Forgot your password?</span>
              <a href="/#" className="text-decoration-none">
                Reset
              </a>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
};
=======
    );
  }

>>>>>>> ec6dc1718356471a6261df9f2d9725622b98e536

export default Login;
