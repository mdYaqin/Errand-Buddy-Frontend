import React, { useState } from "react";
import Layout from '../../Layout'
import {isAuthenticated} from "../../auth"
import {Link} from 'react-router-dom'



const Errand_request = () => {
     const [name, setName] = useState('')
     const [error, setError] = useState(false)
     const [success, setSuccess] = useState(false)

     const handleChange = (e) => {
          setError('')
          setName(e.target.value)

     }

     const clickSubmit = (e) => {
          e.preventDefault()
          setError('')
          setSuccess(false)
          //make request to API to create errand


     }

     const newRequestForm = () => {
          <form onSubmit={clickSubmit}>

               <div className="form-group">
               <label className="text-muted">Categories</label>
               <input 
               type="text" 
               className="form-control" 
               onChange={handleChange}
               value={name}
               autoFocus
               />

               <label className="text-muted">Name of Item</label>
               <input 
               type="text" 
               className="form-control" 
               onChange={handleChange}
               value={name}
               autoFocus
               />

               <label className="text-muted">Qty of Item</label>
               <input 
               type="text" 
               className="form-control" 
               onChange={handleChange}
               value={name}
               autoFocus
               />

               <label className="text-muted">Delivery Address</label>
               <input 
               type="text" 
               className="form-control" 
               onChange={handleChange}
               value={name}
               autoFocus
               />

              <label className="text-muted">Fare: $6.00</label>
               <input 
               type="text" 
               className="form-control" 
               onChange={handleChange}
               value={name}
               autoFocus
               />
               <button className="btn btn-outline-primary">Create Errand</button>

               </div>
          </form>
     }

     return (
          <Layout 
title="Add a new category" 
  description="" 
  className="container-fluid">


<div className="row">
    < div className="col-md-8 offset-md-2">{newRequestForm()}</div>
    
</div>
  </Layout>
     )
         
     
}

export default Errand_request



