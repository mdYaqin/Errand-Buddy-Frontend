import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrData from "../../../Data";
import Layout from "../../Layout";
import moment from "moment";
import { isAuthenticated } from "../../Auth";

const Show_errands = (props) => {
  console.log(props, "sssss");
  //  console.log(props.location.data.e, "sasa")
  return (
    <>
      <Layout
        title="Show"
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
            <p className="card-header">
              Created By: {props.location.state.e.username}
            </p>
            <br />
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
        </div>
      </div>
    </>
  );
};

export default Show_errands;
