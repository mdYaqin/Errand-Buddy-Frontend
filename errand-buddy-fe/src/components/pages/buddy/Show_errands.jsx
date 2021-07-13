import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrData from "../../../Data"
import Layout from '../../Layout'
import moment from 'moment'

const Show_errands=(props) => {

  console.log(props,'sssss');
  //  console.log(props.location.data.e, "sasa")
    return (
      <>
       <Layout title="Show" 
       description="Make extra $ "
       className="container-fluid"
       >

        
         <div className="row"></div>
       </Layout>
    

        <div className="col-4 mb-3" key={props.location.state.e._id}>
              <div className="card-header" style={{ width: `25rem` }}>
              
                <div
                  className="card-body"
                  style={{ boxShadow: `5px 5px 15px orange` }}
                >
                 
                  <p className="card-header">Created By: {props.location.state.e.username}</p>
                  <br/>
                  <p>Errand Fee:{props.location.state.e.errandFee}</p>
                  <p>Category:{props.location.state.e.category}</p>
                  <p>Item:{props.location.state.e.items}</p>
                  <p>Item Price:{props.location.state.e.itemPrice}</p>
                  <p>Description:{props.location.state.e.description}</p>
                  <p>Pick up Location:{props.location.state.e.pickupLocation}</p>
                  <p>Pick up Time:{props.location.state.e.pickupTime}</p>
                  <p>Delivery Location:{props.location.state.e.deliveryLocation}</p>
                  <p>Created At:{props.location.state.e.createdAt}</p>
                  <p>Status:{props.location.state.e.status}</p>
                 
         
          {/* <div className="card-body" style={{boxShadow: `5px 5px 15px orange`}}>
            <p>Categories :{props.location.state.e.category}</p> 
            <p>{props.location.state.e.date_posted}</p> 
            <p>{props.location.state.e.time_pickup}</p> 
            <p>{props.location.state.e.time_deliver}</p> 
            <p>{props.location.state.e.date_created}</p> 
            <p>{props.location.state.e.status}</p> 
            <p>{props.location.state.e.date_updated}</p> 
            <p>{props.location.state.e.fulfilled_by}</p>  */}
            
          
            <button className="btn btn-outline-primary" mt-2 mb-2>
            <Link to={`/buddy/${props.location.state.e.id}/accept-errands`} className="navbar-item" href="">Login to accept</Link>
            </button>
          </div>
        </div>
        </div>
        </>
       
      
    );
  }


export default Show_errands;


