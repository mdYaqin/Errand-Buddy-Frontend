import React, { Component } from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import Layout from './Layout'



const Login = () => {

  const [values, setValues] = useState({
      
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferer: false,

  })

  const {email, password, loading, error, redirectToReferer} = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})

  }



  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false, loading:true})
    Login({ email: email, password: password})
    .then(data => {
      if (data.error) {
        setValues({...values, error:data.error, loading:false})
      } else {
        setValues({
          ...values, 
          redirectToReferer: true

        
        })
      }
    })


  }

  const showError = () => {
    <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
      {error}
    </div>
  }

  // const showSuccess = () => {
  //   <div className="alert alert-info" style={{display: success ? '' : 'none'}}>
  //     New account is created. Please <Link to="/Login">Login</Link>
  //   </div>
  // }


  
    return (
      <div class="container mt-5 mb-5">
        <Layout title="Welcome back Buddy!" description="  "></Layout>
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
                  placeholder="Email address"
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
               
              </div>
              <div class="text-center mt-4">
                {" "}
                <span>Not a member?</span>{" "}
                <a href="/#" class="text-decoration-none">
                  Register
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Login;
