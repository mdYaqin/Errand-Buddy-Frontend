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

  return (
    <>
      <Layout
        title="Errand Buddy"
        description="Let us share your errands today."
      >
        
      </Layout>

      <div className="main-container container-fluid mt-5">
        <h2 className="mb-4">Latest Available Errands! </h2>
        <div id="errand-container" className="errand-container row ">
          {data.map((e) => (
            <div className="errand-card mb-3" key={e._id}>
                <div className="card-image embed-responsive">
                  <img src={e.image} alt="Item" />
                </div>
                <div className="card-body">                 
                  <h4 className="card-header">{e.username}</h4>
                  <br/>
                  <p>Item:{e.items}</p>       
                  <p>Errand Fee:{e.errandFee}</p>
                  <p>Pickup At:{e.pickupLocation}</p>
                  <p>Deliver To:{e.deliveryLocation}</p>

                  <button className="btn btn-outline-primary mt-2 mb-2">
                    <Link
                      to={{ pathname: `/buddy/${e._id}`, state: { e } }}
                      className=""
                      href=""
                    >
                      Show Errand
                    </Link>
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
