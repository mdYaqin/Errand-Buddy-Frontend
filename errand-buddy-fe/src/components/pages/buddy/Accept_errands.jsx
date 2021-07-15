import React, { Component } from "react";
import { Link,useParams } from "react-router-dom";
import Layout from '../../Layout'

function Accept_errands(props) {
     console.log(props, 12345)
     const id = localStorage.getItem("jwt");
     // const {id} = localStorage;
     console.log(id, "localstorage userID");
     const { userID } = useParams();

    return ( 
<div>
<Layout title="Accept Errand" 
       description=""
       className="container-fluid"
       >

        
         <div className="row"></div>
       </Layout>
<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr/>
  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  <button type="button" className="btn btn-success">
            <Link to={`/buddy/${props.match.params.id}/completed-errands`} className="navbar-item" href="">Item delivered</Link>
            </button>
</div>

       
      </div>
    );
  }


export default Accept_errands;
