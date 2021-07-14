import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrData from "../Data";
import Layout from "./Layout";
import axios from "axios";
import './Home.scss'

const Home = () => {

  const [data, setData] = useState(arrData);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")

      .then(function (response) {
        // handle success
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[]);


  //Likes function
 
  return (
    <>
      <Layout
        title="Errand Buddy"
        description="Let us share your errands today."
      >
        {/* {JSON.stringify(errandByArrival)}
    <hr/>
    {JSON.stringify{errandByOffer}} */}
      </Layout>

      <div className="main-container container-fluid mt-5">
        <h2 className="mb-4">Available Errands! </h2>
        <div id="errand-container" className="errand-container row ">
          {data.map((e) => (
            <div className="errand-card mb-3" key={e._id}>
                <div className="card-image embed-responsive">
                  <img src={e.image} alt="Item" />
                </div>
                <div className="card-body">                 
                  <h5 className="card-header">{e.username}</h5>
                  <Link
                      to={{ pathname: `/buddy/${e._id}`, state: { e } }}
                      className=""
                      href=""
                    >
                      <h5 className="item-details">{e.items}</h5>    
                    </Link>   
                  <p>Errand Fee: ${e.errandFee}</p>
                  <p>Pickup At: {e.pickupLocation}</p>
                  <p>Deliver To: {e.deliveryLocation}</p>
                  <span className="card-like"><i class="far fa-heart"></i></span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
