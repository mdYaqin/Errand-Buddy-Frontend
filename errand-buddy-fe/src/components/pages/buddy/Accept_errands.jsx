import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Accept_errands extends Component {
  render() {
    return (
      
<div>
<div className="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr/>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  <button type="button" class="btn btn-success">
            <Link to="/buddy/completed-errands" className="navbar-item" href="">Item delivered</Link>
            </button>
</div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accept_errands;
