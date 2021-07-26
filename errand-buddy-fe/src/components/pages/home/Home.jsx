import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Likes from "./Likes";
import "../../../style/Home.scss";

const Home = () => {
  const [data, setData] = useState([]);


  //For Search Bar
  const [searchField, setSearchField] = useState("") 

  let filteredErrands = data.filter( item =>
    item.items.toLowerCase().includes(searchField.toLowerCase())
  )

  //For Sort Bar
  const [sortedField, setSortedField] = useState([])


  const userId = localStorage.getItem("userId");
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/")

      .then(function (response) {
        // handle success
        setData(response.data.errands);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);


  return (
        
      <div className="home-body" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/home-background.jpg"})`,  backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
        <div className="home-headers">
          <h1>Errand Buddy</h1>
        </div>
        <div className="main-container mt-5" >
          <h2 className="mb-4">Available Errands! </h2>
          <input 
            type='search' 
            placeholder="Search the Errands"
            onChange={e => {setSearchField(e.target.value)} }
          />
          <div id="errand-container" className="errand-container row ">
            {filteredErrands.map((e) => {
                if (userId !== e.user_id) {
                  return (
                    <div className="errand-card mb-3" key={e._id}>
                      <div className="card-image">
                        <img src={e.image} alt="Item" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-header">{e.username}</h5>
                        <Link
                          to={{ pathname: `/${e._id}`, state: { e } }}
                          className=""
                          href=""
                        >
                          <h5 className="item-details">{e.items}</h5>
                        </Link>
                        <p>Errand Fee: ${e.errandFee}</p>
                        <p>Pickup At: {e.pickupLocation}</p>
                        <p>Deliver To: {e.deliveryLocation}</p>
                      </div>
                      <Likes errandId={e._id} userId={userId} />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>

  );
};

export default Home;
