import React, { useState } from "react";
import Layout from "../../Layout";
// import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Errand_request from "./Errand_request";
import axios from "axios";

function AddErrands() {
  const [data, setData] = useState({
    category: "",
    items: "",
    username: "",
    description: "",
    pickupLocation: "",
    deliveryLocation: "",
    pickupTime: "",
    deliveryTime: "",
    itemPrice: "",
    errandFee: "",
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/api/users/create-errand",  {
        items: data.items,
        username: data.username,
        description: data.description,
        pickupLocation: data.pickupLocation,
        deliveryLocation: data.deliveryLocation,
        pickupTime: data.pickupTime,
        deliveryTime: data.deliveryTime,
        itemPrice: data.itemPrice,
        errandFee: data.errandFee,
        image: data.image,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <>
      <Layout title="Add Errands" description="Hi {user_id}"></Layout>
      <div className="row">
        <div className="container">
          <form method="POST" action="" />
          <select
            className="form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected> Select Categories</option>
            <option value="1">Grocery</option>
            <option value="2">Queue</option>
            <option value="3">Pet-sit</option>
            <option value="3">Others</option>
          </select>

          <div className="mb-3">
            <label for="username" className="form-label">
              username
            </label>
            <input
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={data.username}
            />
          </div>

          <div className="mb-3">
            <label for="items" className="form-label">
              items
            </label>
            <input
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="items"
              name="items"
              value={data.items}
            />
          </div>

          <div className="mb-3">
            <label for="formFileSm" className="image">
              Upload Image (Optional)
            </label>
            <input
              onChange={handleChange}
              className="form-control form-control"
              id="image"
              type="file"
              value={data.image}
            />
          </div>
          <div className="mb-3">
            <label for="description" className="form-label">
              Description
            </label>
            <input
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={data.description}
            />
          </div>

          <div className="mb-3">
            <label for="pickupLocation" className="form-label">
              pickup location
            </label>
            <input
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="pickupLocation"
              name="pickupLocation"
              value={data.pickupLocation}
            />
          </div>

          <div className="mb-3">
            <label for="deliveryLocation" className="form-label">
              delivery location
            </label>
            <input
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="deliveryLocation"
              name="deliveryLocation"
              value={data.deliveryLocation}
            />
          </div>
          <div className="mb-3">
            <label for="pickupTime" className="form-label">
              pick up time
            </label>
            <input
              onChange={handleChange}
              required
              type="number"
              className="form-control"
              id="pickupTime"
              name="pickupTime"
              value={data.pickupTime}
            />
          </div>

          <div className="mb-3">
            <label for="deliveryTime" className="form-label">
              delivery time
            </label>
            <input
              onChange={handleChange}
              required
              type="number"
              className="form-control"
              id="deliveryTime"
              name="deliveryTime"
              value={data.deliveryTime}
            />
          </div>

          <div className="mb-3">
            <label for="price" className="form-label">
              item price
            </label>
            <input
              onChange={handleChange}
              required
              type="number"
              className="form-control"
              id="itemPrice"
              name="itemPrice"
              value={data.price}
            />
          </div>
          <div className="mb-3">
            <label for="quantity" className="form-label">
              errand fee
            </label>
            <input
              onChange={handleChange}
              required
              type="number"
              className="form-control"
              id="errandFee"
              name="errandFee"
              value={data.errandFee}
            />
          </div>

          <div className="mb-3">
            <label for="quantity" className="form-label">
              status
            </label>
            <input
              onChange={handleChange}
              required
              type="text"
              className="form-control"
              id="status"
              name="status"
              value={data.quantity}
            />
          </div>

          <br />

          <button
            onClick={handleClick}
            className="btn btn-outline-primary mb-5"
          >
            <Link to={`/user/payment`} className="navbar-item" href="">
              Add Errand
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddErrands;