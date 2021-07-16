import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrData from "../../../Data";
import Layout from "../../Layout";
import moment from "moment";
import { isAuthenticated } from "../../Auth";

import './Show_errands.scss'
import SiteFooter from '../../SiteFooter';


const Show_errands = (props) => {
  console.log(props, "sssss");
  //  console.log(props.location.data.e, "sasa")


    return (
        <div>
           <div className="mainshow-container mt-5">
            <div className="row ">
              <div className="show-container col-7 mb-3" key={props.location.state.e._id}>
                <img className="show-image" src={props.location.state.e.image} alt="Item" />
                
                <div className="row show-header">
                  <p className="summary">{props.location.state.e.items}</p>
                  <p className="fees">${props.location.state.e.errandFee}</p>
                  <p className="category">{props.location.state.e.category}</p>
                </div>
              
                <div className="row location-info">
                  <div className="pickup-info">
                    <p>Pick up Location:{props.location.state.e.pickupLocation}</p>
                    <p>Pick up Time:{props.location.state.e.pickupTime}</p>
                  </div>

                  <div className="deliver-info">
                    <p>Delivery Location:{props.location.state.e.deliveryLocation}</p>
                  </div>

                </div>
                              


                <p>Item Price:{props.location.state.e.itemPrice}</p>
                <p>Description:{props.location.state.e.description}</p>
                <p>Status:{props.location.state.e.status}</p>

                <button className="btn btn-outline-primary" mt-2 mb-2>
              {isAuthenticated() && (
                <Link
                  to={`/buddy/${localStorage.getItem("jwt")}/accept-errands`}
                  className="navbar-item"
                  href=""
                >
                  Accept
                </Link>
              )}
              {!isAuthenticated() && (
                <Link to={`/login`} className="navbar-item" href="">
                  Login to accept
                </Link>
              )}
            </button>
                
              </div>

              <div className="col-4 mb-3">
                <div className="errand-guarantee">
                  <div style={{ display: "flex"}}>
                    <h2>Errand Buddy Guarantee</h2> 
                    <img className="guarantee-logo" src={process.env.PUBLIC_URL + '/guarantee.png'} alt="logo"/>
                  </div>
                  <div>
                    <h6> Create and perform your errands with confidence.
                    All payments are collected prior to errand acceptance and will only be released to respective parties 14 days after completion of order.
                    <br/>
                    Any disputes can be raised immediately.</h6>
                  </div>
                </div>

                <div className="seller-info">
                  <h5>Meet The Seller</h5>
                  
                  <div className="seller-rep">
                    <div className="ratings">
                      <p>{props.location.state.e.username} ( number <i className="fas fa-star"></i>)</p>
                    </div>
                    <h6> Based on XX of reviews</h6>
                  </div>

                  
                  <div className="dotted-lines"></div>

                  <div className="review-box">
                    <h5> Reviews </h5>
                  </div>
                
                </div>

              </div>
            </div>
            

          </div>

          <SiteFooter />

        </div>
      
    );
  }

export default Show_errands;
