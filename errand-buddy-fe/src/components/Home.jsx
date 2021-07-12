import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrData from "../Data";
import Layout from "./Layout";
import axios from "axios";

const Home = () => {
  // const[]= [errandByOffer, setErrandbyOffer] = useState([])
  // const[]= [errandByArrival, setErrandbyArrival] = useState([])

  // const loadErrandByOffer = () => {
  //   addErrand('sold')
  //   .then(data => {
  //     if(data.error) {
  //       setError(data.error)
  //     } else {
  //       setErrandbyOffer(data)
  //     }
  //   })
  // }

  // const loadErrandByArrival = () => {
  //   addErrand('createdAt')
  //   .then(data => {
  //     if(data.error) {
  //       setError(data.error)
  //     } else {
  //       setErrandbyArrival(data)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   loadErrandByArrival()
  //   loadErrandByOffer()

  // }, [])

  const [data, setData] = useState(arrData);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")

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
        {/* {JSON.stringify(errandByArrival)}
    <hr/>
    {JSON.stringify{errandByOffer}} */}
      </Layout>

      <div className="container-fluid mt-5 ">
        <h2 className="mb-4">Latest Errand! </h2>
        <div className="row">
          {data.map((e) => (
            <div className="col-4 mb-3" key={e._id}>
              <div className="card-header" style={{ width: `25rem` }}>
              
                <div
                  className="card-body"
                  style={{ boxShadow: `5px 5px 15px orange` }}
                >
                 
                  <p className="card-header">Created By: {e.username}</p>
                  <br/>
                  <p>Errand Fee:{e.errandFee}</p>
                  <p>Item:{e.items}</p>
                  <p>Status:{e.status}</p>
                  <p>Delivery Location:{e.deliveryLocation}</p>

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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
