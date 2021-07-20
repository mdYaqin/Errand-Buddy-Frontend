import React, { useState } from "react";
import Layout from "../../Layout";
// import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Errand_request from "./Errand_request";
import DateFnsUtils from '@date-io/date-fns'
import axios from "axios";
import './Add_errand.scss'

import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'



function AddErrands() {

  const [data, setData] = useState({
    category: "",
    items: "",
    description: "",
    pickupLocation: "",
    deliveryLocation: "",
    itemPrice: "",
    errandFee: ""
  });

  const [errandData, setErrandData] = useState({
    name:"",
    image:"",
    price:""
  })

  const [pickupDate, setPickupDate] = useState(new Date())
  const [deliveryDate, setDeliveryDate] = useState(new Date())

  const [image, setImage] = useState({
      image: ""
  });

  function uploadImage (event) {
    setImage ({
      
      newImage: event.target.files[0]

    })
  }

  function updateErrandData (info) { //this needs to be checked
    
    const { name, value } = info
    
    setErrandData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
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
    formData.append('pickupTime', pickupDate)
    formData.append('deliveryTime', deliveryDate)
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
        
        updateErrandData(res.data.errandInfo) //this needs to be checked along with the data being passed in the link


        console.log(errandData)
      });
  }


  return (
    <>
      <div className="row">
        <div className="container">

          <form method="POST" action="" />
          <h1> Create an Errand </h1>
          <select
            className="input mb-3"
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

          <div className="outer mb-3">
            <input
              onChange={handleChange}
              required
              type="text"
              className="input  "
              id="items"
              name="items"
              value={data.items}
              placeholder="Summary of Errand"
            />
          </div>

          <div className="outer mb-3">

            <input
              onChange={uploadImage}
              className="input"
              id="image"
              type="file"
              name="newImage"
              placeholder="Upload an image"
            />
          </div>
          <div className="outer textbox mb-3">
            <textarea
              rows="5"
              onChange={handleChange}
              required
              type="text"
              className="input"
              id="description"
              name="description"
              placeholder="Description of Errand"
              value={data.description}
            />
          </div>

          <div className="outer mb-3">
            <input
              onChange={handleChange}
              required
              type="textbox"
              className="input"
              id="pickupLocation"
              name="pickupLocation"
              placeholder="Postal code of errand/pickup location"
              value={data.pickupLocation}
            />
          </div>

          <div className="outer mb-3">
            <input
              onChange={handleChange}
              required
              type="number"
              className="input"
              id="deliveryLocation"
              name="deliveryLocation"
              placeholder="Postal code of delivery/ending location"
              value={data.deliveryLocation}
            />
          </div>
          <div className="outer date-inputs mb-3">
            <div classname="inputDate">
              <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                <DateTimePicker label="Pick Up Time" id="pickupTime" name="pickupTime" value={pickupDate} onChange={date => setPickupDate(date)} />
              </MuiPickersUtilsProvider>
            </div>
            <div classname="inputDate">
              <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                <DateTimePicker label="Delivery Time" id="deliveryTime" name="deliveryTime" value={deliveryDate} onChange={date => setDeliveryDate(date)}/>
              </MuiPickersUtilsProvider>
            </div>
          </div>

          <div className="outer moneyDisplay mb-3">
            <input
              onChange={handleChange}
              required
              type="number"
              className="input"
              id="itemPrice"
              name="itemPrice"
              placeholder="Price of Items being purchased (if applicable)"
              value={data.price}
            />
          </div>
          <div className="outer moneyDisplay mb-3">
            <input
              onChange={handleChange}
              required
              type="number"
              className="input"
              id="errandFee"
              name="errandFee"
              placeholder="Amount you are willing to pay for the errand"
              value={data.errandFee}
            />
          </div>

          <br />

          <button
            onClick={handleClick}
            className="inputButton"
          >
            <Link to={{ pathname: `/user/payment`, state: {errandData: errandData}}} className="navbar-item" href="">
              Add Errand
            </Link>
          </button>

        </div>
      </div>
    </>
  );
}

export default AddErrands;
