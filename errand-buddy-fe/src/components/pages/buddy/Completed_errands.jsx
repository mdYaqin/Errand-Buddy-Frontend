import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Completed_errands extends Component {
  render() {
    return (
      <div class="form-group" id="rating-ability-wrapper">
        
        <label class="control-label" for="rating">
          <span class="field-label-header">
            How would you rate your buddy services?*
          </span>
          <br />
          <span class="field-label-info"></span>
          <input
            type="hidden"
            id="selected_rating"
            name="selected_rating"
            value=""
            required="required"
          />
        </label>
        <h2 class="bold rating-header">
          <span class="selected-rating">0</span>
          <small> / 5</small>
        </h2>
        <button
          type="button"
          class="btnrating btn btn-default btn-lg"
          data-attr="1"
          id="rating-star-1"
        >
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btnrating btn btn-default btn-lg"
          data-attr="2"
          id="rating-star-2"
        >
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btnrating btn btn-default btn-lg"
          data-attr="3"
          id="rating-star-3"
        >
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btnrating btn btn-default btn-lg"
          data-attr="4"
          id="rating-star-4"
        >
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="btnrating btn btn-default btn-lg"
          data-attr="5"
          id="rating-star-5"
        >
          <i class="fa fa-star" aria-hidden="true"></i>
+        </button>

        <div class="form-group">
          <label class="control-label col-sm-2" for="comment">
            Give review:
          </label>
          <div class="col-sm-10">
            <textarea class="form-control" rows="5" id="comment"></textarea>
            <button type="button" class="btn btn-warning">
          Submit
            </button>
          </div>
        </div>
        <button type="button" class="btn btn-warning">
            <Link to="/buddy/buddy-dashboard" className="navbar-item" href="">My Profile</Link>
            </button>

      </div>
    );
  }
}

export default Completed_errands;
