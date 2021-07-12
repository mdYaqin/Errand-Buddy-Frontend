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
        <div className="card" style={{ width: `24rem` }}>
          <img
            src={props.location.state.e.image}
            alt="..."
          />
          <div className="card-body" style={{boxShadow: `5px 5px 15px orange`}}>
            <h5 className="card-header">{props.location.state.e.categories}</h5>
            <p> {props.location.state.e.price}</p> 
            <h6 className="card-subtitle mb-2 text-muted">{props.location.state.e.time}</h6>
            <p className="card-text">
              Name : {props.location.state.e.name} <br /> Item : {props.location.state.e.item} <br/>
              Posted at:{moment(props.location.state.e.createdAt).fromNow()}

            </p>
            <button className="btn btn-outline-primary" mt-2 mb-2>
            <Link to={`/buddy/${props.location.state.e.id}/accept-errands`} className="navbar-item" href="">Login to accept</Link>
            </button>
          </div>
        </div>
        </>
       
      
    );
  }


export default Show_errands;


