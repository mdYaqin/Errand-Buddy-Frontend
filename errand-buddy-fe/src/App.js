import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Shared Components
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";


//Buddy Components
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ShowErrands from "./components/pages/buddy/Show_errands";
import AcceptErrands from "./components/pages/buddy/Accept_errands";
import CompletedErrands from "./components/pages/buddy/Completed_errands";
import BuddyDashboard from "./components/pages/buddy/Buddy_dashboard";



class App extends React.Component {
  render() {
    return (
      
        <div className="app">

          <Router>
          <SiteHeader /> 
          
          <Switch>
            <Route path="/buddy/show" component={ShowErrands} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/buddy/accept-errands" component={AcceptErrands} />
            <Route path="/buddy/completed-errands" component={CompletedErrands} />
            <Route path="/buddy/buddy-dashboard" component={BuddyDashboard} />
            <Home />
            
          </Switch>
        

          <SiteFooter />

          </Router>


        </div>
      
    );
  }
}

export default App;
