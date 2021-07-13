import React, {useState} from "react";
import Layout from "../../Layout";

import {Link} from "react-router-dom";
import Payments  from "./Payment";

const ErrandCompleted = () => {

     return (
          <>
       <Layout title="Buddy Enroute" description=" {Hi user!} "> 
         

     
<div className="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{position: `relative`}}>
      <img src="https://images.unsplash.com/photo-1562840931-b8b53a1dbeb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="..."/>
      
    </div>
    
  
    <div className="col-md-8 offset-mt-10" style={{color:`orange`, fontSize:`40px`}}>Sit back & Relax, <br/>Your buddy is Enroute.</div>
           <button className="btn btn-outline-light" style={{position:`absolute`, alignItems: `center`, justifyContent: `center`}}>
          
       <Link to={`/user/user-review`} className="navbar-item" href="">Errand Completed
       </Link>
       </button>  
  </div>
</div>
           {/* <div className="col-md-8 offset-md-2">{newPostForm()}</div> */}
          
           </Layout>
         </>
      
     );
   };
   
   export default ErrandCompleted;