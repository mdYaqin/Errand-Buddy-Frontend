import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Show_errands extends Component {
  render() {
    return (
      <div class="col-lg-11">
        <div class="card" style={{ width: `18rem` }}>
          <img
            src="https://images.unsplash.com/photo-1584093092919-3d551a9c5055?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Grocery</h5>
            <h6 class="card-subtitle mb-2 text-muted">1 hour left!</h6>
            <p class="card-text">
              Name : Mr A <br /> Item : 1 Qty of Bread
            </p>
            <button type="button" class="btn btn-success">
            <Link to="/buddy/accept-errands" className="navbar-item" href="">Click to accept</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show_errands;
