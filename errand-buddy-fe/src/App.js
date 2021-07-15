import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
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
  const [isAuth, setAuth] = useState(false)
  
    return (
      <div className="app">
        
        <Router>
          
          <BrowserRouter>
          <SiteHeader setAuth={setAuth} isAuth={isAuth}/>
            <Switch>
            
              <Route
                path="/buddy/:id/completed-errands"
                exact
                component={CompletedErrands}
              />
              <Route
                path="/buddy/:id/accept-errands"
                exact
                component={AcceptErrands}
              />
              <Route
                path="/buddy/buddy-dashboard"
                exact
                component={BuddyDashboard}
              />
              <Route path="/buddy/:id" exact component={ShowErrands} />
              <Route path="/home" exact component={Home}  />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={()=> <Login setAuth={setAuth} />} />
              
              <Route path="/user/user-dashboard" exact component={UserDashboard} />
              <Route path="/user/user-review" exact component={UserReview} />
              <Route path="/user/errand-completed" exact component={ErrandCompleted} />
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
