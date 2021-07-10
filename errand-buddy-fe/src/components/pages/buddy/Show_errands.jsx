import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrData from "../../../Data"
import Layout from '../../Layout'

function Show_errands (props) {

  console.log(props,'sssss');
  //  console.log(props.location.data.e, "sasa")
    return (
      <div class="col-lg-12">
       <Layout title="Show" description="Make extra $  ">
       </Layout>
        <div class="card" style={{ width: `38rem` }}>
          <img
            src={props.location.state.e.image}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{props.location.state.e.categories}</h5>
            <p> {props.location.state.e.price}</p> 
            <h6 class="card-subtitle mb-2 text-muted">{props.location.state.e.time}</h6>
            <p class="card-text">
              Name : {props.location.state.e.name} <br /> Item : {props.location.state.e.item}
            </p>
            <button type="button" class="btn btn-success">
            <Link to={`/buddy/${props.location.state.e.id}/accept-errands`} className="navbar-item" href="">Click to accept</Link>
            </button>
          </div>
        </div>
       
      </div>
    );
  }


export default Show_errands;
