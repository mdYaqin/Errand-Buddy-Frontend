import React from "react";
import { useState } from "react";
import { Redirect} from "react-router-dom";
import Layout from './Layout'


  const Register = () => {

    const [values, setValues] = useState({
      
      email: '',
      name: '',
      password: '',
      error: '',
      success: false,

    })

    const {name, email, password, success, error} = values

    const handleChange = name => event => {
      setValues({...values, error: false, [name]: event.target.value})

    }

    const register = (user)=> {
      console.log(name, email, password)
      //  return fetch(`${API}/signup`, {
       return fetch(`/signup`, {

        method: 'POST',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)

      })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })

    }

    const clickSubmit = (event) => {
      event.preventDefault()
      setValues({...values, error: false})
      register({name: name, email: email, password: password})
      .then(data => {
        if (data.error) {
          setValues({...values, error:data.error, success:false})
        } else {
          setValues({
            ...values, 
            name:'',
            email: '',
            password: '',
            error: '',
            success: true

          
          })
        }
      })


    }
  
    const showError = () => {
      <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
        {error}
      </div>
    }

    // const showLoading = () => 
    //   loading && (<div className="alert alert-info"><h2>loading..</h2></div>)
    

    // const redirectUser = () => {
    //   if(redirectToReferer) {
    //     return <Redirect to="/show" />
    //   }
    // }



  return (
    <div class="container mt-5 mb-5">
      <Layout title="Welcome to Errand Buddy!" description="  "></Layout>
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
              <input onChange={handleChange('email')}
                type="text"
                class="form-control"
                value={email}
                placeholder="Email address"
              />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-user"></i>{" "}
              <input onChange={handleChange('name')}type="text" 
              class="form-control" 
              value={name}
              placeholder="User name" />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-lock"></i>{" "}
              <input onChange={handleChange('password')}type="text" 
              class="form-control"
              value={password}
              placeholder="password" />{" "}
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
            <button onClick={clickSubmit} class="btn btn-primary mt-4 signup">Join us now</button>
           
            <div class="text-center mt-4">
              {" "}
              <span>Already a member?</span>{" "}
              <a href="/#" class="text-decoration-none">
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
