import React, { useState } from "react";
import Layout from "../../Layout";
// import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Errand_request from "./Errand_request";

const AddErrands = () => {
  
  const [selectedFile, setSelectedFile] = useState(null)
  const [name, setName] = useState("")

  const submitForm = () => {

    const formData = new FormData();
    formData.append("name", item_name);
    formData.append("file", selectedFile);
  
    axios
      .post('http://localhost:4000/api/users/create-errand', formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <>
      <Layout title="Add a new product" description="Hi {user}"></Layout>
      <div className="row">
        <div className="container">
          <form method="POST" action="">
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
              <label for="item_name" className="form-label">
                Item Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="item_name"
                name="item_name"
              />
            </div>
            <div className="mb-3">
              <label for="description" className="form-label">
                Description
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="description"
                name="description"
              />
            </div>
            <div className="mb-3">
              <label for="formFileSm" className="form-label">
                Upload Image (Optional)
              </label>
              <input
                className="form-control form-control"
                id="form-control"
                type="file"
                value={selectedFile}
                onChange={(e)=> setSelectedFile(e.target.files[0])}
              />
            </div>

            <div className="mb-3">
              <label for="price" className="form-label">
                Price
              </label>
              <input
                required
                type="number"
                className="form-control"
                id="price"
                name="price"
              />
            </div>
            <div className="mb-3">
              <label for="quantity" className="form-label">
                Quantity
              </label>
              <input
                required
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
              />
            </div>

            <div className="mb-3">
              <label for="address" className="form-label">
                Address
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="address"
                name="address"
              />
            </div>

            <br />

            <button className="btn btn-outline-primary mb-5">
              <Link to={`/user/payment`} className="navbar-item" href="">
                Add Errand
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddErrands;
