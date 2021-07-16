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
    description: "",
    pickupLocation: "",
    deliveryLocation: "",
    pickupTime: "",
    deliveryTime: "",
    itemPrice: "",
    errandFee: "",
  });

  const [image, setImage] = useState({
      image: ""
  });

  function uploadImage (event) {
    setImage ({

      newImage: event.target.files[0]

    })
  }

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

    let formData = new FormData()
    formData.append ("items", data.items)
    formData.append("category", data.category)
    formData.append('description', data.description)
    formData.append('pickupLocation', data.pickupLocation)
    formData.append('deliveryLocation', data.deliveryLocation)
    formData.append('pickupTime', data.pickupTime)
    formData.append('deliveryTime', data.deliveryTime)
    formData.append('itemPrice', data.itemPrice)
    formData.append('errandFee', data.errandFee)
    formData.append('image', image.newImage)

    axios
      .post("http://localhost:4000/api/users/create-errand", 
        formData,
        {
          headers: {
            'x-auth-token': localStorage.getItem('jwt'),
            "Content-Type": "multipart/form-data" 
          }
        }
      )
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
            name="category"
            value={data.category} onChange={handleChange}
          >
            <option selected> Select Categories</option>
            <option value="Grocery">Grocery</option>
            <option value="Queue">Queue</option>
            <option value="Pet-Sitting">Pet-sit</option>
            <option value="Others">Others</option>
          </select>

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
              Upload Image
            </label>
            <input
              onChange={uploadImage}
              className="form-control form-control"
              id="image"
              type="file"
              name="newImage"
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
              type="date"
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
              type="date"
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
