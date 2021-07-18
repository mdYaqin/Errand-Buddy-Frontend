import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

const Buddy_dashboard = (props) => {
  const history = useHistory()
  const [bool, setBool]= useState(true)
  const [user, setUser] = useState({
    user: {
      name: "",
      email: "",
      reviews: []
    },
    errands: {},
    balance: {balance: ""},
    inProgress: [
      {
        items: "",
        itemPrice: "",
        errandFee: "",
        image: "",
        _id:""
      },
    ],
    completed:[

    ]
  });

  const handleSubmit = (e) =>
  {
    const token = localStorage.getItem("jwt");
console.log(e);
      
    axios.post(`http://localhost:4000/api/errands/${ e }/completed`,{}, {
     headers: {
       "x-auth-token": token,
       "content-type": "application/json"
   }
    } ).then(response =>
    {
setBool(!bool);
     history.push(`/buddy/${e}/completed-errands`)
      
     })
   }
 
  const token = localStorage.getItem("jwt");

  const { name, email } = user.user;
  

  useEffect(() => {
    console.log(user);
  });

  useEffect(() => {
    // router.post('/:id/accepted', authenticated, errandController.accept)
    axios
      .get(`http://localhost:4000/api/users/dashboard`, {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      })
      .then((response) => {
        // history.push(`/buddy/buddy-dashboard`)
        console.log(response.data);
        setUser(response.data);
      });
  }, [bool]);
  // const handleChange = (name) => (event) => {
  //   setUser({...user, [name]: event.target.user})
  // }

  const dashboardLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Buddy Links</h4>
        <ul className="list-group">
          <Link className="nav-link" to="/"></Link>
          <li className="list-group-item">Balance: ${user.balance.balance}</li>
          <Link className="nav-link" to="/buddy/profile-update">
            Update Profile
          </Link>
        </ul>
      </div>
    );
  };

  const transactionHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Job history</h3>
        <ul className="list-group">
        {
          user.completed.length>0 ? 
            user.completed.map((e) => (   
              
        <div class="d-flex p-1 bg-secondary text-white justify-content-between">
          <div> 
           
          <div class="p-2 bg-info flex-fill">Items: {e.items}</div>
          <div class="p-2 bg-info flex-fill">Item price: ${e.itemPrice}</div>
          <div class="p-2 bg-info flex-fill">Errand fee: $ {e.errandFee}</div>
          </div>
          <div class="p-2 bg-info flex-fill">
            
            <img src={e.image} alt="" width="100" height="100" />
          
          </div>
            </div>
          ))              
            :         
            (
          <div>no outstanding jobs</div>
          )      
}  
        </ul>
      </div>
    );
  };

  const buddyRating = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Rating</h3>
        <ul className="list-group">
          <li className="list-group-item">
          {
          user.user.reviews.length>0 ? 
          user.user.reviews.map((e) => (   
              
        <div class="d-flex p-1 bg-secondary text-white justify-content-between">
          <div> 
              {console.log(e)}
          <div class="p-2 bg-info flex-fill">Item id: {e.errand_id}</div>
          <div class="p-2 bg-info flex-fill">rating: {e.rating} star</div>
          <div class="p-2 bg-info flex-fill">Feedback summary:{e.review}</div>
          </div>
          <div class="p-2 bg-info flex-fill">Rated by: {e.user_name}</div>
          </div>
          
         
          ))              
            :         
            (
          <div>no outstanding jobs</div>
          )      
} 
          </li>
        </ul>
      </div>
    );
  };
  const inProgress = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Errand In Progress</h3>
{
          user.inProgress.length>0 ? 
            user.inProgress.map((e) => (   
              
        <div class="d-flex p-1 bg-secondary text-white justify-content-between">
          <div> 
            
          <div class="p-2 bg-info flex-fill">Items: {e.items}</div>
          <div class="p-2 bg-info flex-fill">Item price: ${e.itemPrice}</div>
          <div class="p-2 bg-info flex-fill">Errand fee: $ {e.errandFee}</div>
          </div>
          <div class="p-2 bg-info flex-fill">
            
            <img src={e.image} alt="" width="100" height="100" />
            <button onClick={()=>handleSubmit(e._id)}>Complete Errand
            </button>
          </div>
            </div>
          ))              
            :         
            (
          <div>no outstanding jobs</div>
          )      
}            
      </div>
    );
  };

  return (
    <>
      <div title="Dashboard" description="  " className="container-fluid">
        <div className="card mb-5 ">
          <h3 className="card-header">User Information</h3>
          <ul className="list-group">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Email:{email}</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-3">{dashboardLinks()}</div>
          <div className="col-9">
            {transactionHistory()}
            {buddyRating()}
            {inProgress()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Buddy_dashboard;
