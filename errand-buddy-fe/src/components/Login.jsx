import React, { Component } from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import Layout from './Layout'



const Login = () => {

  const [values, setValues] = useState({
      
    email: '',
    password: '',
   
   

  })

  const {email, password,error} = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})

  }



  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false})
    Login({ email: email, password: password})
    .then(data => {
      if (data.error) {
        setValues({...values, error:data.error})
      } else {
        setValues({
          ...values

        
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
      <div className="container mt-5 mb-5">
        <Layout title="Welcome back Buddy!" description="  "></Layout>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5">
              <h1>Errand Buddy</h1>
              <div className="form-input">
                {" "}
                <i className="fa fa-user"></i>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />{" "}
              </div>
              <div className="form-input">
                {" "}
                <i className="fa fa-lock"></i>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="password"
                />{" "}
              </div>
              <div className="form-check"> </div>{" "}
              <button className="btn btn-primary mt-4 signup">Login</button>
              <div className="d-flex justify-content-center mt-4">
                {" "}
               
              </div>
              <div className="text-center mt-4">
                {" "}
                <span>Not a member?</span>{" "}
                <a href="/#" className="text-decoration-none">
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
