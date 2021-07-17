import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  useParams
} from 'react-router-dom';

//Shared Components
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';

//Buddy Components
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ShowErrands from './components/pages/buddy/Show_errands';
import AcceptErrands from './components/pages/buddy/Accept_errands';
import CompletedErrands from './components/pages/buddy/Completed_errands';
import BuddyDashboard from './components/pages/buddy/Buddy_dashboard';

//User components

import UserDashboard from './components/pages/users/User_dashboard';
import UserReview from './components/pages/users/User_review';
import ErrandCompleted from './components/pages/users/Errand_completed';
import Payments from './components/pages/users/Payment';
import AddErrands from './components/pages/users/Add_errand';
import ErrandRequest from './components/pages/users/Errand_request';




function App() {
  const [isAuth, setAuth] = useState(false);
  const [reviews, setReviews] = useState([]);
  
  const displayReviews = (latestReview) => {
    setReviews([...reviews, latestReview]);
  }

  // const id = localStorage.getItem("jwt");
  // // const {id} = localStorage;
  // console.log(id, "localstorage userID");
  // const {userID} = useParams();
    return (
      <div className="app">
        
        <Router>
          
          <BrowserRouter>
          <SiteHeader setAuth={setAuth} isAuth={isAuth}/>
            <Switch>
            
              <Route
                path="/buddy/:errantID/completed-errands"
                exact
                render = { () => (<CompletedErrands />)}
              />
              <Route
                path="/buddy/:errantID/accept-errands"
                exact
                render={(props) => (<AcceptErrands {...props} />)}

              />
              <Route
                path="/buddy/buddy-dashboard"
                exact
                render={(props) => ( <BuddyDashboard reviews={reviews} />)}
              />
              <Route path="/buddy/:id" exact component={ShowErrands} />
              <Route path="/home" exact component={Home}  />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={()=> <Login setAuth={setAuth} />} />
              
              <Route path="/user/user-dashboard" exact component={UserDashboard} />
              <Route path="/user/user-review" exact render={(props) => (<UserReview reviews={reviews} displayReviews={displayReviews}/>)} />
              <Route path="/user/errand-completed" exact render={(props) => (<ErrandCompleted reviews={reviews} displayReviews={displayReviews} />)} />
              <Route path="/user/payment" exact component={Payments} />
              <Route path="/user/add-errand" exact component={AddErrands} />
              <Route path="/user/errand-request" exact component={ErrandRequest} />
              <Route path="/user/" exact component={()=> <Login setAuth={setAuth} />} />

              <Home />
            </Switch>
          </BrowserRouter>

          {/* <SiteFooter /> */}
        </Router>
      </div>
    );
  }


export default App;
