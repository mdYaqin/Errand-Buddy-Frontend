import React, {useState} from "react";
import Layout from "../../Layout";
// import { isAuthenticated } from "../../auth";
import {Link} from "react-router-dom";
import Add_errand  from "./Add_errand";

const Payments = () => {

     return (
          <>
       <Layout title="Payment Page" description=" {Hi user!} "> </Layout>
         <div className="row">
           
           <div className="col-md-8 offset-md-2">Hello</div>

           
           <button className="btn btn-outline-primary">
       <Link to={`/user/errand-completed`} className="navbar-item" href="">Confirm Payment
       </Link>
       </button>  
         </div>
         </>
      
     );
   };
   
   export default Payments;