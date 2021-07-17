import React, { Component, useState } from "react";

import { Link } from "react-router-dom";

const Buddy_dashboard = (props) => {
  const [currentValue, setCurrentValue] = useState({
    name: "",
    email: "",
  });

  const {name, email} = currentValue;

  const handleChange = (name) => (event) => {
    setCurrentValue({...currentValue, [name]: event.target.currentValue})
  }

  const dashboardLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Buddy Links</h4>
        <ul className="list-group">
          <Link className="nav-link" to="/"></Link>
          <li className="list-group-item">My Wallet</li>
          <Link className="nav-link" to="/buddy/profile-update">
            Update Profile
          </Link>
        </ul>
      </div>
    );
  };

  const transactionHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Transaction history</h3>
        <ul className="list-group">
          <li className="list-group-item">history</li>
        </ul>
      </div>
    );
  };

  const buddyRating = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Rating</h3>
        <ul className="list-group">
          <li className="list-group-item">{props.reviews.map((customerReview, i) => <div key={i}>{customerReview}</div>) }</li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div title="Dashboard" description="  " className="container-fluid">
        <div className="card mb-5 ">
          <h3 className="card-header">User Information</h3>
          <ul className="list-group">
            <li className="list-group-item">{name}</li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">role</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-3">{dashboardLinks()}</div>
          <div className="col-9">
            {transactionHistory()}
            {buddyRating()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Buddy_dashboard;
